// Credit to SuperVK for big parts of this file

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

export default Controller;
