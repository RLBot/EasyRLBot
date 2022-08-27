import * as flatbuffers from 'flatbuffers';
import { RigidBodyState, RigidBodyStateT } from '../../rlbot/flat/rigid-body-state';
/**
 * Rigid body state for the ball.
 */
export declare class BallRigidBodyState {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): BallRigidBodyState;
    static getRootAsBallRigidBodyState(bb: flatbuffers.ByteBuffer, obj?: BallRigidBodyState): BallRigidBodyState;
    static getSizePrefixedRootAsBallRigidBodyState(bb: flatbuffers.ByteBuffer, obj?: BallRigidBodyState): BallRigidBodyState;
    state(obj?: RigidBodyState): RigidBodyState | null;
    static startBallRigidBodyState(builder: flatbuffers.Builder): void;
    static addState(builder: flatbuffers.Builder, stateOffset: flatbuffers.Offset): void;
    static endBallRigidBodyState(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createBallRigidBodyState(builder: flatbuffers.Builder, stateOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): BallRigidBodyStateT;
    unpackTo(_o: BallRigidBodyStateT): void;
}
export declare class BallRigidBodyStateT {
    state: RigidBodyStateT | null;
    constructor(state?: RigidBodyStateT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
