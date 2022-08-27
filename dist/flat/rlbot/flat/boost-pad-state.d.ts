import * as flatbuffers from 'flatbuffers';
export declare class BoostPadState {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): BoostPadState;
    static getRootAsBoostPadState(bb: flatbuffers.ByteBuffer, obj?: BoostPadState): BoostPadState;
    static getSizePrefixedRootAsBoostPadState(bb: flatbuffers.ByteBuffer, obj?: BoostPadState): BoostPadState;
    /**
     * True if the boost can be picked up
     */
    isActive(): boolean;
    /**
     * The number of seconds since the boost has been picked up, or 0.0 if the boost is active.
     */
    timer(): number;
    static startBoostPadState(builder: flatbuffers.Builder): void;
    static addIsActive(builder: flatbuffers.Builder, isActive: boolean): void;
    static addTimer(builder: flatbuffers.Builder, timer: number): void;
    static endBoostPadState(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createBoostPadState(builder: flatbuffers.Builder, isActive: boolean, timer: number): flatbuffers.Offset;
    unpack(): BoostPadStateT;
    unpackTo(_o: BoostPadStateT): void;
}
export declare class BoostPadStateT {
    isActive: boolean;
    timer: number;
    constructor(isActive?: boolean, timer?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
