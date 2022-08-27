// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { BallBouncinessOption } from '../../rlbot/flat/ball-bounciness-option';
import { BallMaxSpeedOption } from '../../rlbot/flat/ball-max-speed-option';
import { BallSizeOption } from '../../rlbot/flat/ball-size-option';
import { BallTypeOption } from '../../rlbot/flat/ball-type-option';
import { BallWeightOption } from '../../rlbot/flat/ball-weight-option';
import { BoostOption } from '../../rlbot/flat/boost-option';
import { BoostStrengthOption } from '../../rlbot/flat/boost-strength-option';
import { DemolishOption } from '../../rlbot/flat/demolish-option';
import { GameSpeedOption } from '../../rlbot/flat/game-speed-option';
import { GravityOption } from '../../rlbot/flat/gravity-option';
import { MatchLength } from '../../rlbot/flat/match-length';
import { MaxScore } from '../../rlbot/flat/max-score';
import { OvertimeOption } from '../../rlbot/flat/overtime-option';
import { RespawnTimeOption } from '../../rlbot/flat/respawn-time-option';
import { RumbleOption } from '../../rlbot/flat/rumble-option';
import { SeriesLengthOption } from '../../rlbot/flat/series-length-option';


export class MutatorSettings {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):MutatorSettings {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsMutatorSettings(bb:flatbuffers.ByteBuffer, obj?:MutatorSettings):MutatorSettings {
  return (obj || new MutatorSettings()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsMutatorSettings(bb:flatbuffers.ByteBuffer, obj?:MutatorSettings):MutatorSettings {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new MutatorSettings()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

matchLength():MatchLength {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : MatchLength.Five_Minutes;
}

maxScore():MaxScore {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : MaxScore.Unlimited;
}

overtimeOption():OvertimeOption {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : OvertimeOption.Unlimited;
}

seriesLengthOption():SeriesLengthOption {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : SeriesLengthOption.Unlimited;
}

gameSpeedOption():GameSpeedOption {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : GameSpeedOption.Default;
}

ballMaxSpeedOption():BallMaxSpeedOption {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : BallMaxSpeedOption.Default;
}

ballTypeOption():BallTypeOption {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : BallTypeOption.Default;
}

ballWeightOption():BallWeightOption {
  const offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : BallWeightOption.Default;
}

ballSizeOption():BallSizeOption {
  const offset = this.bb!.__offset(this.bb_pos, 20);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : BallSizeOption.Default;
}

ballBouncinessOption():BallBouncinessOption {
  const offset = this.bb!.__offset(this.bb_pos, 22);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : BallBouncinessOption.Default;
}

boostOption():BoostOption {
  const offset = this.bb!.__offset(this.bb_pos, 24);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : BoostOption.Normal_Boost;
}

rumbleOption():RumbleOption {
  const offset = this.bb!.__offset(this.bb_pos, 26);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : RumbleOption.No_Rumble;
}

boostStrengthOption():BoostStrengthOption {
  const offset = this.bb!.__offset(this.bb_pos, 28);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : BoostStrengthOption.One;
}

gravityOption():GravityOption {
  const offset = this.bb!.__offset(this.bb_pos, 30);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : GravityOption.Default;
}

demolishOption():DemolishOption {
  const offset = this.bb!.__offset(this.bb_pos, 32);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : DemolishOption.Default;
}

respawnTimeOption():RespawnTimeOption {
  const offset = this.bb!.__offset(this.bb_pos, 34);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : RespawnTimeOption.Three_Seconds;
}

static startMutatorSettings(builder:flatbuffers.Builder) {
  builder.startObject(16);
}

static addMatchLength(builder:flatbuffers.Builder, matchLength:MatchLength) {
  builder.addFieldInt8(0, matchLength, MatchLength.Five_Minutes);
}

static addMaxScore(builder:flatbuffers.Builder, maxScore:MaxScore) {
  builder.addFieldInt8(1, maxScore, MaxScore.Unlimited);
}

static addOvertimeOption(builder:flatbuffers.Builder, overtimeOption:OvertimeOption) {
  builder.addFieldInt8(2, overtimeOption, OvertimeOption.Unlimited);
}

static addSeriesLengthOption(builder:flatbuffers.Builder, seriesLengthOption:SeriesLengthOption) {
  builder.addFieldInt8(3, seriesLengthOption, SeriesLengthOption.Unlimited);
}

static addGameSpeedOption(builder:flatbuffers.Builder, gameSpeedOption:GameSpeedOption) {
  builder.addFieldInt8(4, gameSpeedOption, GameSpeedOption.Default);
}

static addBallMaxSpeedOption(builder:flatbuffers.Builder, ballMaxSpeedOption:BallMaxSpeedOption) {
  builder.addFieldInt8(5, ballMaxSpeedOption, BallMaxSpeedOption.Default);
}

static addBallTypeOption(builder:flatbuffers.Builder, ballTypeOption:BallTypeOption) {
  builder.addFieldInt8(6, ballTypeOption, BallTypeOption.Default);
}

static addBallWeightOption(builder:flatbuffers.Builder, ballWeightOption:BallWeightOption) {
  builder.addFieldInt8(7, ballWeightOption, BallWeightOption.Default);
}

static addBallSizeOption(builder:flatbuffers.Builder, ballSizeOption:BallSizeOption) {
  builder.addFieldInt8(8, ballSizeOption, BallSizeOption.Default);
}

static addBallBouncinessOption(builder:flatbuffers.Builder, ballBouncinessOption:BallBouncinessOption) {
  builder.addFieldInt8(9, ballBouncinessOption, BallBouncinessOption.Default);
}

static addBoostOption(builder:flatbuffers.Builder, boostOption:BoostOption) {
  builder.addFieldInt8(10, boostOption, BoostOption.Normal_Boost);
}

static addRumbleOption(builder:flatbuffers.Builder, rumbleOption:RumbleOption) {
  builder.addFieldInt8(11, rumbleOption, RumbleOption.No_Rumble);
}

static addBoostStrengthOption(builder:flatbuffers.Builder, boostStrengthOption:BoostStrengthOption) {
  builder.addFieldInt8(12, boostStrengthOption, BoostStrengthOption.One);
}

static addGravityOption(builder:flatbuffers.Builder, gravityOption:GravityOption) {
  builder.addFieldInt8(13, gravityOption, GravityOption.Default);
}

static addDemolishOption(builder:flatbuffers.Builder, demolishOption:DemolishOption) {
  builder.addFieldInt8(14, demolishOption, DemolishOption.Default);
}

static addRespawnTimeOption(builder:flatbuffers.Builder, respawnTimeOption:RespawnTimeOption) {
  builder.addFieldInt8(15, respawnTimeOption, RespawnTimeOption.Three_Seconds);
}

static endMutatorSettings(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createMutatorSettings(builder:flatbuffers.Builder, matchLength:MatchLength, maxScore:MaxScore, overtimeOption:OvertimeOption, seriesLengthOption:SeriesLengthOption, gameSpeedOption:GameSpeedOption, ballMaxSpeedOption:BallMaxSpeedOption, ballTypeOption:BallTypeOption, ballWeightOption:BallWeightOption, ballSizeOption:BallSizeOption, ballBouncinessOption:BallBouncinessOption, boostOption:BoostOption, rumbleOption:RumbleOption, boostStrengthOption:BoostStrengthOption, gravityOption:GravityOption, demolishOption:DemolishOption, respawnTimeOption:RespawnTimeOption):flatbuffers.Offset {
  MutatorSettings.startMutatorSettings(builder);
  MutatorSettings.addMatchLength(builder, matchLength);
  MutatorSettings.addMaxScore(builder, maxScore);
  MutatorSettings.addOvertimeOption(builder, overtimeOption);
  MutatorSettings.addSeriesLengthOption(builder, seriesLengthOption);
  MutatorSettings.addGameSpeedOption(builder, gameSpeedOption);
  MutatorSettings.addBallMaxSpeedOption(builder, ballMaxSpeedOption);
  MutatorSettings.addBallTypeOption(builder, ballTypeOption);
  MutatorSettings.addBallWeightOption(builder, ballWeightOption);
  MutatorSettings.addBallSizeOption(builder, ballSizeOption);
  MutatorSettings.addBallBouncinessOption(builder, ballBouncinessOption);
  MutatorSettings.addBoostOption(builder, boostOption);
  MutatorSettings.addRumbleOption(builder, rumbleOption);
  MutatorSettings.addBoostStrengthOption(builder, boostStrengthOption);
  MutatorSettings.addGravityOption(builder, gravityOption);
  MutatorSettings.addDemolishOption(builder, demolishOption);
  MutatorSettings.addRespawnTimeOption(builder, respawnTimeOption);
  return MutatorSettings.endMutatorSettings(builder);
}

unpack(): MutatorSettingsT {
  return new MutatorSettingsT(
    this.matchLength(),
    this.maxScore(),
    this.overtimeOption(),
    this.seriesLengthOption(),
    this.gameSpeedOption(),
    this.ballMaxSpeedOption(),
    this.ballTypeOption(),
    this.ballWeightOption(),
    this.ballSizeOption(),
    this.ballBouncinessOption(),
    this.boostOption(),
    this.rumbleOption(),
    this.boostStrengthOption(),
    this.gravityOption(),
    this.demolishOption(),
    this.respawnTimeOption()
  );
}


unpackTo(_o: MutatorSettingsT): void {
  _o.matchLength = this.matchLength();
  _o.maxScore = this.maxScore();
  _o.overtimeOption = this.overtimeOption();
  _o.seriesLengthOption = this.seriesLengthOption();
  _o.gameSpeedOption = this.gameSpeedOption();
  _o.ballMaxSpeedOption = this.ballMaxSpeedOption();
  _o.ballTypeOption = this.ballTypeOption();
  _o.ballWeightOption = this.ballWeightOption();
  _o.ballSizeOption = this.ballSizeOption();
  _o.ballBouncinessOption = this.ballBouncinessOption();
  _o.boostOption = this.boostOption();
  _o.rumbleOption = this.rumbleOption();
  _o.boostStrengthOption = this.boostStrengthOption();
  _o.gravityOption = this.gravityOption();
  _o.demolishOption = this.demolishOption();
  _o.respawnTimeOption = this.respawnTimeOption();
}
}

export class MutatorSettingsT {
constructor(
  public matchLength: MatchLength = MatchLength.Five_Minutes,
  public maxScore: MaxScore = MaxScore.Unlimited,
  public overtimeOption: OvertimeOption = OvertimeOption.Unlimited,
  public seriesLengthOption: SeriesLengthOption = SeriesLengthOption.Unlimited,
  public gameSpeedOption: GameSpeedOption = GameSpeedOption.Default,
  public ballMaxSpeedOption: BallMaxSpeedOption = BallMaxSpeedOption.Default,
  public ballTypeOption: BallTypeOption = BallTypeOption.Default,
  public ballWeightOption: BallWeightOption = BallWeightOption.Default,
  public ballSizeOption: BallSizeOption = BallSizeOption.Default,
  public ballBouncinessOption: BallBouncinessOption = BallBouncinessOption.Default,
  public boostOption: BoostOption = BoostOption.Normal_Boost,
  public rumbleOption: RumbleOption = RumbleOption.No_Rumble,
  public boostStrengthOption: BoostStrengthOption = BoostStrengthOption.One,
  public gravityOption: GravityOption = GravityOption.Default,
  public demolishOption: DemolishOption = DemolishOption.Default,
  public respawnTimeOption: RespawnTimeOption = RespawnTimeOption.Three_Seconds
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return MutatorSettings.createMutatorSettings(builder,
    this.matchLength,
    this.maxScore,
    this.overtimeOption,
    this.seriesLengthOption,
    this.gameSpeedOption,
    this.ballMaxSpeedOption,
    this.ballTypeOption,
    this.ballWeightOption,
    this.ballSizeOption,
    this.ballBouncinessOption,
    this.boostOption,
    this.rumbleOption,
    this.boostStrengthOption,
    this.gravityOption,
    this.demolishOption,
    this.respawnTimeOption
  );
}
}
