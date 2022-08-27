import * as flatbuffers from 'flatbuffers';
export declare class Vector3 {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): Vector3;
    x(): number;
    y(): number;
    z(): number;
    static sizeOf(): number;
    static createVector3(builder: flatbuffers.Builder, x: number, y: number, z: number): flatbuffers.Offset;
    unpack(): Vector3T;
    unpackTo(_o: Vector3T): void;
}
export declare class Vector3T {
    x: number;
    y: number;
    z: number;
    constructor(x?: number, y?: number, z?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
