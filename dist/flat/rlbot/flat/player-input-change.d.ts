import * as flatbuffers from 'flatbuffers';
import { ControllerState, ControllerStateT } from '../../rlbot/flat/controller-state';
/**
 * Rocket League is notifying us that some player has moved their controller. This is an *output*
 */
export declare class PlayerInputChange {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PlayerInputChange;
    static getRootAsPlayerInputChange(bb: flatbuffers.ByteBuffer, obj?: PlayerInputChange): PlayerInputChange;
    static getSizePrefixedRootAsPlayerInputChange(bb: flatbuffers.ByteBuffer, obj?: PlayerInputChange): PlayerInputChange;
    playerIndex(): number;
    controllerState(obj?: ControllerState): ControllerState | null;
    dodgeForward(): number;
    dodgeRight(): number;
    static startPlayerInputChange(builder: flatbuffers.Builder): void;
    static addPlayerIndex(builder: flatbuffers.Builder, playerIndex: number): void;
    static addControllerState(builder: flatbuffers.Builder, controllerStateOffset: flatbuffers.Offset): void;
    static addDodgeForward(builder: flatbuffers.Builder, dodgeForward: number): void;
    static addDodgeRight(builder: flatbuffers.Builder, dodgeRight: number): void;
    static endPlayerInputChange(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): PlayerInputChangeT;
    unpackTo(_o: PlayerInputChangeT): void;
}
export declare class PlayerInputChangeT {
    playerIndex: number;
    controllerState: ControllerStateT | null;
    dodgeForward: number;
    dodgeRight: number;
    constructor(playerIndex?: number, controllerState?: ControllerStateT | null, dodgeForward?: number, dodgeRight?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
