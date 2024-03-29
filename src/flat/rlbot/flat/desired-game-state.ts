// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { ConsoleCommand, ConsoleCommandT } from '../../rlbot/flat/console-command';
import { DesiredBallState, DesiredBallStateT } from '../../rlbot/flat/desired-ball-state';
import { DesiredBoostState, DesiredBoostStateT } from '../../rlbot/flat/desired-boost-state';
import { DesiredCarState, DesiredCarStateT } from '../../rlbot/flat/desired-car-state';
import { DesiredGameInfoState, DesiredGameInfoStateT } from '../../rlbot/flat/desired-game-info-state';


export class DesiredGameState {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):DesiredGameState {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsDesiredGameState(bb:flatbuffers.ByteBuffer, obj?:DesiredGameState):DesiredGameState {
  return (obj || new DesiredGameState()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsDesiredGameState(bb:flatbuffers.ByteBuffer, obj?:DesiredGameState):DesiredGameState {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new DesiredGameState()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

ballState(obj?:DesiredBallState):DesiredBallState|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new DesiredBallState()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

carStates(index: number, obj?:DesiredCarState):DesiredCarState|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? (obj || new DesiredCarState()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

carStatesLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

boostStates(index: number, obj?:DesiredBoostState):DesiredBoostState|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? (obj || new DesiredBoostState()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

boostStatesLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

gameInfoState(obj?:DesiredGameInfoState):DesiredGameInfoState|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? (obj || new DesiredGameInfoState()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

consoleCommands(index: number, obj?:ConsoleCommand):ConsoleCommand|null {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? (obj || new ConsoleCommand()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

consoleCommandsLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

static startDesiredGameState(builder:flatbuffers.Builder) {
  builder.startObject(5);
}

static addBallState(builder:flatbuffers.Builder, ballStateOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, ballStateOffset, 0);
}

static addCarStates(builder:flatbuffers.Builder, carStatesOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, carStatesOffset, 0);
}

static createCarStatesVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startCarStatesVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addBoostStates(builder:flatbuffers.Builder, boostStatesOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, boostStatesOffset, 0);
}

static createBoostStatesVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startBoostStatesVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addGameInfoState(builder:flatbuffers.Builder, gameInfoStateOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, gameInfoStateOffset, 0);
}

static addConsoleCommands(builder:flatbuffers.Builder, consoleCommandsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(4, consoleCommandsOffset, 0);
}

static createConsoleCommandsVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startConsoleCommandsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static endDesiredGameState(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}


unpack(): DesiredGameStateT {
  return new DesiredGameStateT(
    (this.ballState() !== null ? this.ballState()!.unpack() : null),
    this.bb!.createObjList(this.carStates.bind(this), this.carStatesLength()),
    this.bb!.createObjList(this.boostStates.bind(this), this.boostStatesLength()),
    (this.gameInfoState() !== null ? this.gameInfoState()!.unpack() : null),
    this.bb!.createObjList(this.consoleCommands.bind(this), this.consoleCommandsLength())
  );
}


unpackTo(_o: DesiredGameStateT): void {
  _o.ballState = (this.ballState() !== null ? this.ballState()!.unpack() : null);
  _o.carStates = this.bb!.createObjList(this.carStates.bind(this), this.carStatesLength());
  _o.boostStates = this.bb!.createObjList(this.boostStates.bind(this), this.boostStatesLength());
  _o.gameInfoState = (this.gameInfoState() !== null ? this.gameInfoState()!.unpack() : null);
  _o.consoleCommands = this.bb!.createObjList(this.consoleCommands.bind(this), this.consoleCommandsLength());
}
}

export class DesiredGameStateT {
constructor(
  public ballState: DesiredBallStateT|null = null,
  public carStates: (DesiredCarStateT)[] = [],
  public boostStates: (DesiredBoostStateT)[] = [],
  public gameInfoState: DesiredGameInfoStateT|null = null,
  public consoleCommands: (ConsoleCommandT)[] = []
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const ballState = (this.ballState !== null ? this.ballState!.pack(builder) : 0);
  const carStates = DesiredGameState.createCarStatesVector(builder, builder.createObjectOffsetList(this.carStates));
  const boostStates = DesiredGameState.createBoostStatesVector(builder, builder.createObjectOffsetList(this.boostStates));
  const gameInfoState = (this.gameInfoState !== null ? this.gameInfoState!.pack(builder) : 0);
  const consoleCommands = DesiredGameState.createConsoleCommandsVector(builder, builder.createObjectOffsetList(this.consoleCommands));

  DesiredGameState.startDesiredGameState(builder);
  DesiredGameState.addBallState(builder, ballState);
  DesiredGameState.addCarStates(builder, carStates);
  DesiredGameState.addBoostStates(builder, boostStates);
  DesiredGameState.addGameInfoState(builder, gameInfoState);
  DesiredGameState.addConsoleCommands(builder, consoleCommands);

  return DesiredGameState.endDesiredGameState(builder);
}
}
