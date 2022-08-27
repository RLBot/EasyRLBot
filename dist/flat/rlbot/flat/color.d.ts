import * as flatbuffers from 'flatbuffers';
export declare class Color {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): Color;
    static getRootAsColor(bb: flatbuffers.ByteBuffer, obj?: Color): Color;
    static getSizePrefixedRootAsColor(bb: flatbuffers.ByteBuffer, obj?: Color): Color;
    a(): number;
    r(): number;
    g(): number;
    b(): number;
    static startColor(builder: flatbuffers.Builder): void;
    static addA(builder: flatbuffers.Builder, a: number): void;
    static addR(builder: flatbuffers.Builder, r: number): void;
    static addG(builder: flatbuffers.Builder, g: number): void;
    static addB(builder: flatbuffers.Builder, b: number): void;
    static endColor(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createColor(builder: flatbuffers.Builder, a: number, r: number, g: number, b: number): flatbuffers.Offset;
    unpack(): ColorT;
    unpackTo(_o: ColorT): void;
}
export declare class ColorT {
    a: number;
    r: number;
    g: number;
    b: number;
    constructor(a?: number, r?: number, g?: number, b?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
