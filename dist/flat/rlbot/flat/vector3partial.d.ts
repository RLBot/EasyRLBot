import * as flatbuffers from 'flatbuffers';
import { Float, FloatT } from '../../rlbot/flat/float';
export declare class Vector3Partial {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): Vector3Partial;
    static getRootAsVector3Partial(bb: flatbuffers.ByteBuffer, obj?: Vector3Partial): Vector3Partial;
    static getSizePrefixedRootAsVector3Partial(bb: flatbuffers.ByteBuffer, obj?: Vector3Partial): Vector3Partial;
    x(obj?: Float): Float | null;
    y(obj?: Float): Float | null;
    z(obj?: Float): Float | null;
    static startVector3Partial(builder: flatbuffers.Builder): void;
    static addX(builder: flatbuffers.Builder, xOffset: flatbuffers.Offset): void;
    static addY(builder: flatbuffers.Builder, yOffset: flatbuffers.Offset): void;
    static addZ(builder: flatbuffers.Builder, zOffset: flatbuffers.Offset): void;
    static endVector3Partial(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): Vector3PartialT;
    unpackTo(_o: Vector3PartialT): void;
}
export declare class Vector3PartialT {
    x: FloatT | null;
    y: FloatT | null;
    z: FloatT | null;
    constructor(x?: FloatT | null, y?: FloatT | null, z?: FloatT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
