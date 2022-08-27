import * as flatbuffers from 'flatbuffers';
import { Color, ColorT } from '../../rlbot/flat/color';
import { RenderType } from '../../rlbot/flat/render-type';
import { Vector3, Vector3T } from '../../rlbot/flat/vector3';
export declare class RenderMessage {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RenderMessage;
    static getRootAsRenderMessage(bb: flatbuffers.ByteBuffer, obj?: RenderMessage): RenderMessage;
    static getSizePrefixedRootAsRenderMessage(bb: flatbuffers.ByteBuffer, obj?: RenderMessage): RenderMessage;
    renderType(): RenderType;
    color(obj?: Color): Color | null;
    /**
     * For 2d renders this only grabs x and y
     */
    start(obj?: Vector3): Vector3 | null;
    /**
     * For 2d renders this only grabs x and y
     */
    end(obj?: Vector3): Vector3 | null;
    /**
     * Scales the x size of the text/rectangle, is used for rectangles assuming an initial value of 1
     */
    scaleX(): number;
    /**
     * Scales the y size of the text/rectangle, is used for rectangles assuming an initial value of 1
     */
    scaleY(): number;
    text(): string | null;
    text(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Rectangles can be filled or just outlines.
     */
    isFilled(): boolean;
    static startRenderMessage(builder: flatbuffers.Builder): void;
    static addRenderType(builder: flatbuffers.Builder, renderType: RenderType): void;
    static addColor(builder: flatbuffers.Builder, colorOffset: flatbuffers.Offset): void;
    static addStart(builder: flatbuffers.Builder, startOffset: flatbuffers.Offset): void;
    static addEnd(builder: flatbuffers.Builder, endOffset: flatbuffers.Offset): void;
    static addScaleX(builder: flatbuffers.Builder, scaleX: number): void;
    static addScaleY(builder: flatbuffers.Builder, scaleY: number): void;
    static addText(builder: flatbuffers.Builder, textOffset: flatbuffers.Offset): void;
    static addIsFilled(builder: flatbuffers.Builder, isFilled: boolean): void;
    static endRenderMessage(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): RenderMessageT;
    unpackTo(_o: RenderMessageT): void;
}
export declare class RenderMessageT {
    renderType: RenderType;
    color: ColorT | null;
    start: Vector3T | null;
    end: Vector3T | null;
    scaleX: number;
    scaleY: number;
    text: string | Uint8Array | null;
    isFilled: boolean;
    constructor(renderType?: RenderType, color?: ColorT | null, start?: Vector3T | null, end?: Vector3T | null, scaleX?: number, scaleY?: number, text?: string | Uint8Array | null, isFilled?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
