import * as flatbuffers from 'flatbuffers';
/**
 * Specification for 'painted' items. See https://github.com/RLBot/RLBot/wiki/Bot-Customization
 */
export declare class LoadoutPaint {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): LoadoutPaint;
    static getRootAsLoadoutPaint(bb: flatbuffers.ByteBuffer, obj?: LoadoutPaint): LoadoutPaint;
    static getSizePrefixedRootAsLoadoutPaint(bb: flatbuffers.ByteBuffer, obj?: LoadoutPaint): LoadoutPaint;
    carPaintId(): number;
    decalPaintId(): number;
    wheelsPaintId(): number;
    boostPaintId(): number;
    antennaPaintId(): number;
    hatPaintId(): number;
    trailsPaintId(): number;
    goalExplosionPaintId(): number;
    static startLoadoutPaint(builder: flatbuffers.Builder): void;
    static addCarPaintId(builder: flatbuffers.Builder, carPaintId: number): void;
    static addDecalPaintId(builder: flatbuffers.Builder, decalPaintId: number): void;
    static addWheelsPaintId(builder: flatbuffers.Builder, wheelsPaintId: number): void;
    static addBoostPaintId(builder: flatbuffers.Builder, boostPaintId: number): void;
    static addAntennaPaintId(builder: flatbuffers.Builder, antennaPaintId: number): void;
    static addHatPaintId(builder: flatbuffers.Builder, hatPaintId: number): void;
    static addTrailsPaintId(builder: flatbuffers.Builder, trailsPaintId: number): void;
    static addGoalExplosionPaintId(builder: flatbuffers.Builder, goalExplosionPaintId: number): void;
    static endLoadoutPaint(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createLoadoutPaint(builder: flatbuffers.Builder, carPaintId: number, decalPaintId: number, wheelsPaintId: number, boostPaintId: number, antennaPaintId: number, hatPaintId: number, trailsPaintId: number, goalExplosionPaintId: number): flatbuffers.Offset;
    unpack(): LoadoutPaintT;
    unpackTo(_o: LoadoutPaintT): void;
}
export declare class LoadoutPaintT {
    carPaintId: number;
    decalPaintId: number;
    wheelsPaintId: number;
    boostPaintId: number;
    antennaPaintId: number;
    hatPaintId: number;
    trailsPaintId: number;
    goalExplosionPaintId: number;
    constructor(carPaintId?: number, decalPaintId?: number, wheelsPaintId?: number, boostPaintId?: number, antennaPaintId?: number, hatPaintId?: number, trailsPaintId?: number, goalExplosionPaintId?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
