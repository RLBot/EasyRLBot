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
exports.BotManager = void 0;
require("colors");
var net_1 = __importDefault(require("net"));
var utils = __importStar(require("./utils"));
var BotManager = /** @class */ (function () {
    function BotManager(BotClass, agentPort) {
        var _this = this;
        this.logger = new utils.Logger("Manager");
        this.Bot = BotClass;
        this.bots = {};
        this.agentPort = agentPort;
        this.agentIP = "localhost";
        var port = 23234;
        var host = "localhost";
        this.ws = new net_1["default"].Socket();
        this.logger.log("Socket", "Connecting...".yellow);
        this.ws.connect({ port: port, host: host }, function () {
            _this.logger.log("Socket", "Connected".green);
            _this.start();
        });
        this.ws.on("error", function () {
            _this.logger.log("Socket", "Error when connecting to RLBot, make sure RLBot is running.".red);
            process.exit(0);
        });
    }
    BotManager.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var server, logger;
            var _this = this;
            return __generator(this, function (_a) {
                server = net_1["default"].createServer(function (socket) {
                    socket.setEncoding("ascii");
                    socket.on("data", function (data) {
                        var message = data.toString().split("\n");
                        var type = message[0];
                        var index = message[1];
                        switch (type) {
                            case "add":
                                if (_this.bots[index] != undefined)
                                    return;
                                _this.bots[index] = new _this.Bot(Number(index), _this.ws);
                                _this.bots[index].logger.enabled = false;
                                _this.logger.log("AgentConnection", ("Added bot with index " + index).green);
                                break;
                            case "remove":
                                delete _this.bots[index];
                                _this.logger.log("AgentConnection", ("Removed bot with index " + index).red);
                                break;
                            default:
                                break;
                        }
                    });
                });
                logger = this.logger;
                server.listen(this.agentPort, this.agentIP, function () {
                    logger.log("AgentConnection", "Listening to data from Agent");
                    server.on("close", function () {
                        logger.log("AgentConnection", "Connection closed");
                    });
                    server.on("error", function (error) {
                        logger.log("AgentConnection", "Error: " + error);
                    });
                });
                server.on("error", function (e) {
                    if (e.code == "EADDRINUSE") {
                        _this.logger.log("AgentConnection", "Connection closed, port already in use");
                        throw new Error("Port is already in use: " + _this.agentIP);
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    return BotManager;
}());
exports.BotManager = BotManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm90TWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9Cb3RNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrQkFBZ0I7QUFDaEIsNENBQXNCO0FBRXRCLDZDQUFpQztBQU1qQztJQVFFLG9CQUFZLFFBQWEsRUFBRSxTQUFpQjtRQUE1QyxpQkF3QkM7UUExQkQsV0FBTSxHQUFpQixJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFHakQsSUFBSSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFFZixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQztRQUUzQixJQUFNLElBQUksR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBTSxJQUFJLEdBQUcsV0FBVyxDQUFDO1FBRXpCLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxnQkFBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRTNCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLE1BQUEsRUFBRSxJQUFJLE1BQUEsRUFBRSxFQUFFO1lBQzlCLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0MsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUU7WUFDbEIsS0FBSSxD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