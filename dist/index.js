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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.gameStateStuff = exports.controllerStuff = exports.renderStuff = exports.flatstructs = exports.quickChats = exports.Manager = exports.Client = void 0;
var BotClient_1 = require("./BotClient");
exports.Client = BotClient_1.BotClient;
var BotManager_1 = require("./BotManager");
exports.Manager = BotManager_1.BotManager;
var QuickChats_1 = __importDefault(require("./QuickChats"));
exports.quickChats = QuickChats_1["default"];
exports.flatstructs = __importStar(require("./flat/flatstructs"));
exports.renderStuff = __importStar(require("./RenderManager"));
exports.controllerStuff = __importStar(require("./ControllerManager"));
exports.gameStateStuff = __importStar(require("./GameState"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUFrRDtBQUl6QyxpQkFKYSxxQkFBTSxDQUliO0FBSGYsMkNBQXFEO0FBR3BDLGtCQUhNLHVCQUFPLENBR047QUFGeEIsNERBQXNDO0FBRVoscUJBRm5CLHVCQUFVLENBRW1CO0FBQ3BDLGtFQUFrRDtBQUNsRCwrREFBK0M7QUFDL0MsdUVBQXVEO0FBQ3ZELDhEQUE4QyJ9