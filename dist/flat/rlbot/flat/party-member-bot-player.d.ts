import * as flatbuffers from 'flatbuffers';
/**
 * A player that Rocket League treats as human, e.g. has a dedicated camera and can do training mode,
 * but is actually controlled by a bot.
 */
export declare class PartyMemberBotPlayer {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PartyMemberBotPlayer;
    static getRootAsPartyMemberBotPlayer(bb: flatbuffers.ByteBuffer, obj?: PartyMemberBotPlayer): PartyMemberBotPlayer;
    static getSizePrefixedRootAsPartyMemberBotPlayer(bb: flatbuffers.ByteBuffer, obj?: PartyMemberBotPlayer): PartyMemberBotPlayer;
    static startPartyMemberBotPlayer(builder: flatbuffers.Builder): void;
    static endPartyMemberBotPlayer(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPartyMemberBotPlayer(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): PartyMemberBotPlayerT;
    unpackTo(_o: PartyMemberBotPlayerT): void;
}
export declare class PartyMemberBotPlayerT {
    constructor();
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
