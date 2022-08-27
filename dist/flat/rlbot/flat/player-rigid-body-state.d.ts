import * as flatbuffers from 'flatbuffers';
import { ControllerState, ControllerStateT } from '../../rlbot/flat/controller-state';
import { RigidBodyState, RigidBodyStateT } from '../../rlbot/flat/rigid-body-state';
/**
 * Rigid body state for a player / car in the game. Includes the latest
 * controller input, which is otherwise difficult to correlate with consequences.
 */
export declare class PlayerRigidBodyState {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PlayerRigidBodyState;
    static getRootAsPlayerRigidBodyState(bb: flatbuffers.ByteBuffer, obj?: PlayerRigidBodyState): PlayerRigidBodyState;
    static getSizePrefixedRootAsPlayerRigidBodyState(bb: flatbuffers.ByteBuffer, obj?: PlayerRigidBodyState): PlayerRigidBodyState;
    state(obj?: RigidBodyState): RigidBodyState | null;
    input(obj?: ControllerState): ControllerState | null;
    static startPlayerRigidBodyState(builder: flatbuffers.Builder): void;
    static addState(builder: flatbuffers.Builder, stateOffset: flatbuffers.Offset): void;
    static addInput(builder: flatbuffers.Builder, inputOffset: flatbuffers.Offset): void;
    static endPlayerRigidBodyState(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): PlayerRigidBodyStateT;
    unpackTo(_o: PlayerRigidBodyStateT): void;
}
export declare class PlayerRigidBodyStateT {
    state: RigidBodyStateT | null;
    input: ControllerStateT | null;
    constructor(state?: RigidBodyStateT | null, input?: ControllerStateT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
