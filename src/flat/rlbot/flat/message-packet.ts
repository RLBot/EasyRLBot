// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { GameMessageWrapper, GameMessageWrapperT } from '../../rlbot/flat/game-message-wrapper';


/**
 * We have some very small messages that are only a few bytes but potentially sent at high frequency.
 * Bundle them into a packet to reduce the overhead of sending data over TCP.
 */
export class MessagePacket {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):MessagePacket {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsMessagePacket(bb:flatbuffers.ByteBuffer, obj?:MessagePacket):MessagePacket {
  return (obj || new MessagePacket()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsMessagePacket(bb:flatbuffers.ByteBuffer, obj?:MessagePacket):MessagePacket {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new MessagePacket()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

messages(index: number, obj?:GameMessageWrapper):GameMessageWrapper|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new GameMessageWrapper()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

messagesLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

gameSeconds():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

frameNum():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

static startMessagePacket(builder:flatbuffers.Builder) {
  builder.startObject(3);
}

static addMessages(builder:flatbuffers.Builder, messagesOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, messagesOffset, 0);
}

static createMessagesVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startMessagesVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addGameSeconds(builder:flatbuffers.Builder, gameSeconds:number) {
  builder.addFieldFloat32(1, gameSeconds, 0.0);
}

static addFrameNum(builder:flatbuffers.Builder, frameNum:number) {
  builder.addFieldInt32(2, frameNum, 0);
}

static endMessagePacket(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createMessagePacket(builder:flatbuffers.Builder, messagesOffset:flatbuffers.Offset, gameSeconds:number, frameNum:number):flatbuffers.Offset {
  MessagePacket.startMessagePacket(builder);
  MessagePacket.addMessages(builder, messagesOffset);
  MessagePacket.addGameSeconds(builder, gameSeconds);
  MessagePacket.addFrameNum(builder, frameNum);
  return MessagePacket.endMessagePacket(builder);
}

unpack(): MessagePacketT {
  return new MessagePacketT(
    this.bb!.createObjList(this.messages.bind(this), this.messagesLength()),
    this.gameSeconds(),
    this.frameNum()
  );
}


unpackTo(_o: MessagePacketT): void {
  _o.messages = this.bb!.createObjList(this.messages.bind(this), this.messagesLength());
  _o.gameSeconds = this.gameSeconds();
  _o.frameNum = this.frameNum();
}
}

export class MessagePacketT {
constructor(
  public messages: (GameMessageWrapperT)[] = [],
  public gameSeconds: number = 0.0,
  public frameNum: number = 0
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const messages = MessagePacket.createMessagesVector(builder, builder.createObjectOffsetList(this.messages));

  return MessagePacket.createMessagePacket(builder,
    messages,
    this.gameSeconds,
    this.frameNum
  );
}
}
