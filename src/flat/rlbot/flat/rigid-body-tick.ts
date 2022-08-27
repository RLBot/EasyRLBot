// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { BallRigidBodyState, BallRigidBodyStateT } from '../../rlbot/flat/ball-rigid-body-state';
import { PlayerRigidBodyState, PlayerRigidBodyStateT } from '../../rlbot/flat/player-rigid-body-state';


/**
 * Contains all rigid body state information.
 */
export class RigidBodyTick {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):RigidBodyTick {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsRigidBodyTick(bb:flatbuffers.ByteBuffer, obj?:RigidBodyTick):RigidBodyTick {
  return (obj || new RigidBodyTick()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsRigidBodyTick(bb:flatbuffers.ByteBuffer, obj?:RigidBodyTick):RigidBodyTick {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new RigidBodyTick()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

ball(obj?:BallRigidBodyState):BallRigidBodyState|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new BallRigidBodyState()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

players(index: number, obj?:PlayerRigidBodyState):PlayerRigidBodyState|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? (obj || new PlayerRigidBodyState()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

playersLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

static startRigidBodyTick(builder:flatbuffers.Builder) {
  builder.startObject(2);
}

static addBall(builder:flatbuffers.Builder, ballOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, ballOffset, 0);
}

static addPlayers(builder:flatbuffers.Builder, playersOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, playersOffset, 0);
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

static endRigidBodyTick(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createRigidBodyTick(builder:flatbuffers.Builder, ballOffset:flatbuffers.Offset, playersOffset:flatbuffers.Offset):flatbuffers.Offset {
  RigidBodyTick.startRigidBodyTick(builder);
  RigidBodyTick.addBall(builder, ballOffset);
  RigidBodyTick.addPlayers(builder, playersOffset);
  return RigidBodyTick.endRigidBodyTick(builder);
}

unpack(): RigidBodyTickT {
  return new RigidBodyTickT(
    (this.ball() !== null ? this.ball()!.unpack() : null),
    this.bb!.createObjList(this.players.bind(this), this.playersLength())
  );
}


unpackTo(_o: RigidBodyTickT): void {
  _o.ball = (this.ball() !== null ? this.ball()!.unpack() : null);
  _o.players = this.bb!.createObjList(this.players.bind(this), this.playersLength());
}
}

export class RigidBodyTickT {
constructor(
  public ball: BallRigidBodyStateT|null = null,
  public players: (PlayerRigidBodyStateT)[] = []
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const ball = (this.ball !== null ? this.ball!.pack(builder) : 0);
  const players = RigidBodyTick.createPlayersVector(builder, builder.createObjectOffsetList(this.players));

  return RigidBodyTick.createRigidBodyTick(builder,
    ball,
    players
  );
}
}
