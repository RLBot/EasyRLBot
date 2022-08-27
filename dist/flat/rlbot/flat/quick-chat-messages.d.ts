import * as flatbuffers from 'flatbuffers';
import { QuickChat, QuickChatT } from '../../rlbot/flat/quick-chat';
export declare class QuickChatMessages {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): QuickChatMessages;
    static getRootAsQuickChatMessages(bb: flatbuffers.ByteBuffer, obj?: QuickChatMessages): QuickChatMessages;
    static getSizePrefixedRootAsQuickChatMessages(bb: flatbuffers.ByteBuffer, obj?: QuickChatMessages): QuickChatMessages;
    messages(index: number, obj?: QuickChat): QuickChat | null;
    messagesLength(): number;
    static startQuickChatMessages(builder: flatbuffers.Builder): void;
    static addMessages(builder: flatbuffers.Builder, messagesOffset: flatbuffers.Offset): void;
    static createMessagesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startMessagesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endQuickChatMessages(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createQuickChatMessages(builder: flatbuffers.Builder, messagesOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): QuickChatMessagesT;
    unpackTo(_o: QuickChatMessagesT): void;
}
export declare class QuickChatMessagesT {
    messages: (QuickChatT)[];
    constructor(messages?: (QuickChatT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
