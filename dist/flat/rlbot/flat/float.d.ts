import * as flatbuffers from 'flatbuffers';
export declare class Float {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): Float;
    val(): number;
    static sizeOf(): number;
    static createFloat(builder: flatbuffers.Builder, val: number): flatbuffers.Offset;
    unpack(): FloatT;
    unpackTo(_o: FloatT): void;
}
export declare class FloatT {
    val: number;
    constructor(val?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
