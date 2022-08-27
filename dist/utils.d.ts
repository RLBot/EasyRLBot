import "colors";
import { rlbot } from "./flat/rlbot_generated";
import * as flatstructs from "./flat/flatstructs";
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
    root: rlbot.flat.GameTickPacket | rlbot.flat.FieldInfo | rlbot.flat.QuickChat | rlbot.flat.BallPrediction | rlbot.flat.MatchSettings | rlbot.flat.MessagePacket | undefined;
    type: number;
};
declare function chunkSplitter(bigChunk: Uint8Array): Uint8Array[];
export { Uint16to8Array, Uint8ArrayToString, Logger, encodeFlat, decodeFlat, chunkSplitter, flatstructs, };
