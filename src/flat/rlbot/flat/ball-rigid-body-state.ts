// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { RigidBodyState, RigidBodyStateT } from '../../rlbot/flat/rigid-body-state';


/**
 * Rigid body state for the ball.
 */
export class BallRigidBodyState {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):BallRigidBodyState {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsBallRigidBodyState(bb:flatbuffers.ByteBuffer, obj?:BallRigidBodyState):BallRigidBodyState {
  return (obj || new BallRigidBodyState()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsBallRigidBodyState(bb:flatbuffers.ByteBuffer, obj?:BallRigidBodyState):BallRigidBodyState {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new BallRigidBodyState()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

state(obj?:RigidBodyState):RigidBodyState|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new RigidBodyState()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

static startBallRigidBodyState(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addState(builder:flatbuffers.Builder, stateOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, stateOffset, 0);
}

static endBallRigidBodyState(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createBallRigidBodyState(builder:flatbuffers.Builder, stateOffset:flatbuffers.Offset):flatbuffers.Offset {
  BallRigidBodyState.startBallRigidBodyState(builder);
  BallRigidBodyState.addState(builder, stateOffset);
  return BallRigidBodyState.endBallRigidBodyState(builder);
}

unpack(): BallRigidBodyStateT {
  return new BallRigidBodyStateT(
    (this.state() !== null ? this.state()!.unpack() : null)
  );
}


unpackTo(_o: BallRigidBodyStateT): void {
  _o.state = (this.state() !== null ? this.state()!.unpack() : null);
}
}

export class BallRigidBodyStateT {
constructor(
  public state: RigidBodyStateT|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const state = (this.state !== null ? this.state!.pack(builder) : 0);

  return BallRigidBodyState.createBallRigidBodyState(builder,
    state
  );
}
}
