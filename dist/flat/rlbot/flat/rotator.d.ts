import * as flatbuffers from 'flatbuffers';
/**
 * Expresses the rotation state of an object in Euler angles, with values in radians.
 */
export declare class Rotator {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): Rotator;
    pitch(): number;
    yaw(): number;
    roll(): number;
    static sizeOf(): number;
    static createRotator(builder: flatbuffers.Builder, pitch: number, yaw: number, roll: number): flatbuffers.Offset;
    unpack(): RotatorT;
    unpackTo(_o: RotatorT): void;
}
export declare class RotatorT {
    pitch: number;
    yaw: number;
    roll: number;
    constructor(pitch?: number, yaw?: number, roll?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
