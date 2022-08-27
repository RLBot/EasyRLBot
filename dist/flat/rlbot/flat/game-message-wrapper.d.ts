import * as flatbuffers from 'flatbuffers';
import { GameMessage } from '../../rlbot/flat/game-message';
import { PlayerInputChangeT } from '../../rlbot/flat/player-input-change';
import { PlayerSpectateT } from '../../rlbot/flat/player-spectate';
import { PlayerStatEventT } from '../../rlbot/flat/player-stat-event';
export declare class GameMessageWrapper {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): GameMessageWrapper;
    static getRootAsGameMessageWrapper(bb: flatbuffers.ByteBuffer, obj?: GameMessageWrapper): GameMessageWrapper;
    static getSizePrefixedRootAsGameMessageWrapper(bb: flatbuffers.ByteBuffer, obj?: GameMessageWrapper): GameMessageWrapper;
    MessageType(): GameMessage;
    Message<T extends flatbuffers.Table>(obj: any): any | null;
    static startGameMessageWrapper(builder: flatbuffers.Builder): void;
    static addMessageType(builder: flatbuffers.Builder, MessageType: GameMessage): void;
    static addMessage(builder: flatbuffers.Builder, MessageOffset: flatbuffers.Offset): void;
    static endGameMessageWrapper(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createGameMessageWrapper(builder: flatbuffers.Builder, MessageType: GameMessage, MessageOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): GameMessageWrapperT;
    unpackTo(_o: GameMessageWrapperT): void;
}
export declare class GameMessageWrapperT {
    MessageType: GameMessage;
    Message: PlayerInputChangeT | PlayerSpectateT | PlayerStatEventT | null;
    constructor(MessageType?: GameMessage, Message?: PlayerInputChangeT | PlayerSpectateT | PlayerStatEventT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
