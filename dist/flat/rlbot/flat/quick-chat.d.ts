import * as flatbuffers from 'flatbuffers';
import { QuickChatSelection } from '../../rlbot/flat/quick-chat-selection';
export declare class QuickChat {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): QuickChat;
    static getRootAsQuickChat(bb: flatbuffers.ByteBuffer, obj?: QuickChat): QuickChat;
    static getSizePrefixedRootAsQuickChat(bb: flatbuffers.ByteBuffer, obj?: QuickChat): QuickChat;
    quickChatSelection(): QuickChatSelection;
    /**
     * The index of the player that sent the quick chat
     */
    playerIndex(): number;
    /**
     * True if the chat is team only false if everyone can see it.
     */
    teamOnly(): boolean;
    messageIndex(): number;
    timeStamp(): number;
    static startQuickChat(builder: flatbuffers.Builder): void;
    static addQuickChatSelection(builder: flatbuffers.Builder, quickChatSelection: QuickChatSelection): void;
    static addPlayerIndex(builder: flatbuffers.Builder, playerIndex: number): void;
    static addTeamOnly(builder: flatbuffers.Builder, teamOnly: boolean): void;
    static addMessageIndex(builder: flatbuffers.Builder, messageIndex: number): void;
    static addTimeStamp(builder: flatbuffers.Builder, timeStamp: number): void;
    static endQuickChat(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishQuickChatBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedQuickChatBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createQuickChat(builder: flatbuffers.Builder, quickChatSelection: QuickChatSelection, playerIndex: number, teamOnly: boolean, messageIndex: number, timeStamp: number): flatbuffers.Offset;
    unpack(): QuickChatT;
    unpackTo(_o: QuickChatT): void;
}
export declare class QuickChatT {
    quickChatSelection: QuickChatSelection;
    playerIndex: number;
    teamOnly: boolean;
    messageIndex: number;
    timeStamp: number;
    constructor(quickChatSelection?: QuickChatSelection, playerIndex?: number, teamOnly?: boolean, messageIndex?: number, timeStamp?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
