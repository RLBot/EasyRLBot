import * as flatbuffers from 'flatbuffers';
/**
 * A bot controlled by the RLBot framework
 */
export declare class RLBotPlayer {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RLBotPlayer;
    static getRootAsRLBotPlayer(bb: flatbuffers.ByteBuffer, obj?: RLBotPlayer): RLBotPlayer;
    static getSizePrefixedRootAsRLBotPlayer(bb: flatbuffers.ByteBuffer, obj?: RLBotPlayer): RLBotPlayer;
    static startRLBotPlayer(builder: flatbuffers.Builder): void;
    static endRLBotPlayer(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createRLBotPlayer(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): RLBotPlayerT;
    unpackTo(_o: RLBotPlayerT): void;
}
export declare class RLBotPlayerT {
    constructor();
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
