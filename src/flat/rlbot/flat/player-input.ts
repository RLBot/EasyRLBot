// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { ControllerState, ControllerStateT } from '../../rlbot/flat/controller-state';


export class PlayerInput {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):PlayerInput {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsPlayerInput(bb:flatbuffers.ByteBuffer, obj?:PlayerInput):PlayerInput {
  return (obj || new PlayerInput()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsPlayerInput(bb:flatbuffers.ByteBuffer, obj?:PlayerInput):PlayerInput {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new PlayerInput()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

playerIndex():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

controllerState(obj?:ControllerState):ControllerState|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? (obj || new ControllerState()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

static startPlayerInput(builder:flatbuffers.Builder) {
  builder.startObject(2);
}

static addPlayerIndex(builder:flatbuffers.Builder, playerIndex:number) {
  builder.addFieldInt32(0, playerIndex, 0);
}

static addControllerState(builder:flatbuffers.Builder, controllerStateOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, controllerStateOffset, 0);
}

static endPlayerInput(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}


unpack(): PlayerInputT {
  return new PlayerInputT(
    this.playerIndex(),
    (this.controllerState() !== null ? this.controllerState()!.unpack() : null)
  );
}


unpackTo(_o: PlayerInputT): void {
  _o.playerIndex = this.playerIndex();
  _o.controllerState = (this.controllerState() !== null ? this.controllerState()!.unpack() : null);
}
}

export class PlayerInputT {
constructor(
  public playerIndex: number = 0,
  public controllerState: ControllerStateT|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const controllerState = (this.controllerState !== null ? this.controllerState!.pack(builder) : 0);

  PlayerInput.startPlayerInput(builder);
  PlayerInput.addPlayerIndex(builder, this.playerIndex);
  PlayerInput.addControllerState(builder, controllerState);

  return PlayerInput.endPlayerInput(builder);
}
}
