import * as flatbuffers from 'flatbuffers';
import { Bool, BoolT } from '../../rlbot/flat/bool';
import { Float, FloatT } from '../../rlbot/flat/float';
export declare class DesiredGameInfoState {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): DesiredGameInfoState;
    static getRootAsDesiredGameInfoState(bb: flatbuffers.ByteBuffer, obj?: DesiredGameInfoState): DesiredGameInfoState;
    static getSizePrefixedRootAsDesiredGameInfoState(bb: flatbuffers.ByteBuffer, obj?: DesiredGameInfoState): DesiredGameInfoState;
    worldGravityZ(obj?: Float): Float | null;
    gameSpeed(obj?: Float): Float | null;
    paused(obj?: Bool): Bool | null;
    endMatch(obj?: Bool): Bool | null;
    static startDesiredGameInfoState(builder: flatbuffers.Builder): void;
    static addWorldGravityZ(builder: flatbuffers.Builder, worldGravityZOffset: flatbuffers.Offset): void;
    static addGameSpeed(builder: flatbuffers.Builder, gameSpeedOffset: flatbuffers.Offset): void;
    static addPaused(builder: flatbuffers.Builder, pausedOffset: flatbuffers.Offset): void;
    static addEndMatch(builder: flatbuffers.Builder, endMatchOffset: flatbuffers.Offset): void;
    static endDesiredGameInfoState(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): DesiredGameInfoStateT;
    unpackTo(_o: DesiredGameInfoStateT): void;
}
export declare class DesiredGameInfoStateT {
    worldGravityZ: FloatT | null;
    gameSpeed: FloatT | null;
    paused: BoolT | null;
    endMatch: BoolT | null;
    constructor(worldGravityZ?: FloatT | null, gameSpeed?: FloatT | null, paused?: BoolT | null, endMatch?: BoolT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
