import * as flatbuffers from 'flatbuffers';
import { TileState } from '../../rlbot/flat/tile-state';
export declare class DropshotTile {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): DropshotTile;
    static getRootAsDropshotTile(bb: flatbuffers.ByteBuffer, obj?: DropshotTile): DropshotTile;
    static getSizePrefixedRootAsDropshotTile(bb: flatbuffers.ByteBuffer, obj?: DropshotTile): DropshotTile;
    /**
     * The amount of damage the tile has sustained.
     */
    tileState(): TileState;
    static startDropshotTile(builder: flatbuffers.Builder): void;
    static addTileState(builder: flatbuffers.Builder, tileState: TileState): void;
    static endDropshotTile(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createDropshotTile(builder: flatbuffers.Builder, tileState: TileState): flatbuffers.Offset;
    unpack(): DropshotTileT;
    unpackTo(_o: DropshotTileT): void;
}
export declare class DropshotTileT {
    tileState: TileState;
    constructor(tileState?: TileState);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
