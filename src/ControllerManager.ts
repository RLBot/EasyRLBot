import { BotClient } from "./BotClient";
import * as flat from "./flat/rlbot_generated";
import * as flatbuffers from "flatbuffers";
import * as utils from "./utils";

class Controller {
  throttle: number;
  steer: number;
  pitch: number;
  roll: number;
  yaw: number;
  boost: boolean;
  jump: boolean;
  handbrake: boolean;
  useItem: boolean;
  constructor() {
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
}

class ControllerManager {
  client: BotClient;
  constructor(client: BotClient) {
    this.client = client;
  }
  sendInput(controller: Controller) {
    let controllerState = flat.ControllerState;
    let playerInput = flat.PlayerInput;

    let builder = new flatbuffers.Builder(1024);

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

    let finishedControllerState = controllerState.endControllerState(builder);

    playerInput.startPlayerInput(builder);
    playerInput.addPlayerIndex(builder, this.client.botIndex);
    playerInput.addControllerState(builder, finishedControllerState);

    let finishedPlayerInput = controllerState.endControllerState(builder);

    builder.finish(finishedPlayerInput);

    let buf = builder.asUint8Array();

    if (this.client.ws == null) return;
    this.client.ws.write(utils.encodeFlat(4, buf));
  }
}

export { Controller, ControllerManager };
