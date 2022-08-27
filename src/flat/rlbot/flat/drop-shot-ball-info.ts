// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



export class DropShotBallInfo {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):DropShotBallInfo {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsDropShotBallInfo(bb:flatbuffers.ByteBuffer, obj?:DropShotBallInfo):DropShotBallInfo {
  return (obj || new DropShotBallInfo()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsDropShotBallInfo(bb:flatbuffers.ByteBuffer, obj?:DropShotBallInfo):DropShotBallInfo {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new DropShotBallInfo()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

absorbedForce():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

damageIndex():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

forceAccumRecent():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

static startDropShotBallInfo(builder:flatbuffers.Builder) {
  builder.startObject(3);
}

static addAbsorbedForce(builder:flatbuffers.Builder, absorbedForce:number) {
  builder.addFieldFloat32(0, absorbedForce, 0.0);
}

static addDamageIndex(builder:flatbuffers.Builder, damageIndex:number) {
  builder.addFieldInt32(1, damageIndex, 0);
}

static addForceAccumRecent(builder:flatbuffers.Builder, forceAccumRecent:number) {
  builder.addFieldFloat32(2, forceAccumRecent, 0.0);
}

static endDropShotBallInfo(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createDropShotBallInfo(builder:flatbuffers.Builder, absorbedForce:number, damageIndex:number, forceAccumRecent:number):flatbuffers.Offset {
  DropShotBallInfo.startDropShotBallInfo(builder);
  DropShotBallInfo.addAbsorbedForce(builder, absorbedForce);
  DropShotBallInfo.addDamageIndex(builder, damageIndex);
  DropShotBallInfo.addForceAccumRecent(builder, forceAccumRecent);
  return DropShotBallInfo.endDropShotBallInfo(builder);
}

unpack(): DropShotBallInfoT {
  return new DropShotBallInfoT(
    this.absorbedForce(),
    this.damageIndex(),
    this.forceAccumRecent()
  );
}


unpackTo(_o: DropShotBallInfoT): void {
  _o.absorbedForce = this.absorbedForce();
  _o.damageIndex = this.damageIndex();
  _o.forceAccumRecent = this.forceAccumRecent();
}
}

export class DropShotBallInfoT {
constructor(
  public absorbedForce: number = 0.0,
  public damageIndex: number = 0,
  public forceAccumRecent: number = 0.0
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return DropShotBallInfo.createDropShotBallInfo(builder,
    this.absorbedForce,
    this.damageIndex,
    this.forceAccumRecent
  );
}
}
