import * as flatbuffers from 'flatbuffers';
export declare class CylinderShape {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CylinderShape;
    static getRootAsCylinderShape(bb: flatbuffers.ByteBuffer, obj?: CylinderShape): CylinderShape;
    static getSizePrefixedRootAsCylinderShape(bb: flatbuffers.ByteBuffer, obj?: CylinderShape): CylinderShape;
    diameter(): number;
    height(): number;
    static startCylinderShape(builder: flatbuffers.Builder): void;
    static addDiameter(builder: flatbuffers.Builder, diameter: number): void;
    static addHeight(builder: flatbuffers.Builder, height: number): void;
    static endCylinderShape(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCylinderShape(builder: flatbuffers.Builder, diameter: number, height: number): flatbuffers.Offset;
    unpack(): CylinderShapeT;
    unpackTo(_o: CylinderShapeT): void;
}
export declare class CylinderShapeT {
    diameter: number;
    height: number;
    constructor(diameter?: number, height?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
