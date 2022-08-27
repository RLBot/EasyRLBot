import * as flatbuffers from 'flatbuffers';
export declare class DropShotBallInfo {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): DropShotBallInfo;
    static getRootAsDropShotBallInfo(bb: flatbuffers.ByteBuffer, obj?: DropShotBallInfo): DropShotBallInfo;
    static getSizePrefixedRootAsDropShotBallInfo(bb: flatbuffers.ByteBuffer, obj?: DropShotBallInfo): DropShotBallInfo;
    absorbedForce(): number;
    damageIndex(): number;
    forceAccumRecent(): number;
    static startDropShotBallInfo(builder: flatbuffers.Builder): void;
    static addAbsorbedForce(builder: flatbuffers.Builder, absorbedForce: number): void;
    static addDamageIndex(builder: flatbuffers.Builder, damageIndex: number): void;
    static addForceAccumRecent(builder: flatbuffers.Builder, forceAccumRecent: number): void;
    static endDropShotBallInfo(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createDropShotBallInfo(builder: flatbuffers.Builder, absorbedForce: number, damageIndex: number, forceAccumRecent: number): flatbuffers.Offset;
    unpack(): DropShotBallInfoT;
    unpackTo(_o: DropShotBallInfoT): void;
}
export declare class DropShotBallInfoT {
    absorbedForce: number;
    damageIndex: number;
    forceAccumRecent: number;
    constructor(absorbedForce?: number, damageIndex?: number, forceAccumRecent?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
