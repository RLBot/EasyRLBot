// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { Color, ColorT } from '../../rlbot/flat/color';
import { LoadoutPaint, LoadoutPaintT } from '../../rlbot/flat/loadout-paint';


/**
 * The car type, color, and other aspects of the player's appearance.
 * See https://github.com/RLBot/RLBot/wiki/Bot-Customization
 */
export class PlayerLoadout {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):PlayerLoadout {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsPlayerLoadout(bb:flatbuffers.ByteBuffer, obj?:PlayerLoadout):PlayerLoadout {
  return (obj || new PlayerLoadout()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsPlayerLoadout(bb:flatbuffers.ByteBuffer, obj?:PlayerLoadout):PlayerLoadout {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new PlayerLoadout()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

teamColorId():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

customColorId():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

carId():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

decalId():number {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

wheelsId():number {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

boostId():number {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

antennaId():number {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

hatId():number {
  const offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

paintFinishId():number {
  const offset = this.bb!.__offset(this.bb_pos, 20);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

customFinishId():number {
  const offset = this.bb!.__offset(this.bb_pos, 22);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

engineAudioId():number {
  const offset = this.bb!.__offset(this.bb_pos, 24);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

trailsId():number {
  const offset = this.bb!.__offset(this.bb_pos, 26);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

goalExplosionId():number {
  const offset = this.bb!.__offset(this.bb_pos, 28);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

loadoutPaint(obj?:LoadoutPaint):LoadoutPaint|null {
  const offset = this.bb!.__offset(this.bb_pos, 30);
  return offset ? (obj || new LoadoutPaint()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

/**
 * Sets the primary color of the car to the swatch that most closely matches the provided
 * RGB color value. If set, this overrides teamColorId.
 */
primaryColorLookup(obj?:Color):Color|null {
  const offset = this.bb!.__offset(this.bb_pos, 32);
  return offset ? (obj || new Color()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

/**
 * Sets the secondary color of the car to the swatch that most closely matches the provided
 * RGB color value. If set, this overrides customColorId.
 */
secondaryColorLookup(obj?:Color):Color|null {
  const offset = this.bb!.__offset(this.bb_pos, 34);
  return offset ? (obj || new Color()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

static startPlayerLoadout(builder:flatbuffers.Builder) {
  builder.startObject(16);
}

static addTeamColorId(builder:flatbuffers.Builder, teamColorId:number) {
  builder.addFieldInt32(0, teamColorId, 0);
}

static addCustomColorId(builder:flatbuffers.Builder, customColorId:number) {
  builder.addFieldInt32(1, customColorId, 0);
}

static addCarId(builder:flatbuffers.Builder, carId:number) {
  builder.addFieldInt32(2, carId, 0);
}

static addDecalId(builder:flatbuffers.Builder, decalId:number) {
  builder.addFieldInt32(3, decalId, 0);
}

static addWheelsId(builder:flatbuffers.Builder, wheelsId:number) {
  builder.addFieldInt32(4, wheelsId, 0);
}

static addBoostId(builder:flatbuffers.Builder, boostId:number) {
  builder.addFieldInt32(5, boostId, 0);
}

static addAntennaId(builder:flatbuffers.Builder, antennaId:number) {
  builder.addFieldInt32(6, antennaId, 0);
}

static addHatId(builder:flatbuffers.Builder, hatId:number) {
  builder.addFieldInt32(7, hatId, 0);
}

static addPaintFinishId(builder:flatbuffers.Builder, paintFinishId:number) {
  builder.addFieldInt32(8, paintFinishId, 0);
}

static addCustomFinishId(builder:flatbuffers.Builder, customFinishId:number) {
  builder.addFieldInt32(9, customFinishId, 0);
}

static addEngineAudioId(builder:flatbuffers.Builder, engineAudioId:number) {
  builder.addFieldInt32(10, engineAudioId, 0);
}

static addTrailsId(builder:flatbuffers.Builder, trailsId:number) {
  builder.addFieldInt32(11, trailsId, 0);
}

static addGoalExplosionId(builder:flatbuffers.Builder, goalExplosionId:number) {
  builder.addFieldInt32(12, goalExplosionId, 0);
}

static addLoadoutPaint(builder:flatbuffers.Builder, loadoutPaintOffset:flatbuffers.Offset) {
  builder.addFieldOffset(13, loadoutPaintOffset, 0);
}

static addPrimaryColorLookup(builder:flatbuffers.Builder, primaryColorLookupOffset:flatbuffers.Offset) {
  builder.addFieldOffset(14, primaryColorLookupOffset, 0);
}

static addSecondaryColorLookup(builder:flatbuffers.Builder, secondaryColorLookupOffset:flatbuffers.Offset) {
  builder.addFieldOffset(15, secondaryColorLookupOffset, 0);
}

static endPlayerLoadout(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}


unpack(): PlayerLoadoutT {
  return new PlayerLoadoutT(
    this.teamColorId(),
    this.customColorId(),
    this.carId(),
    this.decalId(),
    this.wheelsId(),
    this.boostId(),
    this.antennaId(),
    this.hatId(),
    this.paintFinishId(),
    this.customFinishId(),
    this.engineAudioId(),
    this.trailsId(),
    this.goalExplosionId(),
    (this.loadoutPaint() !== null ? this.loadoutPaint()!.unpack() : null),
    (this.primaryColorLookup() !== null ? this.primaryColorLookup()!.unpack() : null),
    (this.secondaryColorLookup() !== null ? this.secondaryColorLookup()!.unpack() : null)
  );
}


unpackTo(_o: PlayerLoadoutT): void {
  _o.teamColorId = this.teamColorId();
  _o.customColorId = this.customColorId();
  _o.carId = this.carId();
  _o.decalId = this.decalId();
  _o.wheelsId = this.wheelsId();
  _o.boostId = this.boostId();
  _o.antennaId = this.antennaId();
  _o.hatId = this.hatId();
  _o.paintFinishId = this.paintFinishId();
  _o.customFinishId = this.customFinishId();
  _o.engineAudioId = this.engineAudioId();
  _o.trailsId = this.trailsId();
  _o.goalExplosionId = this.goalExplosionId();
  _o.loadoutPaint = (this.loadoutPaint() !== null ? this.loadoutPaint()!.unpack() : null);
  _o.primaryColorLookup = (this.primaryColorLookup() !== null ? this.primaryColorLookup()!.unpack() : null);
  _o.secondaryColorLookup = (this.secondaryColorLookup() !== null ? this.secondaryColorLookup()!.unpack() : null);
}
}

export class PlayerLoadoutT {
constructor(
  public teamColorId: number = 0,
  public customColorId: number = 0,
  public carId: number = 0,
  public decalId: number = 0,
  public wheelsId: number = 0,
  public boostId: number = 0,
  public antennaId: number = 0,
  public hatId: number = 0,
  public paintFinishId: number = 0,
  public customFinishId: number = 0,
  public engineAudioId: number = 0,
  public trailsId: number = 0,
  public goalExplosionId: number = 0,
  public loadoutPaint: LoadoutPaintT|null = null,
  public primaryColorLookup: ColorT|null = null,
  public secondaryColorLookup: ColorT|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const loadoutPaint = (this.loadoutPaint !== null ? this.loadoutPaint!.pack(builder) : 0);
  const primaryColorLookup = (this.primaryColorLookup !== null ? this.primaryColorLookup!.pack(builder) : 0);
  const secondaryColorLookup = (this.secondaryColorLookup !== null ? this.secondaryColorLookup!.pack(builder) : 0);

  PlayerLoadout.startPlayerLoadout(builder);
  PlayerLoadout.addTeamColorId(builder, this.teamColorId);
  PlayerLoadout.addCustomColorId(builder, this.customColorId);
  PlayerLoadout.addCarId(builder, this.carId);
  PlayerLoadout.addDecalId(builder, this.decalId);
  PlayerLoadout.addWheelsId(builder, this.wheelsId);
  PlayerLoadout.addBoostId(builder, this.boostId);
  PlayerLoadout.addAntennaId(builder, this.antennaId);
  PlayerLoadout.addHatId(builder, this.hatId);
  PlayerLoadout.addPaintFinishId(builder, this.paintFinishId);
  PlayerLoadout.addCustomFinishId(builder, this.customFinishId);
  PlayerLoadout.addEngineAudioId(builder, this.engineAudioId);
  PlayerLoadout.addTrailsId(builder, this.trailsId);
  PlayerLoadout.addGoalExplosionId(builder, this.goalExplosionId);
  PlayerLoadout.addLoadoutPaint(builder, loadoutPaint);
  PlayerLoadout.addPrimaryColorLookup(builder, primaryColorLookup);
  PlayerLoadout.addSecondaryColorLookup(builder, secondaryColorLookup);

  return PlayerLoadout.endPlayerLoadout(builder);
}
}
