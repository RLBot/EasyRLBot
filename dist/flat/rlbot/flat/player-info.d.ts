import * as flatbuffers from 'flatbuffers';
import { BoxShape, BoxShapeT } from '../../rlbot/flat/box-shape';
import { Physics, PhysicsT } from '../../rlbot/flat/physics';
import { ScoreInfo, ScoreInfoT } from '../../rlbot/flat/score-info';
import { Vector3, Vector3T } from '../../rlbot/flat/vector3';
export declare class PlayerInfo {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PlayerInfo;
    static getRootAsPlayerInfo(bb: flatbuffers.ByteBuffer, obj?: PlayerInfo): PlayerInfo;
    static getSizePrefixedRootAsPlayerInfo(bb: flatbuffers.ByteBuffer, obj?: PlayerInfo): PlayerInfo;
    physics(obj?: Physics): Physics | null;
    scoreInfo(obj?: ScoreInfo): ScoreInfo | null;
    isDemolished(): boolean;
    /**
     * True if your wheels are on the ground, the wall, or the ceiling. False if you're midair or turtling.
     */
    hasWheelContact(): boolean;
    isSupersonic(): boolean;
    isBot(): boolean;
    /**
     * True if the player has jumped. Falling off the ceiling / driving off the goal post does not count.
     */
    jumped(): boolean;
    /**
     *  True if player has double jumped. False does not mean you have a jump remaining, because the
     *  aerial timer can run out, and that doesn't affect this flag.
     */
    doubleJumped(): boolean;
    name(): string | null;
    name(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    team(): number;
    boost(): number;
    hitbox(obj?: BoxShape): BoxShape | null;
    hitboxOffset(obj?: Vector3): Vector3 | null;
    /**
     * In the case where the requested player index is not available, spawnId will help
     * the framework figure out what index was actually assigned to this player instead.
     */
    spawnId(): number;
    static startPlayerInfo(builder: flatbuffers.Builder): void;
    static addPhysics(builder: flatbuffers.Builder, physicsOffset: flatbuffers.Offset): void;
    static addScoreInfo(builder: flatbuffers.Builder, scoreInfoOffset: flatbuffers.Offset): void;
    static addIsDemolished(builder: flatbuffers.Builder, isDemolished: boolean): void;
    static addHasWheelContact(builder: flatbuffers.Builder, hasWheelContact: boolean): void;
    static addIsSupersonic(builder: flatbuffers.Builder, isSupersonic: boolean): void;
    static addIsBot(builder: flatbuffers.Builder, isBot: boolean): void;
    static addJumped(builder: flatbuffers.Builder, jumped: boolean): void;
    static addDoubleJumped(builder: flatbuffers.Builder, doubleJumped: boolean): void;
    static addName(builder: flatbuffers.Builder, nameOffset: flatbuffers.Offset): void;
    static addTeam(builder: flatbuffers.Builder, team: number): void;
    static addBoost(builder: flatbuffers.Builder, boost: number): void;
    static addHitbox(builder: flatbuffers.Builder, hitboxOffset: flatbuffers.Offset): void;
    static addHitboxOffset(builder: flatbuffers.Builder, hitboxOffsetOffset: flatbuffers.Offset): void;
    static addSpawnId(builder: flatbuffers.Builder, spawnId: number): void;
    static endPlayerInfo(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): PlayerInfoT;
    unpackTo(_o: PlayerInfoT): void;
}
export declare class PlayerInfoT {
    physics: PhysicsT | null;
    scoreInfo: ScoreInfoT | null;
    isDemolished: boolean;
    hasWheelContact: boolean;
    isSupersonic: boolean;
    isBot: boolean;
    jumped: boolean;
    doubleJumped: boolean;
    name: string | Uint8Array | null;
    team: number;
    boost: number;
    hitbox: BoxShapeT | null;
    hitboxOffset: Vector3T | null;
    spawnId: number;
    constructor(physics?: PhysicsT | null, scoreInfo?: ScoreInfoT | null, isDemolished?: boolean, hasWheelContact?: boolean, isSupersonic?: boolean, isBot?: boolean, jumped?: boolean, doubleJumped?: boolean, name?: string | Uint8Array | null, team?: number, boost?: number, hitbox?: BoxShapeT | null, hitboxOffset?: Vector3T | null, spawnId?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
