import * as flatbuffers from "flatbuffers";
/**
 * Notification that a player triggers some in-game event, such as:
 *		Win, Loss, TimePlayed;
 *		Shot, Assist, Center, Clear, PoolShot;
 *		Goal, AerialGoal, BicycleGoal, BulletGoal, BackwardsGoal, LongGoal, OvertimeGoal, TurtleGoal;
 *		AerialHit, BicycleHit, BulletHit, /*BackwardsHit,* / JuggleHit, FirstTouch, BallHit;
 *		Save, EpicSave, FreezeSave;
 *		HatTrick, Savior, Playmaker, MVP;
 *		FastestGoal, SlowestGoal, FurthestGoal, OwnGoal;
 *		MostBallTouches, FewestBallTouches, MostBoostPickups, FewestBoostPickups, BoostPickups;
 *		CarTouches, Demolition, Demolish;
 *		LowFive, HighFive;
 */
export declare class PlayerStatEvent {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PlayerStatEvent;
    static getRootAsPlayerStatEvent(bb: flatbuffers.ByteBuffer, obj?: PlayerStatEvent): PlayerStatEvent;
    static getSizePrefixedRootAsPlayerStatEvent(bb: flatbuffers.ByteBuffer, obj?: PlayerStatEvent): PlayerStatEvent;
    /**
     * index of the player associated with the event
     */
    playerIndex(): number;
    /**
     * Event type
     */
    statType(): string | null;
    statType(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startPlayerStatEvent(builder: flatbuffers.Builder): void;
    static addPlayerIndex(builder: flatbuffers.Builder, playerIndex: number): void;
    static addStatType(builder: flatbuffers.Builder, statTypeOffset: flatbuffers.Offset): void;
    static endPlayerStatEvent(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPlayerStatEvent(builder: flatbuffers.Builder, playerIndex: number, statTypeOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PlayerStatEventT;
    unpackTo(_o: PlayerStatEventT): void;
}
export declare class PlayerStatEventT {
    playerIndex: number;
    statType: string | Uint8Array | null;
    constructor(playerIndex?: number, statType?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
