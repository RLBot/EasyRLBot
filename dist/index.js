"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var BotClient_1 = require("./BotClient");
var BotManager_1 = require("./BotManager");
var utils_1 = require("./utils");
var QuickChats_1 = __importDefault(require("./QuickChats"));
var renderStuff = __importStar(require("./RenderManager"));
var controllerStuff = __importStar(require("./ControllerManager"));
var gameStateStuff = __importStar(require("./GameState"));
module.exports = __assign(__assign(__assign(__assign({ Client: BotClient_1.BotClient,
    Manager: BotManager_1.BotManager,
    quickChats: QuickChats_1["default"] }, utils_1.flatstructs), controllerStuff), renderStuff), gameStateStuff);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBa0Q7QUFDbEQsMkNBQXFEO0FBQ3JELGlDQUFzQztBQUN0Qyw0REFBc0M7QUFDdEMsMkRBQStDO0FBQy9DLG1FQUF1RDtBQUN2RCwwREFBOEM7QUFFOUMsTUFBTSxDQUFDLE9BQU8seUNBQ1osTUFBTSx1QkFBQTtJQUNOLE9BQU8seUJBQUE7SUFDUCxVQUFVLHlCQUFBLElBQ1AsbUJBQVcsR0FDWCxlQUFlLEdBQ2YsV0FBVyxHQUNYLGNBQWMsQ0FDbEIsQ0FBQyJ9