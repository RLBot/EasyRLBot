import * as flatbuffers from 'flatbuffers';
export declare class BoxShape {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): BoxShape;
    static getRootAsBoxShape(bb: flatbuffers.ByteBuffer, obj?: BoxShape): BoxShape;
    static getSizePrefixedRootAsBoxShape(bb: flatbuffers.ByteBuffer, obj?: BoxShape): BoxShape;
    length(): number;
    width(): number;
    height(): number;
    static startBoxShape(builder: flatbuffers.Builder): void;
    static addLength(builder: flatbuffers.Builder, length: number): void;
    static addWidth(builder: flatbuffers.Builder, width: number): void;
    static addHeight(builder: flatbuffers.Builder, height: number): void;
    static endBoxShape(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createBoxShape(builder: flatbuffers.Builder, length: number, width: number, height: number): flatbuffers.Offset;
    unpack(): BoxShapeT;
    unpackTo(_o: BoxShapeT): void;
}
export declare class BoxShapeT {
    length: number;
    width: number;
    height: number;
    constructor(length?: number, width?: number, height?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
