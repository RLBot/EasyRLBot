import * as flatbuffers from 'flatbuffers';
import { BallRigidBodyState, BallRigidBodyStateT } from '../../rlbot/flat/ball-rigid-body-state';
import { PlayerRigidBodyState, PlayerRigidBodyStateT } from '../../rlbot/flat/player-rigid-body-state';
/**
 * Contains all rigid body state information.
 */
export declare class RigidBodyTick {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RigidBodyTick;
    static getRootAsRigidBodyTick(bb: flatbuffers.ByteBuffer, obj?: RigidBodyTick): RigidBodyTick;
    static getSizePrefixedRootAsRigidBodyTick(bb: flatbuffers.ByteBuffer, obj?: RigidBodyTick): RigidBodyTick;
    ball(obj?: BallRigidBodyState): BallRigidBodyState | null;
    players(index: number, obj?: PlayerRigidBodyState): PlayerRigidBodyState | null;
    playersLength(): number;
    static startRigidBodyTick(builder: flatbuffers.Builder): void;
    static addBall(builder: flatbuffers.Builder, ballOffset: flatbuffers.Offset): void;
    static addPlayers(builder: flatbuffers.Builder, playersOffset: flatbuffers.Offset): void;
    static createPlayersVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPlayersVector(builder: flatbuffers.Builder, numElems: number): void;
    static endRigidBodyTick(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createRigidBodyTick(builder: flatbuffers.Builder, ballOffset: flatbuffers.Offset, playersOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): RigidBodyTickT;
    unpackTo(_o: RigidBodyTickT): void;
}
export declare class RigidBodyTickT {
    ball: BallRigidBodyStateT | null;
    players: (PlayerRigidBodyStateT)[];
    constructor(ball?: BallRigidBodyStateT | null, players?: (PlayerRigidBodyStateT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
