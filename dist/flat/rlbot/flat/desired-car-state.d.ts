import * as flatbuffers from 'flatbuffers';
import { Bool, BoolT } from '../../rlbot/flat/bool';
import { DesiredPhysics, DesiredPhysicsT } from '../../rlbot/flat/desired-physics';
import { Float, FloatT } from '../../rlbot/flat/float';
export declare class DesiredCarState {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): DesiredCarState;
    static getRootAsDesiredCarState(bb: flatbuffers.ByteBuffer, obj?: DesiredCarState): DesiredCarState;
    static getSizePrefixedRootAsDesiredCarState(bb: flatbuffers.ByteBuffer, obj?: DesiredCarState): DesiredCarState;
    physics(obj?: DesiredPhysics): DesiredPhysics | null;
    boostAmount(obj?: Float): Float | null;
    jumped(obj?: Bool): Bool | null;
    doubleJumped(obj?: Bool): Bool | null;
    static startDesiredCarState(builder: flatbuffers.Builder): void;
    static addPhysics(builder: flatbuffers.Builder, physicsOffset: flatbuffers.Offset): void;
    static addBoostAmount(builder: flatbuffers.Builder, boostAmountOffset: flatbuffers.Offset): void;
    static addJumped(builder: flatbuffers.Builder, jumpedOffset: flatbuffers.Offset): void;
    static addDoubleJumped(builder: flatbuffers.Builder, doubleJumpedOffset: flatbuffers.Offset): void;
    static endDesiredCarState(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): DesiredCarStateT;
    unpackTo(_o: DesiredCarStateT): void;
}
export declare class DesiredCarStateT {
    physics: DesiredPhysicsT | null;
    boostAmount: FloatT | null;
    jumped: BoolT | null;
    doubleJumped: BoolT | null;
    constructor(physics?: DesiredPhysicsT | null, boostAmount?: FloatT | null, jumped?: BoolT | null, doubleJumped?: BoolT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
