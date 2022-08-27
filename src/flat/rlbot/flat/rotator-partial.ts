// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { Float, FloatT } from '../../rlbot/flat/float';


export class RotatorPartial {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):RotatorPartial {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsRotatorPartial(bb:flatbuffers.ByteBuffer, obj?:RotatorPartial):RotatorPartial {
  return (obj || new RotatorPartial()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsRotatorPartial(bb:flatbuffers.ByteBuffer, obj?:RotatorPartial):RotatorPartial {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new RotatorPartial()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

pitch(obj?:Float):Float|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new Float()).__init(this.bb_pos + offset, this.bb!) : null;
}

yaw(obj?:Float):Float|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? (obj || new Float()).__init(this.bb_pos + offset, this.bb!) : null;
}

roll(obj?:Float):Float|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? (obj || new Float()).__init(this.bb_pos + offset, this.bb!) : null;
}

static startRotatorPartial(builder:flatbuffers.Builder) {
  builder.startObject(3);
}

static addPitch(builder:flatbuffers.Builder, pitchOffset:flatbuffers.Offset) {
  builder.addFieldStruct(0, pitchOffset, 0);
}

static addYaw(builder:flatbuffers.Builder, yawOffset:flatbuffers.Offset) {
  builder.addFieldStruct(1, yawOffset, 0);
}

static addRoll(builder:flatbuffers.Builder, rollOffset:flatbuffers.Offset) {
  builder.addFieldStruct(2, rollOffset, 0);
}

static endRotatorPartial(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}


unpack(): RotatorPartialT {
  return new RotatorPartialT(
    (this.pitch() !== null ? this.pitch()!.unpack() : null),
    (this.yaw() !== null ? this.yaw()!.unpack() : null),
    (this.roll() !== null ? this.roll()!.unpack() : null)
  );
}


unpackTo(_o: RotatorPartialT): void {
  _o.pitch = (this.pitch() !== null ? this.pitch()!.unpack() : null);
  _o.yaw = (this.yaw() !== null ? this.yaw()!.unpack() : null);
  _o.roll = (this.roll() !== null ? this.roll()!.unpack() : null);
}
}

export class RotatorPartialT {
constructor(
  public pitch: FloatT|null = null,
  public yaw: FloatT|null = null,
  public roll: FloatT|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  RotatorPartial.startRotatorPartial(builder);
  RotatorPartial.addPitch(builder, (this.pitch !== null ? this.pitch!.pack(builder) : 0));
  RotatorPartial.addYaw(builder, (this.yaw !== null ? this.yaw!.pack(builder) : 0));
  RotatorPartial.addRoll(builder, (this.roll !== null ? this.roll!.pack(builder) : 0));

  return RotatorPartial.endRotatorPartial(builder);
}
}
