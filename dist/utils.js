"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
exports.flatstructs = exports.decodeFlat = exports.encodeFlat = exports.Logger = exports.Uint8ArrayToString = exports.Uint16to8Array = void 0;
require("colors");
var rlbot_generated_1 = require("./flat/rlbot_generated");
var flatbuffers_1 = require("flatbuffers");
var flatstructs = __importStar(require("./flat/flatstructs"));
exports.flatstructs = flatstructs;
var Logger = /** @class */ (function () {
    function Logger(name) {
        this.enabled = true;
        this.name = name;
    }
    Logger.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this.enabled)
            return;
        var cats = args.splice(0, args.length - 1);
        var message = args[0];
        cats.unshift("");
        var catstring = cats.reduce(function (total, next) {
            return total + "[" + next.cyan + "] ";
        });
        console.log("[" + ("Easy".green + "RLBot".blue).bold + "] [" + this.name.magenta + "] " + catstring + message.white);
    };
    return Logger;
}());
exports.Logger = Logger;
function Uint8ArrayToString(bytes) {
    return bytes.reduce(function (str, byte) { return str + byte.toString(2).padStart(8, "0"); }, "");
}
exports.Uint8ArrayToString = Uint8ArrayToString;
function Uint16to8Array(array16) {
    var result = new Uint8Array(array16.buffer, array16.byteOffset, array16.byteLength);
    return result;
}
exports.Uint16to8Array = Uint16to8Array;
function encodeFlat(messageTypeInt, flatArray) {
    var messageType = new Uint16Array(1);
    messageType.set([messageTypeInt]);
    var messageLen = new Uint16Array(1);
    messageLen.set([flatArray.length]);
    var mergedArray = new Uint8Array(4 + flatArray.length);
    mergedArray.set(Uint16to8Array(messageType).reverse(), 0);
    mergedArray.set(Uint16to8Array(messageLen).reverse(), 2);
    mergedArray.set(flatArray, 4);
    return mergedArray;
}
exports.encodeFlat = encodeFlat;
function decodeFlat(bytes) {
    var rawBytes = bytes.subarray(4);
    var rawDataType = Uint8Array.from(bytes).subarray(0, 2);
    var dataType = ((rawDataType[0] & 0xff) << 8) | (rawDataType[1] & 0xff);
    var buf = new flatbuffers_1.flatbuffers.ByteBuffer(rawBytes);
    var root;
    try {
        switch (dataType) {
            case 1:
                root = rlbot_generated_1.rlbot.flat.GameTickPacket.getRootAsGameTickPacket(buf);
                break;
            case 2:
                root = rlbot_generated_1.rlbot.flat.FieldInfo.getRootAsFieldInfo(buf);
                break;
            case 3:
                root = rlbot_generated_1.rlbot.flat.MatchSettings.getRootAsMatchSettings(buf);
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
                root = rlbot_generated_1.rlbot.flat.QuickChat.getRootAsQuickChat(buf);
                break;
            case 10:
                root = rlbot_generated_1.rlbot.flat.BallPrediction.getRootAsBallPrediction(buf);
                break;
            case 11:
                throw "Invalid type for decoding '11'";
                break;
            case 12:
                root = rlbot_generated_1.rlbot.flat.MessagePacket.getRootAsMessagePacket(buf);
                break;
        }
    }
    catch (e) {
        throw "";
    }
    return { root: root, type: dataType };
}
exports.decodeFlat = decodeFlat;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtCQUFnQjtBQUNoQiwwREFBK0M7QUFDL0MsMkNBQTBDO0FBQzFDLDhEQUFrRDtBQTZHaEQsa0NBQVc7QUEzR2I7SUFHRSxnQkFBWSxJQUFZO1FBRHhCLFlBQU8sR0FBWSxJQUFJLENBQUM7UUFFdEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUNELG9CQUFHLEdBQUg7UUFBSSxjQUFpQjthQUFqQixVQUFpQixFQUFqQixxQkFBaUIsRUFBakIsSUFBaUI7WUFBakIseUJBQWlCOztRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87WUFBRSxPQUFPO1FBQzFCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDM0MsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDakIsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFDLEtBQUssRUFBRSxJQUFJO1lBQ3RDLE9BQU8sS0FBSyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQ1QsTUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksV0FDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLFVBQ2QsU0FBUyxHQUFHLE9BQU8sQ0FBQyxLQUFPLENBQ2pDLENBQUM7SUFDSixDQUFDO0lBQ0gsYUFBQztBQUFELENB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