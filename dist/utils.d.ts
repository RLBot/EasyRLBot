import "colors";
import * as flat from "./flat/rlbot_generated";
declare class Logger {
    name: string;
    enabled: boolean;
    constructor(name: string);
    log(...args: string[]): void;
}
declare function Uint8ArrayToString(bytes: Uint8Array): string;
declare function Uint16to8Array(array16: Uint16Array): Uint8Array;
declare function encodeFlat(messageTypeInt: number, flatArray: Uint8Array): Uint8Array;
declare function decodeFlat(bytes: Uint8Array): {
    root: flat.BallPrediction | flat.FieldInfo | flat.GameTickPacket | flat.MatchSettings | flat.MessagePacket | flat.QuickChat;
    type: 1 | 2 | 3 | 12 | 10 | 9;
};
declare function chunkSplitter(bigChunk: Uint8Array): Uint8Array[];
export { Uint16to8Array, Uint8ArrayToString, Logger, encodeFlat, decodeFlat, chunkSplitter, };
