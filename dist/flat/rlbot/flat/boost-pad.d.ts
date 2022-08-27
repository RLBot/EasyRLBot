import * as flatbuffers from 'flatbuffers';
import { Vector3, Vector3T } from '../../rlbot/flat/vector3';
export declare class BoostPad {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): BoostPad;
    static getRootAsBoostPad(bb: flatbuffers.ByteBuffer, obj?: BoostPad): BoostPad;
    static getSizePrefixedRootAsBoostPad(bb: flatbuffers.ByteBuffer, obj?: BoostPad): BoostPad;
    location(obj?: Vector3): Vector3 | null;
    isFullBoost(): boolean;
    static startBoostPad(builder: flatbuffers.Builder): void;
    static addLocation(builder: flatbuffers.Builder, locationOffset: flatbuffers.Offset): void;
    static addIsFullBoost(builder: flatbuffers.Builder, isFullBoost: boolean): void;
    static endBoostPad(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createBoostPad(builder: flatbuffers.Builder, locationOffset: flatbuffers.Offset, isFullBoost: boolean): flatbuffers.Offset;
    unpack(): BoostPadT;
    unpackTo(_o: BoostPadT): void;
}
export declare class BoostPadT {
    location: Vector3T | null;
    isFullBoost: boolean;
    constructor(location?: Vector3T | null, isFullBoost?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
