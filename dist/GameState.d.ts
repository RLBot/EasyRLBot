import * as flatbuffers from "flatbuffers";
declare class Vector3 {
    x: number;
    y: number;
    z: number;
    constructor(x?: number, y?: number, z?: number);
    fromFlat(flat: any): this;
    convertToFlat(builder: flatbuffers.Builder): number | null;
    convertToFlatPartial(builder: flatbuffers.Builder): number | null;
}
declare class Rotator {
    pitch: number;
    yaw: number;
    roll: number;
    constructor(pitch?: number, yaw?: number, roll?: number);
    fromFlat(flat: any): this;
    convertToFlat(builder: flatbuffers.Builder): number | null;
}
declare class Physics {
    location: Vector3;
    rotation: Rotator;
    velocity: Vector3;
    angularVelocity: Vector3;
    constructor(location?: Vector3, rotation?: Rotator, velocity?: Vector3, angularVelocity?: Vector3);
    fromFlat(flat: any): this;
    convertToFlat(builder: flatbuffers.Builder): number | null;
}
declare class BallState {
    physics: Physics;
    constructor(physics: Physics);
    convertToFlat(builder: flatbuffers.Builder): number | null;
}
declare class CarState {
    physics: Physics;
    boostAmount: number;
    jumped: boolean;
    doubleJumped: boolean;
    constructor(physics: Physics, boostAmount: number, jumped: boolean, doubleJumped: boolean);
    convertToFlat(builder: flatbuffers.Builder): number;
}
declare class BoostState {
    respawnTime: number;
    constructor(respawnTime: number);
    convertToFlat(builder: flatbuffers.Builder): number;
}
declare class GameInfoState {
    worldGravityZ: number;
    gameSpeed: number;
    constructor(worldGravityZ: number, gameSpeed: number);
    convertToFlat(builder: flatbuffers.Builder): number;
}
declare class GameState {
    ballState: BallState;
    carStates: (CarState | any)[];
    boostStates: (BoostState | any)[];
    gameInfoState: GameInfoState;
    constructor(ballState: BallState, carStates: (CarState | any)[], boostStates: (BoostState | any)[], gameInfoState: GameInfoState);
    convertToFlat(builder: flatbuffers.Builder): number;
}
export { Vector3, Rotator, Physics, BallState, BoostState, GameInfoState, CarState, GameState, };
