// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { Color, ColorT } from '../../rlbot/flat/color';
import { RenderType } from '../../rlbot/flat/render-type';
import { Vector3, Vector3T } from '../../rlbot/flat/vector3';


export class RenderMessage {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):RenderMessage {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsRenderMessage(bb:flatbuffers.ByteBuffer, obj?:RenderMessage):RenderMessage {
  return (obj || new RenderMessage()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsRenderMessage(bb:flatbuffers.ByteBuffer, obj?:RenderMessage):RenderMessage {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new RenderMessage()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

renderType():RenderType {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : RenderType.DrawLine2D;
}

color(obj?:Color):Color|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? (obj || new Color()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

/**
 * For 2d renders this only grabs x and y
 */
start(obj?:Vector3):Vector3|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? (obj || new Vector3()).__init(this.bb_pos + offset, this.bb!) : null;
}

/**
 * For 2d renders this only grabs x and y
 */
end(obj?:Vector3):Vector3|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? (obj || new Vector3()).__init(this.bb_pos + offset, this.bb!) : null;
}

/**
 * Scales the x size of the text/rectangle, is used for rectangles assuming an initial value of 1
 */
scaleX():number {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 1;
}

/**
 * Scales the y size of the text/rectangle, is used for rectangles assuming an initial value of 1
 */
scaleY():number {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 1;
}

text():string|null
text(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
text(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * Rectangles can be filled or just outlines.
 */
isFilled():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

static startRenderMessage(builder:flatbuffers.Builder) {
  builder.startObject(8);
}

static addRenderType(builder:flatbuffers.Builder, renderType:RenderType) {
  builder.addFieldInt8(0, renderType, RenderType.DrawLine2D);
}

static addColor(builder:flatbuffers.Builder, colorOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, colorOffset, 0);
}

static addStart(builder:flatbuffers.Builder, startOffset:flatbuffers.Offset) {
  builder.addFieldStruct(2, startOffset, 0);
}

static addEnd(builder:flatbuffers.Builder, endOffset:flatbuffers.Offset) {
  builder.addFieldStruct(3, endOffset, 0);
}

static addScaleX(builder:flatbuffers.Builder, scaleX:number) {
  builder.addFieldInt32(4, scaleX, 1);
}

static addScaleY(builder:flatbuffers.Builder, scaleY:number) {
  builder.addFieldInt32(5, scaleY, 1);
}

static addText(builder:flatbuffers.Builder, textOffset:flatbuffers.Offset) {
  builder.addFieldOffset(6, textOffset, 0);
}

static addIsFilled(builder:flatbuffers.Builder, isFilled:boolean) {
  builder.addFieldInt8(7, +isFilled, +false);
}

static endRenderMessage(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}


unpack(): RenderMessageT {
  return new RenderMessageT(
    this.renderType(),
    (this.color() !== null ? this.color()!.unpack() : null),
    (this.start() !== null ? this.start()!.unpack() : null),
    (this.end() !== null ? this.end()!.unpack() : null),
    this.scaleX(),
    this.scaleY(),
    this.text(),
    this.isFilled()
  );
}


unpackTo(_o: RenderMessageT): void {
  _o.renderType = this.renderType();
  _o.color = (this.color() !== null ? this.color()!.unpack() : null);
  _o.start = (this.start() !== null ? this.start()!.unpack() : null);
  _o.end = (this.end() !== null ? this.end()!.unpack() : null);
  _o.scaleX = this.scaleX();
  _o.scaleY = this.scaleY();
  _o.text = this.text();
  _o.isFilled = this.isFilled();
}
}

export class RenderMessageT {
constructor(
  public renderType: RenderType = RenderType.DrawLine2D,
  public color: ColorT|null = null,
  public start: Vector3T|null = null,
  public end: Vector3T|null = null,
  public scaleX: number = 1,
  public scaleY: number = 1,
  public text: string|Uint8Array|null = null,
  public isFilled: boolean = false
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const color = (this.color !== null ? this.color!.pack(builder) : 0);
  const text = (this.text !== null ? builder.createString(this.text!) : 0);

  RenderMessage.startRenderMessage(builder);
  RenderMessage.addRenderType(builder, this.renderType);
  RenderMessage.addColor(builder, color);
  RenderMessage.addStart(builder, (this.start !== null ? this.start!.pack(builder) : 0));
  RenderMessage.addEnd(builder, (this.end !== null ? this.end!.pack(builder) : 0));
  RenderMessage.addScaleX(builder, this.scaleX);
  RenderMessage.addScaleY(builder, this.scaleY);
  RenderMessage.addText(builder, text);
  RenderMessage.addIsFilled(builder, this.isFilled);

  return RenderMessage.endRenderMessage(builder);
}
}
