import * as flatbuffers from 'flatbuffers';
/**
 * A normal human player
 */
export declare class HumanPlayer {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): HumanPlayer;
    static getRootAsHumanPlayer(bb: flatbuffers.ByteBuffer, obj?: HumanPlayer): HumanPlayer;
    static getSizePrefixedRootAsHumanPlayer(bb: flatbuffers.ByteBuffer, obj?: HumanPlayer): HumanPlayer;
    static startHumanPlayer(builder: flatbuffers.Builder): void;
    static endHumanPlayer(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createHumanPlayer(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): HumanPlayerT;
    unpackTo(_o: HumanPlayerT): void;
}
export declare class HumanPlayerT {
    constructor();
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
