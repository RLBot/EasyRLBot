import * as flatbuffers from 'flatbuffers';
import { PredictionSlice, PredictionSliceT } from '../../rlbot/flat/prediction-slice';
export declare class BallPrediction {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): BallPrediction;
    static getRootAsBallPrediction(bb: flatbuffers.ByteBuffer, obj?: BallPrediction): BallPrediction;
    static getSizePrefixedRootAsBallPrediction(bb: flatbuffers.ByteBuffer, obj?: BallPrediction): BallPrediction;
    /**
     * A list of places the ball will be at specific times in the future.
     * It is guaranteed to sorted so that time increases with each slice.
     * It is NOT guaranteed to have a consistent amount of time between slices.
     */
    slices(index: number, obj?: PredictionSlice): PredictionSlice | null;
    slicesLength(): number;
    static startBallPrediction(builder: flatbuffers.Builder): void;
    static addSlices(builder: flatbuffers.Builder, slicesOffset: flatbuffers.Offset): void;
    static createSlicesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSlicesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endBallPrediction(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createBallPrediction(builder: flatbuffers.Builder, slicesOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): BallPredictionT;
    unpackTo(_o: BallPredictionT): void;
}
export declare class BallPredictionT {
    slices: (PredictionSliceT)[];
    constructor(slices?: (PredictionSliceT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
