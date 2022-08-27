import * as flatbuffers from 'flatbuffers';
import { Vector3, Vector3T } from '../../rlbot/flat/vector3';
export declare class Touch {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): Touch;
    static getRootAsTouch(bb: flatbuffers.ByteBuffer, obj?: Touch): Touch;
    static getSizePrefixedRootAsTouch(bb: flatbuffers.ByteBuffer, obj?: Touch): Touch;
    /**
     * The name of the player involved with the touch.
     */
    playerName(): string | null;
    playerName(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Seconds that had elapsed in the game when the touch occurred.
     */
    gameSeconds(): number;
    /**
     * The point of contact for the touch.
     */
    location(obj?: Vector3): Vector3 | null;
    /**
     * The direction of the touch.
     */
    normal(obj?: Vector3): Vector3 | null;
    /**
     * The Team which the touch belongs to, 0 for blue 1 for orange.
     */
    team(): number;
    /**
     * The index of the player involved with the touch.
     */
    playerIndex(): number;
    static startTouch(builder: flatbuffers.Builder): void;
    static addPlayerName(builder: flatbuffers.Builder, playerNameOffset: flatbuffers.Offset): void;
    static addGameSeconds(builder: flatbuffers.Builder, gameSeconds: number): void;
    static addLocation(builder: flatbuffers.Builder, locationOffset: flatbuffers.Offset): void;
    static addNormal(builder: flatbuffers.Builder, normalOffset: flatbuffers.Offset): void;
    static addTeam(builder: flatbuffers.Builder, team: number): void;
    static addPlayerIndex(builder: flatbuffers.Builder, playerIndex: number): void;
    static endTouch(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): TouchT;
    unpackTo(_o: TouchT): void;
}
export declare class TouchT {
    playerName: string | Uint8Array | null;
    gameSeconds: number;
    location: Vector3T | null;
    normal: Vector3T | null;
    team: number;
    playerIndex: number;
    constructor(playerName?: string | Uint8Array | null, gameSeconds?: number, location?: Vector3T | null, normal?: Vector3T | null, team?: number, playerIndex?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
