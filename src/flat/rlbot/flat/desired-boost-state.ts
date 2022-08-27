// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { Float, FloatT } from '../../rlbot/flat/float';


export class DesiredBoostState {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):DesiredBoostState {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsDesiredBoostState(bb:flatbuffers.ByteBuffer, obj?:DesiredBoostState):DesiredBoostState {
  return (obj || new DesiredBoostState()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsDesiredBoostState(bb:flatbuffers.ByteBuffer, obj?:DesiredBoostState):DesiredBoostState {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new DesiredBoostState()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

respawnTime(obj?:Float):Float|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new Float()).__init(this.bb_pos + offset, this.bb!) : null;
}

static startDesiredBoostState(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addRespawnTime(builder:flatbuffers.Builder, respawnTimeOffset:flatbuffers.Offset) {
  builder.addFieldStruct(0, respawnTimeOffset, 0);
}

static endDesiredBoostState(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createDesiredBoostState(builder:flatbuffers.Builder, respawnTimeOffset:flatbuffers.Offset):flatbuffers.Offset {
  DesiredBoostState.startDesiredBoostState(builder);
  DesiredBoostState.addRespawnTime(builder, respawnTimeOffset);
  return DesiredBoostState.endDesiredBoostState(builder);
}

unpack(): DesiredBoostStateT {
  return new DesiredBoostStateT(
    (this.respawnTime() !== null ? this.respawnTime()!.unpack() : null)
  );
}


unpackTo(_o: DesiredBoostStateT): void {
  _o.respawnTime = (this.respawnTime() !== null ? this.respawnTime()!.unpack() : null);
}
}

export class DesiredBoostStateT {
constructor(
  public respawnTime: FloatT|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return DesiredBoostState.createDesiredBoostState(builder,
    (this.respawnTime !== null ? this.respawnTime!.pack(builder) : 0)
  );
}
}
