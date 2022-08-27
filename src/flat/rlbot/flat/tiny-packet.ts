// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { TinyBall, TinyBallT } from '../../rlbot/flat/tiny-ball';
import { TinyPlayer, TinyPlayerT } from '../../rlbot/flat/tiny-player';


/**
 * A minimal version of the game tick packet, useful when bandwidth needs to be conserved.
 */
export class TinyPacket {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):TinyPacket {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsTinyPacket(bb:flatbuffers.ByteBuffer, obj?:TinyPacket):TinyPacket {
  return (obj || new TinyPacket()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsTinyPacket(bb:flatbuffers.ByteBuffer, obj?:TinyPacket):TinyPacket {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new TinyPacket()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

players(index: number, obj?:TinyPlayer):TinyPlayer|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new TinyPlayer()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

playersLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

ball(obj?:TinyBall):TinyBall|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? (obj || new TinyBall()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

static startTinyPacket(builder:flatbuffers.Builder) {
  builder.startObject(2);
}

static addPlayers(builder:flatbuffers.Builder, playersOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, playersOffset, 0);
}

static createPlayersVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startPlayersVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addBall(builder:flatbuffers.Builder, ballOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, ballOffset, 0);
}

static endTinyPacket(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}


unpack(): TinyPacketT {
  return new TinyPacketT(
    this.bb!.createObjList(this.players.bind(this), this.playersLength()),
    (this.ball() !== null ? this.ball()!.unpack() : null)
  );
}


unpackTo(_o: TinyPacketT): void {
  _o.players = this.bb!.createObjList(this.players.bind(this), this.playersLength());
  _o.ball = (this.ball() !== null ? this.ball()!.unpack() : null);
}
}

export class TinyPacketT {
constructor(
  public players: (TinyPlayerT)[] = [],
  public ball: TinyBallT|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const players = TinyPacket.createPlayersVector(builder, builder.createObjectOffsetList(this.players));
  const ball = (this.ball !== null ? this.ball!.pack(builder) : 0);

  TinyPacket.startTinyPacket(builder);
  TinyPacket.addPlayers(builder, players);
  TinyPacket.addBall(builder, ball);

  return TinyPacket.endTinyPacket(builder);
}
}
