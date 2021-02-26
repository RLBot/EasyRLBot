/// <reference types="node" />
import "colors";
import Net from "net";
import { ControllerManager } from "./ControllerManager";
import { GameState } from "./GameState";
import { RenderManager } from "./RenderManager";
import * as utils from "./utils";
declare class BotClient {
    ws: Net.Socket;
    standalone: boolean;
    readyMessageAccepted: boolean;
    latestFieldInfo: utils.flatstructs.FieldInfo | null;
    latestBallPrediction: utils.flatstructs.BallPrediction | null;
    latestMatchSettings: utils.flatstructs.MatchSettings | null;
    botIndex: number;
    logger: utils.Logger;
    renderer: RenderManager;
    controller: ControllerManager;
    GameTickPacketRate: number;
    private internalName;
    constructor(botIndex: number, ws?: Net.Socket | null);
    onReady(): void;
    getOutput(gameTickPacket: utils.flatstructs.GameTickPacket, fieldInfo: utils.flatstructs.FieldInfo | null, ballPrediction: utils.flatstructs.BallPrediction | null, matchSettings: utils.flatstructs.MatchSettings | null): void;
    onGameTickPacket(gameTickPacket: utils.flatstructs.GameTickPacket): void;
    onFieldInfo(fieldInfo: utils.flatstructs.FieldInfo): void;
    onMatchSettings(matchSettings: utils.flatstructs.MatchSettings): void;
    onQuickChat(quickChat: utils.flatstructs.QuickChat): void;
    onBallPrediction(ballPrediction: utils.flatstructs.BallPrediction): void;
    private messageHandler;
    setGameState(newGameState: GameState): void;
    setMatchSettings(newMatchSettings: utils.flatstructs.MatchSettings): void;
    sendQuickChat(QuickChatSelection: number, teamOnly?: boolean): void;
    private start;
}
export { BotClient };
//# sourceMappingURL=BotClient.d.ts.map