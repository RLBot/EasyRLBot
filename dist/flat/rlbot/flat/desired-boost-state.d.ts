import * as flatbuffers from 'flatbuffers';
import { Float, FloatT } from '../../rlbot/flat/float';
export declare class DesiredBoostState {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): DesiredBoostState;
    static getRootAsDesiredBoostState(bb: flatbuffers.ByteBuffer, obj?: DesiredBoostState): DesiredBoostState;
    static getSizePrefixedRootAsDesiredBoostState(bb: flatbuffers.ByteBuffer, obj?: DesiredBoostState): DesiredBoostState;
    respawnTime(obj?: Float): Float | null;
    static startDesiredBoostState(builder: flatbuffers.Builder): void;
    static addRespawnTime(builder: flatbuffers.Builder, respawnTimeOffset: flatbuffers.Offset): void;
    static endDesiredBoostState(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createDesiredBoostState(builder: flatbuffers.Builder, respawnTimeOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): DesiredBoostStateT;
    unpackTo(_o: DesiredBoostStateT): void;
}
export declare class DesiredBoostStateT {
    respawnTime: FloatT | null;
    constructor(respawnTime?: FloatT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
