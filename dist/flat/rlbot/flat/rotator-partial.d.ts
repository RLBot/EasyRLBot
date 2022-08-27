import * as flatbuffers from 'flatbuffers';
import { Float, FloatT } from '../../rlbot/flat/float';
export declare class RotatorPartial {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RotatorPartial;
    static getRootAsRotatorPartial(bb: flatbuffers.ByteBuffer, obj?: RotatorPartial): RotatorPartial;
    static getSizePrefixedRootAsRotatorPartial(bb: flatbuffers.ByteBuffer, obj?: RotatorPartial): RotatorPartial;
    pitch(obj?: Float): Float | null;
    yaw(obj?: Float): Float | null;
    roll(obj?: Float): Float | null;
    static startRotatorPartial(builder: flatbuffers.Builder): void;
    static addPitch(builder: flatbuffers.Builder, pitchOffset: flatbuffers.Offset): void;
    static addYaw(builder: flatbuffers.Builder, yawOffset: flatbuffers.Offset): void;
    static addRoll(builder: flatbuffers.Builder, rollOffset: flatbuffers.Offset): void;
    static endRotatorPartial(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): RotatorPartialT;
    unpackTo(_o: RotatorPartialT): void;
}
export declare class RotatorPartialT {
    pitch: FloatT | null;
    yaw: FloatT | null;
    roll: FloatT | null;
    constructor(pitch?: FloatT | null, yaw?: FloatT | null, roll?: FloatT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
