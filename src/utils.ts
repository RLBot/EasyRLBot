import "colors";
import * as flat from "./flat/rlbot_generated";
import * as flatbuffers from "flatbuffers";

class Logger {
  name: string;
  enabled: boolean = true;
  constructor(name: string) {
    this.name = name;
  }
  log(...args: string[]) {
    if (!this.enabled) return;
    let cats = args.splice(0, args.length - 1);
    let message = args[0];
    cats.unshift("");
    let catstring = cats.reduce((total, next) => {
      return total + "[" + next.cyan + "] ";
    });
    console.log(
      `[${("Easy".green + "RLBot".blue).bold}] [${
        this.name.magenta
      }] ${catstring}${message.white}`
    );
  }
}

function Uint8ArrayToString(bytes: Uint8Array): string {
  return bytes.reduce(
    (str: any, byte: any) => str + byte.toString(2).padStart(8, "0"),
    ""
  );
}
function Uint16to8Array(array16: Uint16Array) {
  let result = new Uint8Array(
    array16.buffer,
    array16.byteOffset,
    array16.byteLength
  );

  return result;
}
function encodeFlat(messageTypeInt: number, flatArray: Uint8Array): Uint8Array {
  let messageType = new Uint16Array(1);
  messageType.set([messageTypeInt]);
  let messageLen = new Uint16Array(1);
  messageLen.set([flatArray.length]);

  var mergedArray = new Uint8Array(4 + flatArray.length);
  mergedArray.set(Uint16to8Array(messageType).reverse(), 0);
  mergedArray.set(Uint16to8Array(messageLen).reverse(), 2);
  mergedArray.set(flatArray, 4);
  return mergedArray;
}
function decodeFlat(bytes: Uint8Array) {
  let rawBytes = bytes.subarray(4);
  let rawDataType = Uint8Array.from(bytes).subarray(0, 2);
  let dataType = ((rawDataType[0] & 0xff) << 8) | (rawDataType[1] & 0xff);
  let buf = new flatbuffers.ByteBuffer(rawBytes);
  let root;
  try {
    switch (dataType) {
      case 1:
        root = flat.GameTickPacket.getRootAsGameTickPacket(buf);
        break;
      case 2:
        root = flat.FieldInfo.getRootAsFieldInfo(buf);
        break;
      case 3:
        root = flat.MatchSettings.getRootAsMatchSettings(buf);
        break;
      case 4:
        throw "Invalid type for decoding '4'";
        break;
      case 5:
        throw "Invalid type for decoding '5'";
        break;
      case 6:
        throw "Invalid type for decoding '6'";
        break;
      case 7:
        throw "Invalid type for decoding '7'";
        break;
      case 8:
        throw "Invalid type for decoding '8'";
        break;
      case 9:
        root = flat.QuickChat.getRootAsQuickChat(buf);
        break;
      case 10:
        root = flat.BallPrediction.getRootAsBallPrediction(buf);
        break;
      case 11:
        throw "Invalid type for decoding '11'";
        break;
      case 12:
        root = flat.MessagePacket.getRootAsMessagePacket(buf);
        break;
      default:
        throw "Unknown type";
        break;
    }
  } catch (e) {
    throw "";
  }

  return { root, type: dataType };
}

function chunkSplitter(bigChunk: /*us*/ Uint8Array): Uint8Array[] {
  let chunks: Uint8Array[] = [];
  for (let i = 0; i < bigChunk.length; ) {
    let chunkLeft = bigChunk.subarray(i);
    // let rawDataType = Uint8Array.from(chunkLeft).subarray(0, 2);
    // let dataType = ((rawDataType[0] & 0xff) << 8) | (rawDataType[1] & 0xff);
    let rawDataSize = Uint8Array.from(chunkLeft).subarray(2, 4);
    let dataSize = ((rawDataSize[0] & 0xff) << 8) | (rawDataSize[1] & 0xff);
    chunks.push(chunkLeft.subarray(0, 4 + dataSize));
    i += 4 + dataSize;
  }
  return chunks;
}

export {
  Uint16to8Array,
  Uint8ArrayToString,
  Logger,
  encodeFlat,
  decodeFlat,
  chunkSplitter,
};
