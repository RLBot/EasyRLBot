import "colors";
import { rlbot } from "./flat/rlbot_generated";
import { flatbuffers } from "flatbuffers";
import * as flatstructs from "./flat/flatstructs";

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
  let dataType = bytes.subarray(0, 2)[0] + bytes.subarray(0, 2)[1];
  let buf = new flatbuffers.ByteBuffer(rawBytes);
  let root;
  try {
    switch (dataType) {
      case 1:
        root = rlbot.flat.GameTickPacket.getRootAsGameTickPacket(buf);
        break;
      case 2:
        root = rlbot.flat.FieldInfo.getRootAsFieldInfo(buf);
        break;
      case 3:
        root = rlbot.flat.MatchSettings.getRootAsMatchSettings(buf);
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
        root = rlbot.flat.QuickChat.getRootAsQuickChat(buf);
        break;
      case 10:
        root = rlbot.flat.BallPrediction.getRootAsBallPrediction(buf);
        break;
      case 11:
        throw "Invalid type for decoding '11'";
        break;
      case 12:
        root = rlbot.flat.MessagePacket.getRootAsMessagePacket(buf);
        break;
    }
  } catch (e) {
    throw "";
  }

  return { root, type: dataType };
}

export {
  Uint16to8Array,
  Uint8ArrayToString,
  Logger,
  encodeFlat,
  decodeFlat,
  flatstructs,
};
