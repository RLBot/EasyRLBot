import * as flatbuffers from 'flatbuffers';
/**
 * Notification when the local player is spectating another player.
 */
export declare class PlayerSpectate {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PlayerSpectate;
    static getRootAsPlayerSpectate(bb: flatbuffers.ByteBuffer, obj?: PlayerSpectate): PlayerSpectate;
    static getSizePrefixedRootAsPlayerSpectate(bb: flatbuffers.ByteBuffer, obj?: PlayerSpectate): PlayerSpectate;
    /**
     * index of the player that is being spectated. Will be -1 if not spectating anyone.
     */
    playerIndex(): number;
    static startPlayerSpectate(builder: flatbuffers.Builder): void;
    static addPlayerIndex(builder: flatbuffers.Builder, playerIndex: number): void;
    static endPlayerSpectate(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPlayerSpectate(builder: flatbuffers.Builder, playerIndex: number): flatbuffers.Offset;
    unpack(): PlayerSpectateT;
    unpackTo(_o: PlayerSpectateT): void;
}
export declare class PlayerSpectateT {
    playerIndex: number;
    constructor(playerIndex?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
