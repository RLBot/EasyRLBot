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
exports.ControllerManager = exports.Controller = void 0;
var rlbot_generated_1 = require("./flat/rlbot_generated");
var flatbuffers_1 = require("flatbuffers");
var utils = __importStar(require("./utils"));
var Controller = /** @class */ (function () {
    function Controller() {
        this.throttle = 0;
        this.steer = 0;
        this.pitch = 0;
        this.roll = 0;
        this.yaw = 0;
        this.boost = false;
        this.jump = false;
        this.handbrake = false;
        this.useItem = false;
    }
    return Controller;
}());
exports.Controller = Controller;
var ControllerManager = /** @class */ (function () {
    function ControllerManager(client) {
        this.client = client;
    }
    ControllerManager.prototype.sendInput = function (controller) {
        var controllerState = rlbot_generated_1.rlbot.flat.ControllerState;
        var playerInput = rlbot_generated_1.rlbot.flat.PlayerInput;
        var builder = new flatbuffers_1.flatbuffers.Builder(1024);
        controllerState.startControllerState(builder);
        controllerState.addThrottle(builder, controller.throttle);
        controllerState.addSteer(builder, controller.steer);
        controllerState.addPitch(builder, controller.pitch);
        controllerState.addYaw(builder, controller.yaw);
        controllerState.addRoll(builder, controller.roll);
        controllerState.addBoost(builder, controller.boost);
        controllerState.addJump(builder, controller.jump);
        controllerState.addHandbrake(builder, controller.handbrake);
        controllerState.addUseItem(builder, controller.useItem);
        var finishedControllerState = controllerState.endControllerState(builder);
        playerInput.startPlayerInput(builder);
        playerInput.addPlayerIndex(builder, this.client.botIndex);
        playerInput.addControllerState(builder, finishedControllerState);
        var finishedPlayerInput = controllerState.endControllerState(builder);
        builder.finish(finishedPlayerInput);
        var buf = builder.asUint8Array();
        if (this.client.ws == null)
            return;
        this.client.ws.write(utils.encodeFlat(4, buf));
    };
    return ControllerManager;
}());
exports.ControllerManager = ControllerManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbGxlck1hbmFnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvQ29udHJvbGxlck1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDBEQUErQztBQUMvQywyQ0FBMEM7QUFDMUMsNkNBQWlDO0FBRWpDO0lBVUU7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDZCxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQUFyQkQsSUFxQkM7QUF5Q1EsZ0NBQVU7QUF2Q25CO0lBRUUsMkJBQVksTUFBaUI7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUNELHFDQUFTLEdBQVQsVUFBVSxVQUFzQjtRQUM5QixJQUFJLGVBQWUsR0FBRyx1QkFBSyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDakQsSUFBSSxXQUFXLEdBQUcsdUJBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBRXpDLElBQUksT0FBTyxHQUFHLElBQUkseUJBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFNUMsZUFBZSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlDLGVBQWUsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxRCxlQUFlLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEQsZUFBZSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BELGVBQWUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoRCxlQUFlLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEQsZUFBZSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BELGVBQWUsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRCxlQUFlLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUQsZUFBZSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXhELElBQUksdUJBQXVCLEdBQUcsZUFBZSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTFFLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0QyxXQUFXLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFELFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztRQUVqRSxJQUFJLG1CQUFtQixHQUFHLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV0RSxPQUFPLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFFcEMsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRWpDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksSUFBSTtZQUFFLE9BQU87UUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQXJDRCxJQXFDQztBQUVvQiw4Q0FBaUIifQ==