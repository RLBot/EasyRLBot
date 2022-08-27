import "colors";
import * as Net from "net";
import * as flatbuffers from "flatbuffers";

import * as flat from "./flat/rlbot_generated";

import { Controller, ControllerManager } from "./ControllerManager";
import { GameState } from "./GameState";
import { RenderManager } from "./RenderManager";
import * as utils from "./utils";

class BotClient {
  ws: Net.Socket | null;
  standalone: boolean;
  readyMessageAccepted: boolean;

  latestFieldInfo: flat.FieldInfoT | null;
  latestBallPrediction: flat.BallPredictionT | null;
  latestMatchSettings: flat.MatchSettingsT | null;

  botIndex: number;

  logger: utils.Logger;

  renderer: RenderManager = new RenderManager(this);
  controller: ControllerManager = new ControllerManager(this);

  GameTickPacketRate: number = 0;

  private internalName: string;

  constructor(botIndex: number, ws: Net.Socket | null = null) {
    if (botIndex == null) throw new Error("Give bot index");
    this.botIndex = botIndex;
    this.internalName = `BOT-${this.botIndex}`;
    this.logger = new utils.Logger(this.internalName);

    this.standalone = ws == null;
    if (this.standalone) {
      const port = 23234;
      const host = "localhost";

      this.ws = new Net.Socket();
      this.logger.log("Socket", "Connecting...".yellow);
      this.ws.connect({ port, host }, () => {
        this.start();
      });
    } else {
      this.ws = ws || new Net.Socket();
      this.start();
    }
    this.readyMessageAccepted = false;

    this.latestFieldInfo = null;
    this.latestBallPrediction = null;
    this.latestMatchSettings = null;

    this.ws.on("data", (f) => {
      let chunks = utils.chunkSplitter(f);
      for (let chunk of chunks) {
        this.messageHandler(chunk);
      }
    });
  }

  onReady() {}

  getOutput(
    gameTickPacket: flat.GameTickPacketT,
    fieldInfo: flat.FieldInfoT | null,
    ballPrediction: flat.BallPredictionT | null,
    matchSettings: flat.MatchSettingsT | null
  ) {}

  onGameTickPacket(gameTickPacket: flat.GameTickPacketT) {}

  onFieldInfo(fieldInfo: flat.FieldInfoT) {}

  onMatchSettings(matchSettings: flat.MatchSettingsT) {}

  onQuickChat(quickChat: flat.QuickChatT) {}

  onBallPrediction(ballPrediction: flat.BallPredictionT) {}

  private messageHandler(raw: Uint8Array) {
    if (!this.readyMessageAccepted) {
      this.readyMessageAccepted = true;
      this.logger.log(
        "Socket",
        "Server accepted ready message and is now sending GameTickPackets".green
      );
      this.onReady();
    }
    if (this.ws === null) return;
    let parsedLoad;
    try {
      parsedLoad = utils.decodeFlat(raw);
    } catch {
      return this.logger.log(
        "Socket",
        "Recived incorrect data, socket is unstable."
      );
    }

    let cleanLoad = parsedLoad.root.unpack();

    // Can't use a switch statement here because typescript is too stupid to understand a switch(cleanLoad.constructor)

    if (cleanLoad instanceof flat.GameTickPacketT) {
      this.GameTickPacketRate++;
      setTimeout(
        (() => {
          this.GameTickPacketRate--;
        }).bind(this),
        1000
      );
      this.onGameTickPacket(cleanLoad);
      this.getOutput(
        cleanLoad,
        this.latestFieldInfo,
        this.latestBallPrediction,
        this.latestMatchSettings
      );
    }

    if (cleanLoad instanceof flat.FieldInfoT) {
      this.latestFieldInfo = cleanLoad;
      this.onFieldInfo(cleanLoad);
    }

    if (cleanLoad instanceof flat.MatchSettingsT) {
      this.latestMatchSettings = cleanLoad;
      this.onMatchSettings(cleanLoad);
    }

    if (cleanLoad instanceof flat.QuickChatT) {
      this.onQuickChat(cleanLoad);
    }

    if (cleanLoad instanceof flat.BallPredictionT) {
      this.latestBallPrediction = cleanLoad;
      this.onBallPrediction(cleanLoad);
    }
  }

  setGameState(newGameState: GameState) {
    let builder = new flatbuffers.Builder(1024);
    let finishedGameState = newGameState.convertToFlat(builder);
    builder.finish(finishedGameState);

    let buf = builder.asUint8Array();

    if (this.ws == null) return;
    this.ws.write(utils.encodeFlat(7, buf));
  }
  setMatchSettings(newMatchSettings: flat.MatchSettingsT) {
    this.logger.log(
      "MatchSettings",
      "This feature is not supported yet. Support is comming when json support is comming to RLBot."
    );
  }
  sendQuickChat(QuickChatSelection: number, teamOnly: boolean = false) {
    let quickChat = flat.QuickChat;

    let builder = new flatbuffers.Builder(1024);

    quickChat.startQuickChat(builder);
    quickChat.addQuickChatSelection(builder, QuickChatSelection);
    quickChat.addPlayerIndex(builder, this.botIndex);
    quickChat.addTeamOnly(builder, teamOnly);
    let quickchatOffset = quickChat.endQuickChat(builder);

    builder.finish(quickchatOffset);

    let buf = builder.asUint8Array();

    if (this.ws == null) return;
    this.ws.write(utils.encodeFlat(9, buf));
  }

  kill() {
    this.ws = null;
  }

  private async start() {
    if (this.standalone) this.logger.log("Socket", "Connected".green);
    let builder = new flatbuffers.Builder(1024);

    flat.ReadyMessage.startReadyMessage(builder);
    flat.ReadyMessage.addWantsBallPredictions(builder, true);
    flat.ReadyMessage.addWantsGameMessages(builder, true);
    flat.ReadyMessage.addWantsQuickChat(builder, true);

    let readyMessage = flat.ReadyMessage.endReadyMessage(builder);
    builder.finish(readyMessage);

    let readyMsgBuf = builder.asUint8Array();
    if (this.ws == null) return;
    this.ws.write(utils.encodeFlat(11, readyMsgBuf));
  }
}

export { BotClient };
