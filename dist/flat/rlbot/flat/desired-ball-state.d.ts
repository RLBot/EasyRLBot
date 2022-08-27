import * as flatbuffers from 'flatbuffers';
import { DesiredPhysics, DesiredPhysicsT } from '../../rlbot/flat/desired-physics';
export declare class DesiredBallState {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): DesiredBallState;
    static getRootAsDesiredBallState(bb: flatbuffers.ByteBuffer, obj?: DesiredBallState): DesiredBallState;
    static getSizePrefixedRootAsDesiredBallState(bb: flatbuffers.ByteBuffer, obj?: DesiredBallState): DesiredBallState;
    physics(obj?: DesiredPhysics): DesiredPhysics | null;
    static startDesiredBallState(builder: flatbuffers.Builder): void;
    static addPhysics(builder: flatbuffers.Builder, physicsOffset: flatbuffers.Offset): void;
    static endDesiredBallState(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createDesiredBallState(builder: flatbuffers.Builder, physicsOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): DesiredBallStateT;
    unpackTo(_o: DesiredBallStateT): void;
}
export declare class DesiredBallStateT {
    physics: DesiredPhysicsT | null;
    constructor(physics?: DesiredPhysicsT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
