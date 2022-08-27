import * as flatbuffers from 'flatbuffers';
import { BoostPad, BoostPadT } from '../../rlbot/flat/boost-pad';
import { GoalInfo, GoalInfoT } from '../../rlbot/flat/goal-info';
export declare class FieldInfo {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): FieldInfo;
    static getRootAsFieldInfo(bb: flatbuffers.ByteBuffer, obj?: FieldInfo): FieldInfo;
    static getSizePrefixedRootAsFieldInfo(bb: flatbuffers.ByteBuffer, obj?: FieldInfo): FieldInfo;
    boostPads(index: number, obj?: BoostPad): BoostPad | null;
    boostPadsLength(): number;
    goals(index: number, obj?: GoalInfo): GoalInfo | null;
    goalsLength(): number;
    static startFieldInfo(builder: flatbuffers.Builder): void;
    static addBoostPads(builder: flatbuffers.Builder, boostPadsOffset: flatbuffers.Offset): void;
    static createBoostPadsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startBoostPadsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addGoals(builder: flatbuffers.Builder, goalsOffset: flatbuffers.Offset): void;
    static createGoalsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startGoalsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endFieldInfo(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createFieldInfo(builder: flatbuffers.Builder, boostPadsOffset: flatbuffers.Offset, goalsOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): FieldInfoT;
    unpackTo(_o: FieldInfoT): void;
}
export declare class FieldInfoT {
    boostPads: (BoostPadT)[];
    goals: (GoalInfoT)[];
    constructor(boostPads?: (BoostPadT)[], goals?: (GoalInfoT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
