import * as flatbuffers from 'flatbuffers';
import { Quaternion, QuaternionT } from '../../rlbot/flat/quaternion';
import { Vector3, Vector3T } from '../../rlbot/flat/vector3';
/**
 * The state of a rigid body in Rocket League's physics engine.
 * This gets updated in time with the physics tick, not the rendering framerate.
 * The frame field will be incremented every time the physics engine ticks.
 */
export declare class RigidBodyState {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RigidBodyState;
    static getRootAsRigidBodyState(bb: flatbuffers.ByteBuffer, obj?: RigidBodyState): RigidBodyState;
    static getSizePrefixedRootAsRigidBodyState(bb: flatbuffers.ByteBuffer, obj?: RigidBodyState): RigidBodyState;
    frame(): number;
    location(obj?: Vector3): Vector3 | null;
    rotation(obj?: Quaternion): Quaternion | null;
    velocity(obj?: Vector3): Vector3 | null;
    angularVelocity(obj?: Vector3): Vector3 | null;
    static startRigidBodyState(builder: flatbuffers.Builder): void;
    static addFrame(builder: flatbuffers.Builder, frame: number): void;
    static addLocation(builder: flatbuffers.Builder, locationOffset: flatbuffers.Offset): void;
    static addRotation(builder: flatbuffers.Builder, rotationOffset: flatbuffers.Offset): void;
    static addVelocity(builder: flatbuffers.Builder, velocityOffset: flatbuffers.Offset): void;
    static addAngularVelocity(builder: flatbuffers.Builder, angularVelocityOffset: flatbuffers.Offset): void;
    static endRigidBodyState(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): RigidBodyStateT;
    unpackTo(_o: RigidBodyStateT): void;
}
export declare class RigidBodyStateT {
    frame: number;
    location: Vector3T | null;
    rotation: QuaternionT | null;
    velocity: Vector3T | null;
    angularVelocity: Vector3T | null;
    constructor(frame?: number, location?: Vector3T | null, rotation?: QuaternionT | null, velocity?: Vector3T | null, angularVelocity?: Vector3T | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
