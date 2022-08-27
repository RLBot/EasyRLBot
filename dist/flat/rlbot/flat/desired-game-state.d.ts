import * as flatbuffers from 'flatbuffers';
import { ConsoleCommand, ConsoleCommandT } from '../../rlbot/flat/console-command';
import { DesiredBallState, DesiredBallStateT } from '../../rlbot/flat/desired-ball-state';
import { DesiredBoostState, DesiredBoostStateT } from '../../rlbot/flat/desired-boost-state';
import { DesiredCarState, DesiredCarStateT } from '../../rlbot/flat/desired-car-state';
import { DesiredGameInfoState, DesiredGameInfoStateT } from '../../rlbot/flat/desired-game-info-state';
export declare class DesiredGameState {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): DesiredGameState;
    static getRootAsDesiredGameState(bb: flatbuffers.ByteBuffer, obj?: DesiredGameState): DesiredGameState;
    static getSizePrefixedRootAsDesiredGameState(bb: flatbuffers.ByteBuffer, obj?: DesiredGameState): DesiredGameState;
    ballState(obj?: DesiredBallState): DesiredBallState | null;
    carStates(index: number, obj?: DesiredCarState): DesiredCarState | null;
    carStatesLength(): number;
    boostStates(index: number, obj?: DesiredBoostState): DesiredBoostState | null;
    boostStatesLength(): number;
    gameInfoState(obj?: DesiredGameInfoState): DesiredGameInfoState | null;
    consoleCommands(index: number, obj?: ConsoleCommand): ConsoleCommand | null;
    consoleCommandsLength(): number;
    static startDesiredGameState(builder: flatbuffers.Builder): void;
    static addBallState(builder: flatbuffers.Builder, ballStateOffset: flatbuffers.Offset): void;
    static addCarStates(builder: flatbuffers.Builder, carStatesOffset: flatbuffers.Offset): void;
    static createCarStatesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startCarStatesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addBoostStates(builder: flatbuffers.Builder, boostStatesOffset: flatbuffers.Offset): void;
    static createBoostStatesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startBoostStatesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addGameInfoState(builder: flatbuffers.Builder, gameInfoStateOffset: flatbuffers.Offset): void;
    static addConsoleCommands(builder: flatbuffers.Builder, consoleCommandsOffset: flatbuffers.Offset): void;
    static createConsoleCommandsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startConsoleCommandsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endDesiredGameState(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): DesiredGameStateT;
    unpackTo(_o: DesiredGameStateT): void;
}
export declare class DesiredGameStateT {
    ballState: DesiredBallStateT | null;
    carStates: (DesiredCarStateT)[];
    boostStates: (DesiredBoostStateT)[];
    gameInfoState: DesiredGameInfoStateT | null;
    consoleCommands: (ConsoleCommandT)[];
    constructor(ballState?: DesiredBallStateT | null, carStates?: (DesiredCarStateT)[], boostStates?: (DesiredBoostStateT)[], gameInfoState?: DesiredGameInfoStateT | null, consoleCommands?: (ConsoleCommandT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
