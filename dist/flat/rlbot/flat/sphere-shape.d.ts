import * as flatbuffers from 'flatbuffers';
export declare class SphereShape {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SphereShape;
    static getRootAsSphereShape(bb: flatbuffers.ByteBuffer, obj?: SphereShape): SphereShape;
    static getSizePrefixedRootAsSphereShape(bb: flatbuffers.ByteBuffer, obj?: SphereShape): SphereShape;
    diameter(): number;
    static startSphereShape(builder: flatbuffers.Builder): void;
    static addDiameter(builder: flatbuffers.Builder, diameter: number): void;
    static endSphereShape(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSphereShape(builder: flatbuffers.Builder, diameter: number): flatbuffers.Offset;
    unpack(): SphereShapeT;
    unpackTo(_o: SphereShapeT): void;
}
export declare class SphereShapeT {
    diameter: number;
    constructor(diameter?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
