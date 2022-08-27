import * as flatbuffers from 'flatbuffers';
export declare class ScoreInfo {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ScoreInfo;
    static getRootAsScoreInfo(bb: flatbuffers.ByteBuffer, obj?: ScoreInfo): ScoreInfo;
    static getSizePrefixedRootAsScoreInfo(bb: flatbuffers.ByteBuffer, obj?: ScoreInfo): ScoreInfo;
    score(): number;
    goals(): number;
    ownGoals(): number;
    assists(): number;
    saves(): number;
    shots(): number;
    demolitions(): number;
    static startScoreInfo(builder: flatbuffers.Builder): void;
    static addScore(builder: flatbuffers.Builder, score: number): void;
    static addGoals(builder: flatbuffers.Builder, goals: number): void;
    static addOwnGoals(builder: flatbuffers.Builder, ownGoals: number): void;
    static addAssists(builder: flatbuffers.Builder, assists: number): void;
    static addSaves(builder: flatbuffers.Builder, saves: number): void;
    static addShots(builder: flatbuffers.Builder, shots: number): void;
    static addDemolitions(builder: flatbuffers.Builder, demolitions: number): void;
    static endScoreInfo(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createScoreInfo(builder: flatbuffers.Builder, score: number, goals: number, ownGoals: number, assists: number, saves: number, shots: number, demolitions: number): flatbuffers.Offset;
    unpack(): ScoreInfoT;
    unpackTo(_o: ScoreInfoT): void;
}
export declare class ScoreInfoT {
    score: number;
    goals: number;
    ownGoals: number;
    assists: number;
    saves: number;
    shots: number;
    demolitions: number;
    constructor(score?: number, goals?: number, ownGoals?: number, assists?: number, saves?: number, shots?: number, demolitions?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
