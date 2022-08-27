import * as flatbuffers from 'flatbuffers';
/**
 * Expresses the rotation state of an object.
 * Learn about quaternions here: https://en.wikipedia.org/wiki/Quaternions_and_spatial_rotation
 * You can tinker with them here to build an intuition: https://quaternions.online/
 */
export declare class Quaternion {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): Quaternion;
    x(): number;
    y(): number;
    z(): number;
    w(): number;
    static sizeOf(): number;
    static createQuaternion(builder: flatbuffers.Builder, x: number, y: number, z: number, w: number): flatbuffers.Offset;
    unpack(): QuaternionT;
    unpackTo(_o: QuaternionT): void;
}
export declare class QuaternionT {
    x: number;
    y: number;
    z: number;
    w: number;
    constructor(x?: number, y?: number, z?: number, w?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
