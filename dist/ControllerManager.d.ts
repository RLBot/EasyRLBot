import { BotClient } from "./BotClient";
declare class Controller {
    throttle: number;
    steer: number;
    pitch: number;
    roll: number;
    yaw: number;
    boost: boolean;
    jump: boolean;
    handbrake: boolean;
    useItem: boolean;
    constructor();
}
declare class ControllerManager {
    client: BotClient;
    constructor(client: BotClient);
    sendInput(controller: Controller): void;
}
export { Controller, ControllerManager };
