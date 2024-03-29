// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from "flatbuffers";

/**
 * Notification that a player triggers some in-game event, such as:
 *		Win, Loss, TimePlayed;
 *		Shot, Assist, Center, Clear, PoolShot;
 *		Goal, AerialGoal, BicycleGoal, BulletGoal, BackwardsGoal, LongGoal, OvertimeGoal, TurtleGoal;
 *		AerialHit, BicycleHit, BulletHit, /*BackwardsHit,* / JuggleHit, FirstTouch, BallHit;
 *		Save, EpicSave, FreezeSave;
 *		HatTrick, Savior, Playmaker, MVP;
 *		FastestGoal, SlowestGoal, FurthestGoal, OwnGoal;
 *		MostBallTouches, FewestBallTouches, MostBoostPickups, FewestBoostPickups, BoostPickups;
 *		CarTouches, Demolition, Demolish;
 *		LowFive, HighFive;
 */
export class PlayerStatEvent {
  bb: flatbuffers.ByteBuffer | null = null;
  bb_pos = 0;
  __init(i: number, bb: flatbuffers.ByteBuffer): PlayerStatEvent {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  static getRootAsPlayerStatEvent(
    bb: flatbuffers.ByteBuffer,
    obj?: PlayerStatEvent
  ): PlayerStatEvent {
    return (obj || new PlayerStatEvent()).__init(
      bb.readInt32(bb.position()) + bb.position(),
      bb
    );
  }

  static getSizePrefixedRootAsPlayerStatEvent(
    bb: flatbuffers.ByteBuffer,
    obj?: PlayerStatEvent
  ): PlayerStatEvent {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new PlayerStatEvent()).__init(
      bb.readInt32(bb.position()) + bb.position(),
      bb
    );
  }

  /**
   * index of the player associated with the event
   */
  playerIndex(): number {
    const offset = this.bb!.__offset(this.bb_pos, 4);
    return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
  }

  /**
   * Event type
   */
  statType(): string | null;
  statType(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
  statType(optionalEncoding?: any): string | Uint8Array | null {
    const offset = this.bb!.__offset(this.bb_pos, 6);
    return offset
      ? this.bb!.__string(this.bb_pos + offset, optionalEncoding)
      : null;
  }

  static startPlayerStatEvent(builder: flatbuffers.Builder) {
    builder.startObject(2);
  }

  static addPlayerIndex(builder: flatbuffers.Builder, playerIndex: number) {
    builder.addFieldInt32(0, playerIndex, 0);
  }

  static addStatType(
    builder: flatbuffers.Builder,
    statTypeOffset: flatbuffers.Offset
  ) {
    builder.addFieldOffset(1, statTypeOffset, 0);
  }

  static endPlayerStatEvent(builder: flatbuffers.Builder): flatbuffers.Offset {
    const offset = builder.endObject();
    return offset;
  }

  static createPlayerStatEvent(
    builder: flatbuffers.Builder,
    playerIndex: number,
    statTypeOffset: flatbuffers.Offset
  ): flatbuffers.Offset {
    PlayerStatEvent.startPlayerStatEvent(builder);
    PlayerStatEvent.addPlayerIndex(builder, playerIndex);
    PlayerStatEvent.addStatType(builder, statTypeOffset);
    return PlayerStatEvent.endPlayerStatEvent(builder);
  }

  unpack(): PlayerStatEventT {
    return new PlayerStatEventT(this.playerIndex(), this.statType());
  }

  unpackTo(_o: PlayerStatEventT): void {
    _o.playerIndex = this.playerIndex();
    _o.statType = this.statType();
  }
}

export class PlayerStatEventT {
  constructor(
    public playerIndex: number = 0,
    public statType: string | Uint8Array | null = null
  ) {}

  pack(builder: flatbuffers.Builder): flatbuffers.Offset {
    const statType =
      this.statType !== null ? builder.createString(this.statType!) : 0;

    return PlayerStatEvent.createPlayerStatEvent(
      builder,
      this.playerIndex,
      statType
    );
  }
}
