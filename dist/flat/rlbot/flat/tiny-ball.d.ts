import * as flatbuffers from 'flatbuffers';
import { Vector3, Vector3T } from '../../rlbot/flat/vector3';
/**
 * A minimal version of the ball, useful when bandwidth needs to be conserved.
 */
export declare class TinyBall {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TinyBall;
    static getRootAsTinyBall(bb: flatbuffers.ByteBuffer, obj?: TinyBall): TinyBall;
    static getSizePrefixedRootAsTinyBall(bb: flatbuffers.ByteBuffer, obj?: TinyBall): TinyBall;
    location(obj?: Vector3): Vector3 | null;
    velocity(obj?: Vector3): Vector3 | null;
    static startTinyBall(builder: flatbuffers.Builder): void;
    static addLocation(builder: flatbuffers.Builder, locationOffset: flatbuffers.Offset): void;
    static addVelocity(builder: flatbuffers.Builder, velocityOffset: flatbuffers.Offset): void;
    static endTinyBall(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): TinyBallT;
    unpackTo(_o: TinyBallT): void;
}
export declare class TinyBallT {
    location: Vector3T | null;
    velocity: Vector3T | null;
    constructor(location?: Vector3T | null, velocity?: Vector3T | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
