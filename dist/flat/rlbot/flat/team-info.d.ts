import * as flatbuffers from 'flatbuffers';
export declare class TeamInfo {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TeamInfo;
    static getRootAsTeamInfo(bb: flatbuffers.ByteBuffer, obj?: TeamInfo): TeamInfo;
    static getSizePrefixedRootAsTeamInfo(bb: flatbuffers.ByteBuffer, obj?: TeamInfo): TeamInfo;
    teamIndex(): number;
    /**
     * number of goals scored.
     */
    score(): number;
    static startTeamInfo(builder: flatbuffers.Builder): void;
    static addTeamIndex(builder: flatbuffers.Builder, teamIndex: number): void;
    static addScore(builder: flatbuffers.Builder, score: number): void;
    static endTeamInfo(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createTeamInfo(builder: flatbuffers.Builder, teamIndex: number, score: number): flatbuffers.Offset;
    unpack(): TeamInfoT;
    unpackTo(_o: TeamInfoT): void;
}
export declare class TeamInfoT {
    teamIndex: number;
    score: number;
    constructor(teamIndex?: number, score?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
