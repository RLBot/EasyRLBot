import * as flatbuffers from 'flatbuffers';
/**
 * A psyonix bot, e.g. All Star bot
 */
export declare class PsyonixBotPlayer {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PsyonixBotPlayer;
    static getRootAsPsyonixBotPlayer(bb: flatbuffers.ByteBuffer, obj?: PsyonixBotPlayer): PsyonixBotPlayer;
    static getSizePrefixedRootAsPsyonixBotPlayer(bb: flatbuffers.ByteBuffer, obj?: PsyonixBotPlayer): PsyonixBotPlayer;
    botSkill(): number;
    static startPsyonixBotPlayer(builder: flatbuffers.Builder): void;
    static addBotSkill(builder: flatbuffers.Builder, botSkill: number): void;
    static endPsyonixBotPlayer(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPsyonixBotPlayer(builder: flatbuffers.Builder, botSkill: number): flatbuffers.Offset;
    unpack(): PsyonixBotPlayerT;
    unpackTo(_o: PsyonixBotPlayerT): void;
}
export declare class PsyonixBotPlayerT {
    botSkill: number;
    constructor(botSkill?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
