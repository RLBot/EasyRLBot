// Credit to SuperVK for big parts of this file

import * as crypto from "crypto";
import * as flatbuffers from "flatbuffers";
import { BotClient } from "./BotClient";
import * as utils from "./utils";
import * as flat from "./flat/rlbot_generated";
import { Vector3 } from "./GameState";
const { RenderMessage, RenderType, RenderGroup } = flat;
const defaultGroupId = "default";
const maxInt = 1337;

class Color {
  alpha: number;
  red: number;
  green: number;
  blue: number;
  constructor(alpha: number, red: number, green: number, blue: number) {
    this.alpha = alpha;
    this.red = red;
    this.green = green;
    this.blue = blue;
  }
  convertToFlat(builder: flatbuffers.Builder) {
    flat.Color.startColor(builder);
    flat.Color.addA(builder, this.alpha);
    flat.Color.addR(builder, this.red);
    flat.Color.addG(builder, this.green);
    flat.Color.addB(builder, this.blue);
    return flat.Color.endColor(builder);
  }
}

class RenderManager {
  client: BotClient;
  builder: flatbuffers.Builder | null;
  index: number;
  Color: typeof Color;
  renderList: flatbuffers.Offset[];
  groupID: string;
  constructor(botClient: BotClient) {
    this.client = botClient;
    this.builder = null;
    this.index = this.client.botIndex;
    this.Color = Color;
    this.renderList = [];
    this.groupID = "";
  }
  beginRendering(groupID: string) {
    this.builder = new flatbuffers.Builder(0);
    this.renderList = [];
    if (groupID) this.groupID = groupID;
  }

