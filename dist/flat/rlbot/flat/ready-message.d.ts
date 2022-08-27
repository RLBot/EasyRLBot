import * as flatbuffers from 'flatbuffers';
/**
 * Sent when connecting to RLBot to indicate what type of messages are desired.
 * This could be sent by a bot, or a bot manager governing several bots, an
 * overlay, or any other utility that connects to the RLBot process.
 */
export declare class ReadyMessage {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ReadyMessage;
    static getRootAsReadyMessage(bb: flatbuffers.ByteBuffer, obj?: ReadyMessage): ReadyMessage;
    static getSizePrefixedRootAsReadyMessage(bb: flatbuffers.ByteBuffer, obj?: ReadyMessage): ReadyMessage;
    wantsBallPredictions(): boolean;
    wantsQuickChat(): boolean;
    wantsGameMessages(): boolean;
    static startReadyMessage(builder: flatbuffers.Builder): void;
    static addWantsBallPredictions(builder: flatbuffers.Builder, wantsBallPredictions: boolean): void;
    static addWantsQuickChat(builder: flatbuffers.Builder, wantsQuickChat: boolean): void;
    static addWantsGameMessages(builder: flatbuffers.Builder, wantsGameMessages: boolean): void;
    static endReadyMessage(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createReadyMessage(builder: flatbuffers.Builder, wantsBallPredictions: boolean, wantsQuickChat: boolean, wantsGameMessages: boolean): flatbuffers.Offset;
    unpack(): ReadyMessageT;
    unpackTo(_o: ReadyMessageT): void;
}
export declare class ReadyMessageT {
    wantsBallPredictions: boolean;
    wantsQuickChat: boolean;
    wantsGameMessages: boolean;
    constructor(wantsBallPredictions?: boolean, wantsQuickChat?: boolean, wantsGameMessages?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
