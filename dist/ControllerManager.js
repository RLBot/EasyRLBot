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
        if (!(controller instanceof Controller)) {
            throw new Error("Expected Controller.");
        }
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
        this.client.ws.write(utils.encodeFlat(4, buf));
    };
    return ControllerManager;
}());
exports.ControllerManager = ControllerManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbGxlck1hbmFnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvQ29udHJvbGxlck1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDBEQUErQztBQUMvQywyQ0FBMEM7QUFDMUMsNkNBQWlDO0FBRWpDO0lBVUU7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDZCxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQUFyQkQsSUFxQkM7QUEyQ1EsZ0NBQVU7QUF6Q25CO0lBRUUsMkJBQVksTUFBaUI7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUNELHFDQUFTLEdBQVQsVUFBVSxVQUFzQjtRQUM5QixJQUFJLENBQUMsQ0FBQyxVQUFVLFlBQVksVUFBVSxDQUFDLEVBQUU7WUFDdkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1NBQ3pDO1FBQ0QsSUFBSSxlQUFlLEdBQUcsdUJBQUssQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQ2pELElBQUksV0FBVyxHQUFHLHVCQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUV6QyxJQUFJLE9BQU8sR0FBRyxJQUFJLHlCQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTVDLGVBQWUsQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QyxlQUFlLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUQsZUFBZSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BELGVBQWUsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwRCxlQUFlLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEQsZUFBZSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xELGVBQWUsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwRCxlQUFlLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEQsZUFBZSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVELGVBQWUsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV4RCxJQUFJLHVCQUF1QixHQUFHLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUUxRSxXQUFXLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxRCxXQUFXLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLHVCQUF1QixDQUFDLENBQUM7UUFFakUsSUFBSSxtQkFBbUIsR0FBRyxlQUFlLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFdEUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBRXBDLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVqQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBdkNELElBdUNDO0FBRW9CLDhDQUFpQiJ9