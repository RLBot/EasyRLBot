import * as flatbuffers from 'flatbuffers';
export declare class Bool {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): Bool;
    val(): boolean;
    static sizeOf(): number;
    static createBool(builder: flatbuffers.Builder, val: boolean): flatbuffers.Offset;
    unpack(): BoolT;
    unpackTo(_o: BoolT): void;
}
export declare class BoolT {
    val: boolean;
    constructor(val?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
