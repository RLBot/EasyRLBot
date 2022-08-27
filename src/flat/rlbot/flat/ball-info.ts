// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { BoxShape, BoxShapeT } from '../../rlbot/flat/box-shape';
import { CollisionShape, unionToCollisionShape, unionListToCollisionShape } from '../../rlbot/flat/collision-shape';
import { CylinderShape, CylinderShapeT } from '../../rlbot/flat/cylinder-shape';
import { DropShotBallInfo, DropShotBallInfoT } from '../../rlbot/flat/drop-shot-ball-info';
import { Physics, PhysicsT } from '../../rlbot/flat/physics';
import { SphereShape, SphereShapeT } from '../../rlbot/flat/sphere-shape';
import { Touch, TouchT } from '../../rlbot/flat/touch';


export class BallInfo {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):BallInfo {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsBallInfo(bb:flatbuffers.ByteBuffer, obj?:BallInfo):BallInfo {
  return (obj || new BallInfo()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsBallInfo(bb:flatbuffers.ByteBuffer, obj?:BallInfo):BallInfo {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new BallInfo()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

physics(obj?:Physics):Physics|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new Physics()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

latestTouch(obj?:Touch):Touch|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? (obj || new Touch()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

dropShotInfo(obj?:DropShotBallInfo):DropShotBallInfo|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? (obj || new DropShotBallInfo()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

shapeType():CollisionShape {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : CollisionShape.NONE;
}

shape<T extends flatbuffers.Table>(obj:any):any|null {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.__union(obj, this.bb_pos + offset) : null;
}

static startBallInfo(builder:flatbuffers.Builder) {
  builder.startObject(5);
}

static addPhysics(builder:flatbuffers.Builder, physicsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, physicsOffset, 0);
}

static addLatestTouch(builder:flatbuffers.Builder, latestTouchOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, latestTouchOffset, 0);
}

static addDropShotInfo(builder:flatbuffers.Builder, dropShotInfoOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, dropShotInfoOffset, 0);
}

static addShapeType(builder:flatbuffers.Builder, shapeType:CollisionShape) {
  builder.addFieldInt8(3, shapeType, CollisionShape.NONE);
}

static addShape(builder:flatbuffers.Builder, shapeOffset:flatbuffers.Offset) {
  builder.addFieldOffset(4, shapeOffset, 0);
}

static endBallInfo(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}


unpack(): BallInfoT {
  return new BallInfoT(
    (this.physics() !== null ? this.physics()!.unpack() : null),
    (this.latestTouch() !== null ? this.latestTouch()!.unpack() : null),
    (this.dropShotInfo() !== null ? this.dropShotInfo()!.unpack() : null),
    this.shapeType(),
    (() => {
      let temp = unionToCollisionShape(this.shapeType(), this.shape.bind(this));
      if(temp === null) { return null; }
      return temp.unpack()
  })()
  );
}


unpackTo(_o: BallInfoT): void {
  _o.physics = (this.physics() !== null ? this.physics()!.unpack() : null);
  _o.latestTouch = (this.latestTouch() !== null ? this.latestTouch()!.unpack() : null);
  _o.dropShotInfo = (this.dropShotInfo() !== null ? this.dropShotInfo()!.unpack() : null);
  _o.shapeType = this.shapeType();
  _o.shape = (() => {
      let temp = unionToCollisionShape(this.shapeType(), this.shape.bind(this));
      if(temp === null) { return null; }
      return temp.unpack()
  })();
}
}

export class BallInfoT {
constructor(
  public physics: PhysicsT|null = null,
  public latestTouch: TouchT|null = null,
  public dropShotInfo: DropShotBallInfoT|null = null,
  public shapeType: CollisionShape = CollisionShape.NONE,
  public shape: BoxShapeT|CylinderShapeT|SphereShapeT|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const physics = (this.physics !== null ? this.physics!.pack(builder) : 0);
  const latestTouch = (this.latestTouch !== null ? this.latestTouch!.pack(builder) : 0);
  const dropShotInfo = (this.dropShotInfo !== null ? this.dropShotInfo!.pack(builder) : 0);
  const shape = builder.createObjectOffset(this.shape);

  BallInfo.startBallInfo(builder);
  BallInfo.addPhysics(builder, physics);
  BallInfo.addLatestTouch(builder, latestTouch);
  BallInfo.addDropShotInfo(builder, dropShotInfo);
  BallInfo.addShapeType(builder, this.shapeType);
  BallInfo.addShape(builder, shape);

  return BallInfo.endBallInfo(builder);
}
}
