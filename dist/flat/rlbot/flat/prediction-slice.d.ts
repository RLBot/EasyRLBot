import * as flatbuffers from 'flatbuffers';
import { Physics, PhysicsT } from '../../rlbot/flat/physics';
export declare class PredictionSlice {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PredictionSlice;
    static getRootAsPredictionSlice(bb: flatbuffers.ByteBuffer, obj?: PredictionSlice): PredictionSlice;
    static getSizePrefixedRootAsPredictionSlice(bb: flatbuffers.ByteBuffer, obj?: PredictionSlice): PredictionSlice;
    /**
     * The moment in game time that this prediction corresponds to.
     * This corresponds to 'secondsElapsed' in the GameInfo table.
     */
    gameSeconds(): number;
    /**
     * The predicted location and motion of the object.
     */
    physics(obj?: Physics): Physics | null;
    static startPredictionSlice(builder: flatbuffers.Builder): void;
    static addGameSeconds(builder: flatbuffers.Builder, gameSeconds: number): void;
    static addPhysics(builder: flatbuffers.Builder, physicsOffset: flatbuffers.Offset): void;
    static endPredictionSlice(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): PredictionSliceT;
    unpackTo(_o: PredictionSliceT): void;
}
export declare class PredictionSliceT {
    gameSeconds: number;
    physics: PhysicsT | null;
    constructor(gameSeconds?: number, physics?: PhysicsT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
