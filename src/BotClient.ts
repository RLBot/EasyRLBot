import "colors";
import Net from "net";
import { flatbuffers } from "flatbuffers";

import { rlbot } from "./flat/rlbot_generated";

import { Controller, ControllerManager } from "./ControllerManager";
import { GameState } from "./GameState";
import { RenderManager } from "./RenderManager";
import * as utils from "./utils";

class BotClient {
  ws: Net.Socket;
  standalone: boolean;
  readyMessageAccepted: boolean;

  latestFieldInfo: utils.flatstructs.FieldInfo | null;
  latestBallPrediction: utils.flatstructs.BallPrediction | null;
  latestMatchSettings: utils.flatstructs.MatchSettings | null;

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

    this.ws.on("data", (f) => {
      this.messageHandler(f);
    });
    this.readyMessageAccepted = false;

    this.latestFieldInfo = null;
    this.latestBallPrediction = null;
    this.latestMatchSettings = null;
  }

  onReady() {}

  getOutput(
    gameTickPacket: utils.flatstructs.GameTickPacket,
    fieldInfo: utils.flatstructs.FieldInfo | null,
    ballPrediction: utils.flatstructs.BallPrediction | null,
    matchSettings: utils.flatstructs.MatchSettings | null
  ) {}

  onGameTickPacket(gameTickPacket: utils.flatstructs.GameTickPacket) {}

  onFieldInfo(fieldInfo: utils.flatstructs.FieldInfo) {}

  onMatchSettings(matchSettings: utils.flatstructs.MatchSettings) {}

  onQuickChat(quickChat: utils.flatstructs.QuickChat) {}

  onBallPrediction(ballPrediction: utils.flatstructs.BallPrediction) {}

  private messageHandler(raw: Uint8Array) {
    if (!this.readyMessageAccepted) {
      this.readyMessageAccepted = true;
      this.logger.log(
        "Socket",
        "Server accepted ready message and is now sending GameTickPackets".green
      );
      this.onReady();
    }
    let parsedLoad;
    try {
      parsedLoad = utils.decodeFlat(raw);
    } catch {
      return this.logger.log(
        "Socket",
        "Recived incorrect data, socket is unstable."
      );
    }
    let cleanLoad;
    switch (parsedLoad.type) {
      case 1:
        this.GameTickPacketRate++;
        setTimeout(
          (() => {
            this.GameTickPacketRate--;
          }).bind(this),
          1000
        );
        cleanLoad = new utils.flatstructs.GameTickPacket(parsedLoad.root);
        this.onGameTickPacket(cleanLoad);
        this.getOutput(
          cleanLoad,
          this.latestFieldInfo,
          this.latestBallPrediction,
          this.latestMatchSettings
        );
        break;
      case 2:
        cleanLoad = new utils.flatstructs.FieldInfo(parsedLoad.root);
        this.onFieldInfo(cleanLoad);
        this.latestFieldInfo = cleanLoad;
        break;
      case 3:
        cleanLoad = new utils.flatstructs.MatchSettings(parsedLoad.root);
        this.onMatchSettings(cleanLoad);
        this.latestMatchSettings = cleanLoad;
        break;
      case 9:
        cleanLoad = new utils.flatstructs.QuickChat(parsedLoad.root);
        this.onQuickChat(cleanLoad);
        break;
      case 10:
        cleanLoad = new utils.flatstructs.BallPrediction(parsedLoad.root);
        this.onBallPrediction(cleanLoad);
        this.latestBallPrediction = cleanLoad;
        break;
    }
  }

  setGameState(newGameState: GameState) {
    let builder = new flatbuffers.Builder(1024);
    let finishedGameState = newGameState.convertToFlat(builder);
    builder.finish(finishedGameState);

    let buf = builder.asUint8Array();

    this.ws.write(utils.encodeFlat(7, buf));
  }
  setMatchSettings(newMatchSettings: utils.flatstructs.MatchSettings) {
    this.logger.log(
      "MatchSettings",
      "This feature is not supported yet. Support is comming when json support is comming to RLBot."
    );
  }
  sendQuickChat(QuickChatSelection: number, teamOnly: boolean = false) {
    let quickChat = rlbot.flat.QuickChat;

    let builder = new flatbuffers.Builder(1024);

    quickChat.startQuickChat(builder);
    quickChat.addQuickChatSelection(builder, QuickChatSelection);
    quickChat.addPlayerIndex(builder, this.botIndex);
    quickChat.addTeamOnly(builder, teamOnly);
    let quickchatOffset = quickChat.endQuickChat(builder);

    builder.finish(quickchatOffset);

    let buf = builder.asUint8Array();

    this.ws.write(utils.encodeFlat(9, buf));
  }

  private async start() {
    if (this.standalone) this.logger.log("Socket", "Connected".green);
    let builder = new flatbuffers.Builder(1024);

    rlbot.flat.ReadyMessage.startReadyMessage(builder);
    rlbot.flat.ReadyMessage.addWantsBallPredictions(builder, true);
    rlbot.flat.ReadyMessage.addWantsGameMessages(builder, true);
    rlbot.flat.ReadyMessage.addWantsQuickChat(builder, true);

    let readyMessage = rlbot.flat.ReadyMessage.endReadyMessage(builder);
    builder.finish(readyMessage);

    let readyMsgBuf = builder.asUint8Array();
    this.ws.write(utils.encodeFlat(11, readyMsgBuf));
  }
}

export { BotClient };
