import * as flatbuffers from 'flatbuffers';
import { Rotator, RotatorT } from '../../rlbot/flat/rotator';
import { Vector3, Vector3T } from '../../rlbot/flat/vector3';
/**
 * A minimal version of player data, useful when bandwidth needs to be conserved.
 */
export declare class TinyPlayer {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TinyPlayer;
    static getRootAsTinyPlayer(bb: flatbuffers.ByteBuffer, obj?: TinyPlayer): TinyPlayer;
    static getSizePrefixedRootAsTinyPlayer(bb: flatbuffers.ByteBuffer, obj?: TinyPlayer): TinyPlayer;
    location(obj?: Vector3): Vector3 | null;
    rotation(obj?: Rotator): Rotator | null;
    velocity(obj?: Vector3): Vector3 | null;
    hasWheelContact(): boolean;
    isSupersonic(): boolean;
    team(): number;
    boost(): number;
    static startTinyPlayer(builder: flatbuffers.Builder): void;
    static addLocation(builder: flatbuffers.Builder, locationOffset: flatbuffers.Offset): void;
    static addRotation(builder: flatbuffers.Builder, rotationOffset: flatbuffers.Offset): void;
    static addVelocity(builder: flatbuffers.Builder, velocityOffset: flatbuffers.Offset): void;
    static addHasWheelContact(builder: flatbuffers.Builder, hasWheelContact: boolean): void;
    static addIsSupersonic(builder: flatbuffers.Builder, isSupersonic: boolean): void;
    static addTeam(builder: flatbuffers.Builder, team: number): void;
    static addBoost(builder: flatbuffers.Builder, boost: number): void;
    static endTinyPlayer(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): TinyPlayerT;
    unpackTo(_o: TinyPlayerT): void;
}
export declare class TinyPlayerT {
    location: Vector3T | null;
    rotation: RotatorT | null;
    velocity: Vector3T | null;
    hasWheelContact: boolean;
    isSupersonic: boolean;
    team: number;
    boost: number;
    constructor(location?: Vector3T | null, rotation?: RotatorT | null, velocity?: Vector3T | null, hasWheelContact?: boolean, isSupersonic?: boolean, team?: number, boost?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
