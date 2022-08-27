import * as flatbuffers from 'flatbuffers';
import { TinyBall, TinyBallT } from '../../rlbot/flat/tiny-ball';
import { TinyPlayer, TinyPlayerT } from '../../rlbot/flat/tiny-player';
/**
 * A minimal version of the game tick packet, useful when bandwidth needs to be conserved.
 */
export declare class TinyPacket {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TinyPacket;
    static getRootAsTinyPacket(bb: flatbuffers.ByteBuffer, obj?: TinyPacket): TinyPacket;
    static getSizePrefixedRootAsTinyPacket(bb: flatbuffers.ByteBuffer, obj?: TinyPacket): TinyPacket;
    players(index: number, obj?: TinyPlayer): TinyPlayer | null;
    playersLength(): number;
    ball(obj?: TinyBall): TinyBall | null;
    static startTinyPacket(builder: flatbuffers.Builder): void;
    static addPlayers(builder: flatbuffers.Builder, playersOffset: flatbuffers.Offset): void;
    static createPlayersVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPlayersVector(builder: flatbuffers.Builder, numElems: number): void;
    static addBall(builder: flatbuffers.Builder, ballOffset: flatbuffers.Offset): void;
    static endTinyPacket(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): TinyPacketT;
    unpackTo(_o: TinyPacketT): void;
}
export declare class TinyPacketT {
    players: (TinyPlayerT)[];
    ball: TinyBallT | null;
    constructor(players?: (TinyPlayerT)[], ball?: TinyBallT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
