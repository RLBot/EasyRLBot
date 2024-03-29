// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { HumanPlayer, HumanPlayerT } from '../../rlbot/flat/human-player';
import { PartyMemberBotPlayer, PartyMemberBotPlayerT } from '../../rlbot/flat/party-member-bot-player';
import { PlayerClass, unionToPlayerClass, unionListToPlayerClass } from '../../rlbot/flat/player-class';
import { PlayerLoadout, PlayerLoadoutT } from '../../rlbot/flat/player-loadout';
import { PsyonixBotPlayer, PsyonixBotPlayerT } from '../../rlbot/flat/psyonix-bot-player';
import { RLBotPlayer, RLBotPlayerT } from '../../rlbot/flat/rlbot-player';


export class PlayerConfiguration {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):PlayerConfiguration {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsPlayerConfiguration(bb:flatbuffers.ByteBuffer, obj?:PlayerConfiguration):PlayerConfiguration {
  return (obj || new PlayerConfiguration()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsPlayerConfiguration(bb:flatbuffers.ByteBuffer, obj?:PlayerConfiguration):PlayerConfiguration {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new PlayerConfiguration()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

varietyType():PlayerClass {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : PlayerClass.NONE;
}

variety<T extends flatbuffers.Table>(obj:any):any|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__union(obj, this.bb_pos + offset) : null;
}

name():string|null
name(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
name(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

team():number {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

loadout(obj?:PlayerLoadout):PlayerLoadout|null {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? (obj || new PlayerLoadout()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

/**
 * In the case where the requested player index is not available, spawnId will help
 * the framework figure out what index was actually assigned to this player instead.
 */
spawnId():number {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

static startPlayerConfiguration(builder:flatbuffers.Builder) {
  builder.startObject(6);
}

static addVarietyType(builder:flatbuffers.Builder, varietyType:PlayerClass) {
  builder.addFieldInt8(0, varietyType, PlayerClass.NONE);
}

static addVariety(builder:flatbuffers.Builder, varietyOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, varietyOffset, 0);
}

static addName(builder:flatbuffers.Builder, nameOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, nameOffset, 0);
}

static addTeam(builder:flatbuffers.Builder, team:number) {
  builder.addFieldInt32(3, team, 0);
}

static addLoadout(builder:flatbuffers.Builder, loadoutOffset:flatbuffers.Offset) {
  builder.addFieldOffset(4, loadoutOffset, 0);
}

static addSpawnId(builder:flatbuffers.Builder, spawnId:number) {
  builder.addFieldInt32(5, spawnId, 0);
}

static endPlayerConfiguration(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}


unpack(): PlayerConfigurationT {
  return new PlayerConfigurationT(
    this.varietyType(),
    (() => {
      let temp = unionToPlayerClass(this.varietyType(), this.variety.bind(this));
      if(temp === null) { return null; }
      return temp.unpack()
  })(),
    this.name(),
    this.team(),
    (this.loadout() !== null ? this.loadout()!.unpack() : null),
    this.spawnId()
  );
}


unpackTo(_o: PlayerConfigurationT): void {
  _o.varietyType = this.varietyType();
  _o.variety = (() => {
      let temp = unionToPlayerClass(this.varietyType(), this.variety.bind(this));
      if(temp === null) { return null; }
      return temp.unpack()
  })();
  _o.name = this.name();
  _o.team = this.team();
  _o.loadout = (this.loadout() !== null ? this.loadout()!.unpack() : null);
  _o.spawnId = this.spawnId();
}
}

export class PlayerConfigurationT {
constructor(
  public varietyType: PlayerClass = PlayerClass.NONE,
  public variety: HumanPlayerT|PartyMemberBotPlayerT|PsyonixBotPlayerT|RLBotPlayerT|null = null,
  public name: string|Uint8Array|null = null,
  public team: number = 0,
  public loadout: PlayerLoadoutT|null = null,
  public spawnId: number = 0
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const variety = builder.createObjectOffset(this.variety);
  const name = (this.name !== null ? builder.createString(this.name!) : 0);
  const loadout = (this.loadout !== null ? this.loadout!.pack(builder) : 0);

  PlayerConfiguration.startPlayerConfiguration(builder);
  PlayerConfiguration.addVarietyType(builder, this.varietyType);
  PlayerConfiguration.addVariety(builder, variety);
  PlayerConfiguration.addName(builder, name);
  PlayerConfiguration.addTeam(builder, this.team);
  PlayerConfiguration.addLoadout(builder, loadout);
  PlayerConfiguration.addSpawnId(builder, this.spawnId);

  return PlayerConfiguration.endPlayerConfiguration(builder);
}
}
