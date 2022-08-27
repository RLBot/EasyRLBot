import * as flatbuffers from 'flatbuffers';
import { Rotator, RotatorT } from '../../rlbot/flat/rotator';
import { Vector3, Vector3T } from '../../rlbot/flat/vector3';
export declare class Physics {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): Physics;
    static getRootAsPhysics(bb: flatbuffers.ByteBuffer, obj?: Physics): Physics;
    static getSizePrefixedRootAsPhysics(bb: flatbuffers.ByteBuffer, obj?: Physics): Physics;
    location(obj?: Vector3): Vector3 | null;
    rotation(obj?: Rotator): Rotator | null;
    velocity(obj?: Vector3): Vector3 | null;
    angularVelocity(obj?: Vector3): Vector3 | null;
    static startPhysics(builder: flatbuffers.Builder): void;
    static addLocation(builder: flatbuffers.Builder, locationOffset: flatbuffers.Offset): void;
    static addRotation(builder: flatbuffers.Builder, rotationOffset: flatbuffers.Offset): void;
    static addVelocity(builder: flatbuffers.Builder, velocityOffset: flatbuffers.Offset): void;
    static addAngularVelocity(builder: flatbuffers.Builder, angularVelocityOffset: flatbuffers.Offset): void;
    static endPhysics(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): PhysicsT;
    unpackTo(_o: PhysicsT): void;
}
export declare class PhysicsT {
    location: Vector3T | null;
    rotation: RotatorT | null;
    velocity: Vector3T | null;
    angularVelocity: Vector3T | null;
    constructor(location?: Vector3T | null, rotation?: RotatorT | null, velocity?: Vector3T | null, angularVelocity?: Vector3T | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
