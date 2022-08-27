// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



/**
 * A bot controlled by the RLBot framework
 */
export class RLBotPlayer {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):RLBotPlayer {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsRLBotPlayer(bb:flatbuffers.ByteBuffer, obj?:RLBotPlayer):RLBotPlayer {
  return (obj || new RLBotPlayer()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsRLBotPlayer(bb:flatbuffers.ByteBuffer, obj?:RLBotPlayer):RLBotPlayer {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new RLBotPlayer()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static startRLBotPlayer(builder:flatbuffers.Builder) {
  builder.startObject(0);
}

static endRLBotPlayer(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createRLBotPlayer(builder:flatbuffers.Builder):flatbuffers.Offset {
  RLBotPlayer.startRLBotPlayer(builder);
  return RLBotPlayer.endRLBotPlayer(builder);
}

unpack(): RLBotPlayerT {
  return new RLBotPlayerT();
}


unpackTo(_o: RLBotPlayerT): void {}
}

export class RLBotPlayerT {
constructor(){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return RLBotPlayer.createRLBotPlayer(builder);
}
}
