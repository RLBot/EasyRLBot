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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.BotClient = void 0;
require("colors");
var net_1 = __importDefault(require("net"));
var flatbuffers_1 = require("flatbuffers");
var rlbot_generated_1 = require("./flat/rlbot_generated");
var ControllerManager_1 = require("./ControllerManager");
var RenderManager_1 = require("./RenderManager");
var utils = __importStar(require("./utils"));
var BotClient = /** @class */ (function () {
    function BotClient(botIndex, ws) {
        var _this = this;
        if (ws === void 0) { ws = null; }
        this.renderer = new RenderManager_1.RenderManager(this);
        this.controller = new ControllerManager_1.ControllerManager(this);
        this.GameTickPacketRate = 0;
        if (botIndex == null)
            throw new Error("Give bot index");
        this.botIndex = botIndex;
        this.internalName = "BOT-" + this.botIndex;
        this.logger = new utils.Logger(this.internalName);
        this.standalone = ws == null;
        if (this.standalone) {
            var port = 23234;
            var host = "localhost";
            this.ws = new net_1["default"].Socket();
            this.logger.log("Socket", "Connecting...".yellow);
            this.ws.connect({ port: port, host: host }, function () {
                _this.start();
            });
        }
        else {
            this.ws = ws || new net_1["default"].Socket();
            this.start();
        }
        this.ws.on("data", function (f) {
            _this.messageHandler(f);
        });
        this.readyMessageAccepted = false;
        this.latestFieldInfo = null;
        this.latestBallPrediction = null;
        this.latestMatchSettings = null;
    }
    BotClient.prototype.onReady = function () { };
    BotClient.prototype.getOutput = function (gameTickPacket, fieldInfo, ballPrediction, matchSettings) { };
    BotClient.prototype.onGameTickPacket = function (gameTickPacket) { };
    BotClient.prototype.onFieldInfo = function (fieldInfo) { };
    BotClient.prototype.onMatchSettings = function (matchSettings) { };
    BotClient.prototype.onQuickChat = function (quickChat) { };
    BotClient.prototype.onBallPrediction = function (ballPrediction) { };
    BotClient.prototype.messageHandler = function (raw) {
        var _this = this;
        if (!this.readyMessageAccepted) {
            this.readyMessageAccepted = true;
            this.logger.log("Socket", "Server accepted ready message and is now sending GameTickPackets".green);
            this.onReady();
        }
        var parsedLoad;
        try {
            parsedLoad = utils.decodeFlat(raw);
        }
        catch (_a) {
            return this.logger.log("Socket", "Recived incorrect data, socket is unstable.");
        }
        var cleanLoad;
        switch (parsedLoad.type) {
            case 1:
                this.GameTickPacketRate++;
                setTimeout((function () {
                    _this.GameTickPacketRate--;
                }).bind(this), 1000);
                cleanLoad = new utils.flatstructs.GameTickPacket(parsedLoad.root);
                this.onGameTickPacket(cleanLoad);
                this.getOutput(cleanLoad, this.latestFieldInfo, this.latestBallPrediction, this.latestMatchSettings);
                break;
            case 2:
                cleanLoad = new utils.flatstructs.FieldInfo(parsedLoad.root);
                this.onFieldInfo(cleanLoad);
                this.latestFieldInfo = cleanLoad;
                break;
            case 3:
                cleanLoad = new utils.flatstructs.MatchSettings(parsedLoad.root);
                this.onMatchSettings(cleanLoad);
                this.latestMatchSettings = cleanLoad;
                break;
            case 9:
                cleanLoad = new utils.flatstructs.QuickChat(parsedLoad.root);
                this.onQuickChat(cleanLoad);
                break;
            case 10:
                cleanLoad = new utils.flatstructs.BallPrediction(parsedLoad.root);
                this.onBallPrediction(cleanLoad);
                this.latestBallPrediction = cleanLoad;
                break;
        }
    };
    BotClient.prototype.setGameState = function (newGameState) {
        var builder = new flatbuffers_1.flatbuffers.Builder(1024);
        var finishedGameState = newGameState.convertToFlat(builder);
        builder.finish(finishedGameState);
        var buf = builder.asUint8Array();
        this.ws.write(utils.encodeFlat(7, buf));
    };
    BotClient.prototype.setMatchSettings = function (newMatchSettings) {
        this.logger.log("MatchSettings", "This feature is not supported yet. Support is comming when json support is comming to RLBot.");
    };
    BotClient.prototype.sendQuickChat = function (QuickChatSelection, teamOnly) {
        if (teamOnly === void 0) { teamOnly = false; }
        var quickChat = rlbot_generated_1.rlbot.flat.QuickChat;
        var builder = new flatbuffers_1.flatbuffers.Builder(1024);
        quickChat.startQuickChat(builder);
        quickChat.addQuickChatSelection(builder, QuickChatSelection);
        quickChat.addPlayerIndex(builder, this.botIndex);
        quickChat.addTeamOnly(builder, teamOnly);
        var quickchatOffset = quickChat.endQuickChat(builder);
        builder.finish(quickchatOffset);
        var buf = builder.asUint8Array();
        this.ws.write(utils.encodeFlat(9, buf));
    };
    BotClient.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var builder, readyMessage, readyMsgBuf;
            return __generator(this, function (_a) {
                if (this.standalone)
                    this.logger.log("Socket", "Connected".green);
                builder = new flatbuffers_1.flatbuffers.Builder(1024);
                rlbot_generated_1.rlbot.flat.ReadyMessage.startReadyMessage(builder);
                rlbot_generated_1.rlbot.flat.ReadyMessage.addWantsBallPredictions(builder, true);
                rlbot_generated_1.rlbot.flat.ReadyMessage.addWantsGameMessages(builder, true);
                rlbot_generated_1.rlbot.flat.ReadyMessage.addWantsQuickChat(builder, true);
                readyMessage = rlbot_generated_1.rlbot.flat.ReadyMessage.endReadyMessage(builder);
                builder.finish(readyMessage);
                readyMsgBuf = builder.asUint8Array();
                this.ws.write(utils.encodeFlat(11, readyMsgBuf));
                return [2 /*return*/];
            });
        });
    };
    return BotClient;
}());
exports.BotClient = BotClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm90Q2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL0JvdENsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0JBQWdCO0FBQ2hCLDRDQUFzQjtBQUN0QiwyQ0FBMEM7QUFFMUMsMERBQStDO0FBRS9DLHlEQUFvRTtBQUVwRSxpREFBZ0Q7QUFDaEQsNkNBQWlDO0FBRWpDO0lBb0JFLG1CQUFZLFFBQWdCLEVBQUUsRUFBNEI7UUFBMUQsaUJBNkJDO1FBN0I2QixtQkFBQSxFQUFBLFNBQTRCO1FBUDFELGFBQVEsR0FBa0IsSUFBSSw2QkFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xELGVBQVUsR0FBc0IsSUFBSSxxQ0FBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU1RCx1QkFBa0IsR0FBVyxDQUFDLENBQUM7UUFLN0IsSUFBSSxRQUFRLElBQUksSUFBSTtZQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLFNBQU8sSUFBSSxDQUFDLFFBQVUsQ0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFbEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLElBQUksSUFBSSxDQUFDO1FBQzdCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFNLElBQUksR0FBRyxLQUFLLENBQUM7WUFDbkIsSUFBTSxJQUFJLEdBQUcsV0FBVyxDQUFDO1lBRXpCLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxnQkFBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxN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