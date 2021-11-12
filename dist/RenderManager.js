"use strict";
// This file is copied from RLBotJS by SuperVK. It is translated into typescript and some minor changes were made to make it compatible with this codebase.
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
exports.Color = exports.RenderManager = void 0;
var crypto_1 = __importDefault(require("crypto"));
var flatbuffers_1 = require("flatbuffers");
var utils = __importStar(require("./utils"));
var rlbot_generated_1 = require("./flat/rlbot_generated");
var GameState_1 = require("./GameState");
var flat = rlbot_generated_1.rlbot.flat;
var RenderMessage = flat.RenderMessage, RenderType = flat.RenderType, RenderGroup = flat.RenderGroup;
var defaultGroupId = "default";
var maxInt = 1337;
var Color = /** @class */ (function () {
    function Color(alpha, red, green, blue) {
        this.alpha = alpha;
        this.red = red;
        this.green = green;
        this.blue = blue;
    }
    Color.prototype.convertToFlat = function (builder) {
        flat.Color.startColor(builder);
        flat.Color.addA(builder, this.alpha);
        flat.Color.addR(builder, this.red);
        flat.Color.addG(builder, this.green);
        flat.Color.addB(builder, this.blue);
        return flat.Color.endColor(builder);
    };
    return Color;
}());
exports.Color = Color;
var RenderManager = /** @class */ (function () {
    function RenderManager(botClient) {
        this.client = botClient;
        this.builder = null;
        this.index = this.client.botIndex;
        this.Color = Color;
        this.renderList = [];
        this.groupID = "";
    }
    RenderManager.prototype.beginRendering = function (groupID) {
        this.builder = new flatbuffers_1.flatbuffers.Builder(0);
        this.renderList = [];
        if (groupID)
            this.groupID = groupID;
    };
    RenderManager.prototype.endRendering = function () {
        if (this.groupID == undefined)
            this.groupID = "default";
        var hash = crypto_1["default"].createHash("sha256");
        hash.update(this.groupID + this.client.botIndex);
        var groupIDHashed = parseInt(hash.digest("hex"), 16) % maxInt;
        if (this.builder == null)
            return;
        var messages = RenderGroup.createRenderMessagesVector(this.builder, this.renderList);
        RenderGroup.startRenderGroup(this.builder);
        RenderGroup.addId(this.builder, groupIDHashed);
        RenderGroup.addRenderMessages(this.builder, messages);
        var result = RenderGroup.endRenderGroup(this.builder);
        this.builder.finish(result);
        var buf = this.builder.asUint8Array();
        if (this.client.ws == null)
            return;
        this.client.ws.write(utils.encodeFlat(8, buf));
    };
    RenderManager.prototype.drawString2D = function (x, y, scaleX, scaleY, text, color) {
        if (this.builder == null)
            return;
        var textFlat = this.builder.createString(text);
        var colorFlat = color.convertToFlat(this.builder);
        RenderMessage.startRenderMessage(this.builder);
        RenderMessage.addRenderType(this.builder, RenderType.DrawString2D);
        RenderMessage.addColor(this.builder, colorFlat);
        RenderMessage.addStart(this.builder, flat.Vector3.createVector3(this.builder, x, y, 0));
        RenderMessage.addScaleX(this.builder, scaleX);
        RenderMessage.addScaleY(this.builder, scaleY);
        RenderMessage.addText(this.builder, textFlat);
        this.renderList.push(RenderMessage.endRenderMessage(this.builder));
    };
    RenderManager.prototype.drawString3D = function (vector, scaleX, scaleY, text, color) {
        var _a;
        if (this.builder == null)
            return;
        var textFlat = this.builder.createString(text);
        var colorFlat = color.convertToFlat(this.builder);
        RenderMessage.startRenderMessage(this.builder);
        RenderMessage.addRenderType(this.builder, RenderType.DrawString3D);
        RenderMessage.addColor(this.builder, colorFlat);
        RenderMessage.addStart(this.builder, (_a = vector.convertToFlat(this.builder)) !== null && _a !== void 0 ? _a : 0);
        RenderMessage.addScaleX(this.builder, scaleX);
        RenderMessage.addScaleY(this.builder, scaleY);
        RenderMessage.addText(this.builder, textFlat);
        this.renderList.push(RenderMessage.endRenderMessage(this.builder));
    };
    RenderManager.prototype.drawLine2D_3D = function (x, y, end, color) {
        var _a;
        if (this.builder == null)
            return;
        var colorFlat = color.convertToFlat(this.builder);
        RenderMessage.startRenderMessage(this.builder);
        RenderMessage.addRenderType(this.builder, RenderType.DrawLine2D_3D);
        RenderMessage.addStart(this.builder, flat.Vector3.createVector3(this.builder, x, y, 0));
        RenderMessage.addEnd(this.builder, (_a = end.convertToFlat(this.builder)) !== null && _a !== void 0 ? _a : 0);
        RenderMessage.addColor(this.builder, colorFlat !== null && colorFlat !== void 0 ? colorFlat : 0);
        this.renderList.push(RenderMessage.endRenderMessage(this.builder));
    };
    RenderManager.prototype.drawLine2D = function (startX, startY, endX, endY, color) {
        var _a, _b;
        if (this.builder == null)
            return;
        var colorFlat = color.convertToFlat(this.builder);
        RenderMessage.startRenderMessage(this.builder);
        RenderMessage.addRenderType(this.builder, RenderType.DrawLine2D);
        RenderMessage.addStart(this.builder, (_a = new GameState_1.Vector3(startX, startY, 0).convertToFlat(this.builder)) !== null && _a !== void 0 ? _a : 0);
        RenderMessage.addEnd(this.builder, (_b = new GameState_1.Vector3(endX, endY, 0).convertToFlat(this.builder)) !== null && _b !== void 0 ? _b : 0);
        RenderMessage.addColor(this.builder, colorFlat);
        this.renderList.push(RenderMessage.endRenderMessage(this.builder));
    };
    RenderManager.prototype.drawLine3D = function (start, end, color) {
        var _a, _b;
        if (this.builder == null)
            return;
        var colorFlat = color.convertToFlat(this.builder);
        RenderMessage.startRenderMessage(this.builder);
        RenderMessage.addRenderType(this.builder, RenderType.DrawLine3D);
        RenderMessage.addStart(this.builder, (_a = start.convertToFlat(this.builder)) !== null && _a !== void 0 ? _a : 0);
        RenderMessage.addEnd(this.builder, (_b = end.convertToFlat(this.builder)) !== null && _b !== void 0 ? _b : 0);
        RenderMessage.addColor(this.builder, colorFlat);
        this.renderList.push(RenderMessage.endRenderMessage(this.builder));
    };
    RenderManager.prototype.drawRect2D = function (x, y, width, height, 
    // filled: boolean, Remove due to it being a legacy feature
    color) {
        if (this.builder == null)
            return;
        var colorFlat = color.convertToFlat(this.builder);
        RenderMessage.startRenderMessage(this.builder);
        RenderMessage.addRenderType(this.builder, RenderType.DrawRect2D);
        RenderMessage.addStart(this.builder, flat.Vector3.createVector3(this.builder, x, y, 0));
        RenderMessage.addScaleX(this.builder, width);
        RenderMessage.addScaleY(this.builder, height);
        // RenderMessage.addIsFilled(this.builder, filled);
        RenderMessage.addColor(this.builder, colorFlat);
        this.renderList.push(RenderMessage.endRenderMessage(this.builder));
    };
    RenderManager.prototype.drawRect3D = function (vector, width, height, 
    // filled: boolean, Remove due to it being a legacy feature
    color, centered) {
        var _a;
        if (this.builder == null)
            return;
        var colorFlat = color.convertToFlat(this.builder);
        RenderMessage.startRenderMessage(this.builder);
        RenderMessage.addRenderType(this.builder, centered ? RenderType.DrawCenteredRect3D : RenderType.DrawRect3D);
        RenderMessage.addStart(this.builder, (_a = vector.convertToFlat(this.builder)) !== null && _a !== void 0 ? _a : 0);
        RenderMessage.addScaleX(this.builder, width);
        RenderMessage.addScaleY(this.builder, height);
        // RenderMessage.addIsFilled(this.builder, filled);
        RenderMessage.addColor(this.builder, colorFlat);
        this.renderList.push(RenderMessage.endRenderMessage(this.builder));
    };
    RenderManager.prototype.black = function () {
        return new this.Color(255, 0, 0, 0);
    };
    RenderManager.prototype.white = function () {
        return new this.Color(255, 255, 255, 255);
    };
    RenderManager.prototype.gray = function () {
        return new this.Color(255, 128, 128, 128);
    };
    RenderManager.prototype.blue = function () {
        return new this.Color(255, 0, 0, 255);
    };
    RenderManager.prototype.red = function () {
        return new this.Color(255, 255, 0, 0);
    };
    RenderManager.prototype.green = function () {
        return new this.Color(255, 0, 128, 0);
    };
    RenderManager.prototype.lime = function () {
        return new this.Color(255, 0, 255, 0);
    };
    RenderManager.prototype.yellow = function () {
        return new this.Color(255, 255, 255, 0);
    };
    RenderManager.prototype.orange = function () {
        return new this.Color(255, 225, 128, 0);
    };
    RenderManager.prototype.cyan = function () {
        return new this.Color(255, 0, 255, 255);
    };
    RenderManager.prototype.pink = function () {
        return new this.Color(255, 255, 0, 255);
    };
    RenderManager.prototype.purple = function () {
        return new this.Color(255, 128, 0, 128);
    };
    RenderManager.prototype.teal = function () {
        return new this.Color(255, 0, 128, 128);
    };
    return RenderManager;
}());
exports.RenderManager = RenderManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVuZGVyTWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9SZW5kZXJNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwySkFBMko7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0osa0RBQTRCO0FBQzVCLDJDQUEwQztBQUUxQyw2Q0FBaUM7QUFDakMsMERBQStDO0FBQy9DLHlDQUFzQztBQUN0QyxJQUFNLElBQUksR0FBRyx1QkFBSyxDQUFDLElBQUksQ0FBQztBQUNoQixJQUFBLGFBQWEsR0FBOEIsSUFBSSxjQUFsQyxFQUFFLFVBQVUsR0FBa0IsSUFBSSxXQUF0QixFQUFFLFdBQVcsR0FBSyxJQUFJLFlBQVQsQ0FBVTtBQUN4RCxJQUFNLGNBQWMsR0FBRyxTQUFTLENBQUM7QUFDakMsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBRXBCO0lBS0UsZUFBWSxLQUFhLEVBQUUsR0FBVyxFQUFFLEtBQWEsRUFBRSxJQUFZO1FBQ2pFLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUNELDZCQUFhLEdBQWIsVUFBYyxPQUE0QjtRQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENB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