  endRendering() {
    if (this.groupID == undefined) this.groupID = "default";
    const hash = crypto.createHash("sha256");
    hash.update(this.groupID + this.client.botIndex);
    let groupIDHashed = parseInt(hash.digest("hex"), 16) % maxInt;

    if (this.builder == null) return;

    let messages = RenderGroup.createRenderMessagesVector(
      this.builder,
      this.renderList
    );

    RenderGroup.startRenderGroup(this.builder);
    RenderGroup.addId(this.builder, groupIDHashed);
    RenderGroup.addRenderMessages(this.builder, messages);

    let result = RenderGroup.endRenderGroup(this.builder);

    this.builder.finish(result);

    let buf = this.builder.asUint8Array();

    if (this.client.ws == null) return;
    this.client.ws.write(utils.encodeFlat(8, buf));
  }
  drawString2D(
    x: number,
    y: number,
    scaleX: number,
    scaleY: number,
    text: string,
    color: Color
  ) {
    if (this.builder == null) return;
    let textFlat = this.builder.createString(text);
    let colorFlat = color.convertToFlat(this.builder);

    RenderMessage.startRenderMessage(this.builder);
    RenderMessage.addRenderType(this.builder, RenderType.DrawString2D);
    RenderMessage.addColor(this.builder, colorFlat);
    RenderMessage.addStart(
      this.builder,
      flat.Vector3.createVector3(this.builder, x, y, 0)
    );
    RenderMessage.addScaleX(this.builder, scaleX);
    RenderMessage.addScaleY(this.builder, scaleY);
    RenderMessage.addText(this.builder, textFlat);

    this.renderList.push(RenderMessage.endRenderMessage(this.builder));
  }
  drawString3D(
    vector: Vector3,
    scaleX: number,
    scaleY: number,
    text: string,
    color: Color
  ) {
    if (this.builder == null) return;
    let textFlat = this.builder.createString(text);
    let colorFlat = color.convertToFlat(this.builder);

    RenderMessage.startRenderMessage(this.builder);
    RenderMessage.addRenderType(this.builder, RenderType.DrawString3D);
    RenderMessage.addColor(this.builder, colorFlat);
    RenderMessage.addStart(
      this.builder,
      vector.convertToFlat(this.builder) ?? 0
    );
    RenderMessage.addScaleX(this.builder, scaleX);
    RenderMessage.addScaleY(this.builder, scaleY);
    RenderMessage.addText(this.builder, textFlat);

    this.renderList.push(RenderMessage.endRenderMessage(this.builder));
  }
  drawLine2D_3D(x: number, y: number, end: Vector3, color: Color) {
    if (this.builder == null) return;
    let colorFlat = color.convertToFlat(this.builder);
    RenderMessage.startRenderMessage(this.builder);
    RenderMessage.addRenderType(this.builder, RenderType.DrawLine2D_3D);
    RenderMessage.addStart(
      this.builder,
      flat.Vector3.createVector3(this.builder, x, y, 0)
    );
    RenderMessage.addEnd(this.builder, end.convertToFlat(this.builder) ?? 0);
    RenderMessage.addColor(this.builder, colorFlat ?? 0);
    this.renderList.push(RenderMessage.endRenderMessage(this.builder));
  }
  drawLine2D(
    startX: number,
    startY: number,
    endX: number,
    endY: number,
    color: Color
  ) {
    if (this.builder == null) return;
    let colorFlat = color.convertToFlat(this.builder);
    RenderMessage.startRenderMessage(this.builder);
    RenderMessage.addRenderType(this.builder, RenderType.DrawLine2D);
    RenderMessage.addStart(
      this.builder,
      new Vector3(startX, startY, 0).convertToFlat(this.builder) ?? 0
    );
    RenderMessage.addEnd(
      this.builder,
      new Vector3(endX, endY, 0).convertToFlat(this.builder) ?? 0
    );
    RenderMessage.addColor(this.builder, colorFlat);
    this.renderList.push(RenderMessage.endRenderMessage(this.builder));
  }
  drawLine3D(start: Vector3, end: Vector3, color: Color) {
    if (this.builder == null) return;
    let colorFlat = color.convertToFlat(this.builder);
    RenderMessage.startRenderMessage(this.builder);
    RenderMessage.addRenderType(this.builder, RenderType.DrawLine3D);
    RenderMessage.addStart(
      this.builder,
      start.convertToFlat(this.builder) ?? 0
    );
    RenderMessage.addEnd(this.builder, end.convertToFlat(this.builder) ?? 0);
    RenderMessage.addColor(this.builder, colorFlat);
    this.renderList.push(RenderMessage.endRenderMessage(this.builder));
  }
  drawRect2D(
    x: number,
    y: number,
    width: number,
    height: number,
    // filled: boolean, Remove due to it being a legacy feature
    color: Color
  ) {
    if (this.builder == null) return;
    let colorFlat = color.convertToFlat(this.builder);
    RenderMessage.startRenderMessage(this.builder);
    RenderMessage.addRenderType(this.builder, RenderType.DrawRect2D);
    RenderMessage.addStart(
      this.builder,
      flat.Vector3.createVector3(this.builder, x, y, 0)
    );
    RenderMessage.addScaleX(this.builder, width);
    RenderMessage.addScaleY(this.builder, height);
    // RenderMessage.addIsFilled(this.builder, filled);
    RenderMessage.addColor(this.builder, colorFlat);
    this.renderList.push(RenderMessage.endRenderMessage(this.builder));
  }
  drawRect3D(
    vector: Vector3,
    width: number,
    height: number,
    // filled: boolean, Remove due to it being a legacy feature
    color: Color,
    centered: Boolean
  ) {
    if (this.builder == null) return;
    let colorFlat = color.convertToFlat(this.builder);
    RenderMessage.startRenderMessage(this.builder);
    RenderMessage.addRenderType(
      this.builder,
      centered ? RenderType.DrawCenteredRect3D : RenderType.DrawRect3D
    );
    RenderMessage.addStart(
      this.builder,
      vector.convertToFlat(this.builder) ?? 0
    );
    RenderMessage.addScaleX(this.builder, width);
    RenderMessage.addScaleY(this.builder, height);
    // RenderMessage.addIsFilled(this.builder, filled);
    RenderMessage.addColor(this.builder, colorFlat);
    this.renderList.push(RenderMessage.endRenderMessage(this.builder));
  }

  black() {
    return new this.Color(255, 0, 0, 0);
  }

  white() {
    return new this.Color(255, 255, 255, 255);
  }

  gray() {
    return new this.Color(255, 128, 128, 128);
  }

  blue() {
    return new this.Color(255, 0, 0, 255);
  }

  red() {
    return new this.Color(255, 255, 0, 0);
  }

  green() {
    return new this.Color(255, 0, 128, 0);
  }

  lime() {
    return new this.Color(255, 0, 255, 0);
  }

  yellow() {
    return new this.Color(255, 255, 255, 0);
  }

  orange() {
    return new this.Color(255, 225, 128, 0);
  }

  cyan() {
    return new this.Color(255, 0, 255, 255);
  }

  pink() {
    return new this.Color(255, 255, 0, 255);
  }

  purple() {
    return new this.Color(255, 128, 0, 128);
  }

  teal() {
    return new this.Color(255, 0, 128, 128);
  }
}

export { RenderManager, Color };
