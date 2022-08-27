import * as flatbuffers from 'flatbuffers';
/**
 * A console command which we will try to execute inside Rocket League.
 * See https://github.com/RLBot/RLBot/wiki/Console-Commands for a list of known commands.
 */
export declare class ConsoleCommand {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ConsoleCommand;
    static getRootAsConsoleCommand(bb: flatbuffers.ByteBuffer, obj?: ConsoleCommand): ConsoleCommand;
    static getSizePrefixedRootAsConsoleCommand(bb: flatbuffers.ByteBuffer, obj?: ConsoleCommand): ConsoleCommand;
    command(): string | null;
    command(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startConsoleCommand(builder: flatbuffers.Builder): void;
    static addCommand(builder: flatbuffers.Builder, commandOffset: flatbuffers.Offset): void;
    static endConsoleCommand(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createConsoleCommand(builder: flatbuffers.Builder, commandOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ConsoleCommandT;
    unpackTo(_o: ConsoleCommandT): void;
}
export declare class ConsoleCommandT {
    command: string | Uint8Array | null;
    constructor(command?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
