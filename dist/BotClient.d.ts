/// <reference types="node" />
import "colors";
import * as Net from "net";
import * as flat from "./flat/rlbot_generated";
import { ControllerManager } from "./ControllerManager";
import { GameState } from "./GameState";
import { RenderManager } from "./RenderManager";
import * as utils from "./utils";
declare class BotClient {
    ws: Net.Socket | null;
    standalone: boolean;
    readyMessageAccepted: boolean;
    latestFieldInfo: flat.FieldInfoT | null;
    latestBallPrediction: flat.BallPredictionT | null;
    latestMatchSettings: flat.MatchSettingsT | null;
    botIndex: number;
    logger: utils.Logger;
    renderer: RenderManager;
    controller: ControllerManager;
    GameTickPacketRate: number;
    private internalName;
    constructor(botIndex: number, ws?: Net.Socket | null);
    onReady(): void;
    getOutput(gameTickPacket: flat.GameTickPacketT, fieldInfo: flat.FieldInfoT | null, ballPrediction: flat.BallPredictionT | null, matchSettings: flat.MatchSettingsT | null): void;
    onGameTickPacket(gameTickPacket: flat.GameTickPacketT): void;
    onFieldInfo(fieldInfo: flat.FieldInfoT): void;
    onMatchSettings(matchSettings: flat.MatchSettingsT): void;
    onQuickChat(quickChat: flat.QuickChatT): void;
    onBallPrediction(ballPrediction: flat.BallPredictionT): void;
    private messageHandler;
    setGameState(newGameState: GameState): void;
    setMatchSettings(newMatchSettings: flat.MatchSettingsT): void;
    sendQuickChat(QuickChatSelection: number, teamOnly?: boolean): void;
    kill(): void;
    private start;
}
export { BotClient };
