import * as flatbuffers from 'flatbuffers';
import { RotatorPartial, RotatorPartialT } from '../../rlbot/flat/rotator-partial';
import { Vector3Partial, Vector3PartialT } from '../../rlbot/flat/vector3partial';
export declare class DesiredPhysics {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): DesiredPhysics;
    static getRootAsDesiredPhysics(bb: flatbuffers.ByteBuffer, obj?: DesiredPhysics): DesiredPhysics;
    static getSizePrefixedRootAsDesiredPhysics(bb: flatbuffers.ByteBuffer, obj?: DesiredPhysics): DesiredPhysics;
    location(obj?: Vector3Partial): Vector3Partial | null;
    rotation(obj?: RotatorPartial): RotatorPartial | null;
    velocity(obj?: Vector3Partial): Vector3Partial | null;
    angularVelocity(obj?: Vector3Partial): Vector3Partial | null;
    static startDesiredPhysics(builder: flatbuffers.Builder): void;
    static addLocation(builder: flatbuffers.Builder, locationOffset: flatbuffers.Offset): void;
    static addRotation(builder: flatbuffers.Builder, rotationOffset: flatbuffers.Offset): void;
    static addVelocity(builder: flatbuffers.Builder, velocityOffset: flatbuffers.Offset): void;
    static addAngularVelocity(builder: flatbuffers.Builder, angularVelocityOffset: flatbuffers.Offset): void;
    static endDesiredPhysics(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): DesiredPhysicsT;
    unpackTo(_o: DesiredPhysicsT): void;
}
export declare class DesiredPhysicsT {
    location: Vector3PartialT | null;
    rotation: RotatorPartialT | null;
    velocity: Vector3PartialT | null;
    angularVelocity: Vector3PartialT | null;
    constructor(location?: Vector3PartialT | null, rotation?: RotatorPartialT | null, velocity?: Vector3PartialT | null, angularVelocity?: Vector3PartialT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
