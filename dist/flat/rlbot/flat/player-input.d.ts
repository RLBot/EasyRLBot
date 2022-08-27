import * as flatbuffers from 'flatbuffers';
import { ControllerState, ControllerStateT } from '../../rlbot/flat/controller-state';
export declare class PlayerInput {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PlayerInput;
    static getRootAsPlayerInput(bb: flatbuffers.ByteBuffer, obj?: PlayerInput): PlayerInput;
    static getSizePrefixedRootAsPlayerInput(bb: flatbuffers.ByteBuffer, obj?: PlayerInput): PlayerInput;
    playerIndex(): number;
    controllerState(obj?: ControllerState): ControllerState | null;
    static startPlayerInput(builder: flatbuffers.Builder): void;
    static addPlayerIndex(builder: flatbuffers.Builder, playerIndex: number): void;
    static addControllerState(builder: flatbuffers.Builder, controllerStateOffset: flatbuffers.Offset): void;
    static endPlayerInput(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): PlayerInputT;
    unpackTo(_o: PlayerInputT): void;
}
export declare class PlayerInputT {
    playerIndex: number;
    controllerState: ControllerStateT | null;
    constructor(playerIndex?: number, controllerState?: ControllerStateT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
