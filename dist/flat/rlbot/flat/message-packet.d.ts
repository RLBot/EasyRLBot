import * as flatbuffers from 'flatbuffers';
import { GameMessageWrapper, GameMessageWrapperT } from '../../rlbot/flat/game-message-wrapper';
/**
 * We have some very small messages that are only a few bytes but potentially sent at high frequency.
 * Bundle them into a packet to reduce the overhead of sending data over TCP.
 */
export declare class MessagePacket {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MessagePacket;
    static getRootAsMessagePacket(bb: flatbuffers.ByteBuffer, obj?: MessagePacket): MessagePacket;
    static getSizePrefixedRootAsMessagePacket(bb: flatbuffers.ByteBuffer, obj?: MessagePacket): MessagePacket;
    messages(index: number, obj?: GameMessageWrapper): GameMessageWrapper | null;
    messagesLength(): number;
    gameSeconds(): number;
    frameNum(): number;
    static startMessagePacket(builder: flatbuffers.Builder): void;
    static addMessages(builder: flatbuffers.Builder, messagesOffset: flatbuffers.Offset): void;
    static createMessagesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startMessagesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addGameSeconds(builder: flatbuffers.Builder, gameSeconds: number): void;
    static addFrameNum(builder: flatbuffers.Builder, frameNum: number): void;
    static endMessagePacket(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createMessagePacket(builder: flatbuffers.Builder, messagesOffset: flatbuffers.Offset, gameSeconds: number, frameNum: number): flatbuffers.Offset;
    unpack(): MessagePacketT;
    unpackTo(_o: MessagePacketT): void;
}
export declare class MessagePacketT {
    messages: (GameMessageWrapperT)[];
    gameSeconds: number;
    frameNum: number;
    constructor(messages?: (GameMessageWrapperT)[], gameSeconds?: number, frameNum?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
