import * as flatbuffers from 'flatbuffers';
import { BoxShapeT } from '../../rlbot/flat/box-shape';
import { CollisionShape } from '../../rlbot/flat/collision-shape';
import { CylinderShapeT } from '../../rlbot/flat/cylinder-shape';
import { DropShotBallInfo, DropShotBallInfoT } from '../../rlbot/flat/drop-shot-ball-info';
import { Physics, PhysicsT } from '../../rlbot/flat/physics';
import { SphereShapeT } from '../../rlbot/flat/sphere-shape';
import { Touch, TouchT } from '../../rlbot/flat/touch';
export declare class BallInfo {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): BallInfo;
    static getRootAsBallInfo(bb: flatbuffers.ByteBuffer, obj?: BallInfo): BallInfo;
    static getSizePrefixedRootAsBallInfo(bb: flatbuffers.ByteBuffer, obj?: BallInfo): BallInfo;
    physics(obj?: Physics): Physics | null;
    latestTouch(obj?: Touch): Touch | null;
    dropShotInfo(obj?: DropShotBallInfo): DropShotBallInfo | null;
    shapeType(): CollisionShape;
    shape<T extends flatbuffers.Table>(obj: any): any | null;
    static startBallInfo(builder: flatbuffers.Builder): void;
    static addPhysics(builder: flatbuffers.Builder, physicsOffset: flatbuffers.Offset): void;
    static addLatestTouch(builder: flatbuffers.Builder, latestTouchOffset: flatbuffers.Offset): void;
    static addDropShotInfo(builder: flatbuffers.Builder, dropShotInfoOffset: flatbuffers.Offset): void;
    static addShapeType(builder: flatbuffers.Builder, shapeType: CollisionShape): void;
    static addShape(builder: flatbuffers.Builder, shapeOffset: flatbuffers.Offset): void;
    static endBallInfo(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): BallInfoT;
    unpackTo(_o: BallInfoT): void;
}
export declare class BallInfoT {
    physics: PhysicsT | null;
    latestTouch: TouchT | null;
    dropShotInfo: DropShotBallInfoT | null;
    shapeType: CollisionShape;
    shape: BoxShapeT | CylinderShapeT | SphereShapeT | null;
    constructor(physics?: PhysicsT | null, latestTouch?: TouchT | null, dropShotInfo?: DropShotBallInfoT | null, shapeType?: CollisionShape, shape?: BoxShapeT | CylinderShapeT | SphereShapeT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
