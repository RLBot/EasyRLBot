import * as flatbuffers from 'flatbuffers';
import { RenderMessage, RenderMessageT } from '../../rlbot/flat/render-message';
export declare class RenderGroup {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RenderGroup;
    static getRootAsRenderGroup(bb: flatbuffers.ByteBuffer, obj?: RenderGroup): RenderGroup;
    static getSizePrefixedRootAsRenderGroup(bb: flatbuffers.ByteBuffer, obj?: RenderGroup): RenderGroup;
    renderMessages(index: number, obj?: RenderMessage): RenderMessage | null;
    renderMessagesLength(): number;
    /**
     * The id of the render group
     */
    id(): number;
    static startRenderGroup(builder: flatbuffers.Builder): void;
    static addRenderMessages(builder: flatbuffers.Builder, renderMessagesOffset: flatbuffers.Offset): void;
    static createRenderMessagesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRenderMessagesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addId(builder: flatbuffers.Builder, id: number): void;
    static endRenderGroup(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createRenderGroup(builder: flatbuffers.Builder, renderMessagesOffset: flatbuffers.Offset, id: number): flatbuffers.Offset;
    unpack(): RenderGroupT;
    unpackTo(_o: RenderGroupT): void;
}
export declare class RenderGroupT {
    renderMessages: (RenderMessageT)[];
    id: number;
    constructor(renderMessages?: (RenderMessageT)[], id?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
