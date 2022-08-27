import * as flatbuffers from 'flatbuffers';
export declare class GameInfo {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): GameInfo;
    static getRootAsGameInfo(bb: flatbuffers.ByteBuffer, obj?: GameInfo): GameInfo;
    static getSizePrefixedRootAsGameInfo(bb: flatbuffers.ByteBuffer, obj?: GameInfo): GameInfo;
    secondsElapsed(): number;
    gameTimeRemaining(): number;
    isOvertime(): boolean;
    isUnlimitedTime(): boolean;
    /**
     * True when cars are allowed to move, and during the pause menu. False during replays.
     */
    isRoundActive(): boolean;
    /**
     * True when the clock is paused due to kickoff, but false during kickoff countdown. In other words, it is true
     * while cars can move during kickoff. Note that if both players sit still, game clock start and this will become false.
     */
    isKickoffPause(): boolean;
    /**
     * Turns true after final replay, the moment the 'winner' screen appears. Remains true during next match
     * countdown. Turns false again the moment the 'choose team' screen appears.
     */
    isMatchEnded(): boolean;
    worldGravityZ(): number;
    /**
     * Game speed multiplier, 1.0 is regular game speed.
     */
    gameSpeed(): number;
    /**
     * Tracks the number of physics frames the game has computed.
     * May increase by more than one across consecutive packets.
     * Data type will roll over after 207 days at 120Hz.
     */
    frameNum(): number;
    static startGameInfo(builder: flatbuffers.Builder): void;
    static addSecondsElapsed(builder: flatbuffers.Builder, secondsElapsed: number): void;
    static addGameTimeRemaining(builder: flatbuffers.Builder, gameTimeRemaining: number): void;
    static addIsOvertime(builder: flatbuffers.Builder, isOvertime: boolean): void;
    static addIsUnlimitedTime(builder: flatbuffers.Builder, isUnlimitedTime: boolean): void;
    static addIsRoundActive(builder: flatbuffers.Builder, isRoundActive: boolean): void;
    static addIsKickoffPause(builder: flatbuffers.Builder, isKickoffPause: boolean): void;
    static addIsMatchEnded(builder: flatbuffers.Builder, isMatchEnded: boolean): void;
    static addWorldGravityZ(builder: flatbuffers.Builder, worldGravityZ: number): void;
    static addGameSpeed(builder: flatbuffers.Builder, gameSpeed: number): void;
    static addFrameNum(builder: flatbuffers.Builder, frameNum: number): void;
    static endGameInfo(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createGameInfo(builder: flatbuffers.Builder, secondsElapsed: number, gameTimeRemaining: number, isOvertime: boolean, isUnlimitedTime: boolean, isRoundActive: boolean, isKickoffPause: boolean, isMatchEnded: boolean, worldGravityZ: number, gameSpeed: number, frameNum: number): flatbuffers.Offset;
    unpack(): GameInfoT;
    unpackTo(_o: GameInfoT): void;
}
export declare class GameInfoT {
    secondsElapsed: number;
    gameTimeRemaining: number;
    isOvertime: boolean;
    isUnlimitedTime: boolean;
    isRoundActive: boolean;
    isKickoffPause: boolean;
    isMatchEnded: boolean;
    worldGravityZ: number;
    gameSpeed: number;
    frameNum: number;
    constructor(secondsElapsed?: number, gameTimeRemaining?: number, isOvertime?: boolean, isUnlimitedTime?: boolean, isRoundActive?: boolean, isKickoffPause?: boolean, isMatchEnded?: boolean, worldGravityZ?: number, gameSpeed?: number, frameNum?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
