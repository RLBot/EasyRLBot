import * as flatbuffers from 'flatbuffers';
export declare class ControllerState {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ControllerState;
    static getRootAsControllerState(bb: flatbuffers.ByteBuffer, obj?: ControllerState): ControllerState;
    static getSizePrefixedRootAsControllerState(bb: flatbuffers.ByteBuffer, obj?: ControllerState): ControllerState;
    /**
     * -1 for full reverse, 1 for full forward
     */
    throttle(): number;
    /**
     * -1 for full left, 1 for full right
     */
    steer(): number;
    /**
     * -1 for nose down, 1 for nose up
     */
    pitch(): number;
    /**
     * -1 for full left, 1 for full right
     */
    yaw(): number;
    /**
     * -1 for roll left, 1 for roll right
     */
    roll(): number;
    /**
     * true if you want to press the jump button
     */
    jump(): boolean;
    /**
     * true if you want to press the boost button
     */
    boost(): boolean;
    /**
     * true if you want to press the handbrake button
     */
    handbrake(): boolean;
    /**
     * true if you want to press the 'use item' button, used in rumble etc.
     */
    useItem(): boolean;
    static startControllerState(builder: flatbuffers.Builder): void;
    static addThrottle(builder: flatbuffers.Builder, throttle: number): void;
    static addSteer(builder: flatbuffers.Builder, steer: number): void;
    static addPitch(builder: flatbuffers.Builder, pitch: number): void;
    static addYaw(builder: flatbuffers.Builder, yaw: number): void;
    static addRoll(builder: flatbuffers.Builder, roll: number): void;
    static addJump(builder: flatbuffers.Builder, jump: boolean): void;
    static addBoost(builder: flatbuffers.Builder, boost: boolean): void;
    static addHandbrake(builder: flatbuffers.Builder, handbrake: boolean): void;
    static addUseItem(builder: flatbuffers.Builder, useItem: boolean): void;
    static endControllerState(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createControllerState(builder: flatbuffers.Builder, throttle: number, steer: number, pitch: number, yaw: number, roll: number, jump: boolean, boost: boolean, handbrake: boolean, useItem: boolean): flatbuffers.Offset;
    unpack(): ControllerStateT;
    unpackTo(_o: ControllerStateT): void;
}
export declare class ControllerStateT {
    throttle: number;
    steer: number;
    pitch: number;
    yaw: number;
    roll: number;
    jump: boolean;
    boost: boolean;
    handbrake: boolean;
    useItem: boolean;
    constructor(throttle?: number, steer?: number, pitch?: number, yaw?: number, roll?: number, jump?: boolean, boost?: boolean, handbrake?: boolean, useItem?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
