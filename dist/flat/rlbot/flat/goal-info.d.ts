import * as flatbuffers from 'flatbuffers';
import { Vector3, Vector3T } from '../../rlbot/flat/vector3';
export declare class GoalInfo {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): GoalInfo;
    static getRootAsGoalInfo(bb: flatbuffers.ByteBuffer, obj?: GoalInfo): GoalInfo;
    static getSizePrefixedRootAsGoalInfo(bb: flatbuffers.ByteBuffer, obj?: GoalInfo): GoalInfo;
    teamNum(): number;
    location(obj?: Vector3): Vector3 | null;
    direction(obj?: Vector3): Vector3 | null;
    width(): number;
    height(): number;
    static startGoalInfo(builder: flatbuffers.Builder): void;
    static addTeamNum(builder: flatbuffers.Builder, teamNum: number): void;
    static addLocation(builder: flatbuffers.Builder, locationOffset: flatbuffers.Offset): void;
    static addDirection(builder: flatbuffers.Builder, directionOffset: flatbuffers.Offset): void;
    static addWidth(builder: flatbuffers.Builder, width: number): void;
    static addHeight(builder: flatbuffers.Builder, height: number): void;
    static endGoalInfo(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): GoalInfoT;
    unpackTo(_o: GoalInfoT): void;
}
export declare class GoalInfoT {
    teamNum: number;
    location: Vector3T | null;
    direction: Vector3T | null;
    width: number;
    height: number;
    constructor(teamNum?: number, location?: Vector3T | null, direction?: Vector3T | null, width?: number, height?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
