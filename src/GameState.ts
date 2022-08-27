// Credit to SuperVK for big parts of this file

import { flatbuffers } from "flatbuffers";
import { rlbot } from "./flat/rlbot_generated";
const flat = rlbot.flat;
const {
  RotatorPartial,
  DesiredPhysics,
  DesiredBallState,
  DesiredCarState,
  DesiredBoostState,
  DesiredGameInfoState,
  DesiredGameState,
  Float,
  Vector3Partial,
} = flat;

class Vector3 {
  x: number;
  y: number;
  z: number;
  constructor(x: number = 0, y: number = 0, z: number = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  fromFlat(flat: any) {
    this.x = flat.x();
    this.y = flat.y();
    this.z = flat.z();
    return this;
  }
  convertToFlat(builder: flatbuffers.Builder) {
    if (this.x == null && this.y == null && this.z == null) return null;
    return flat.Vector3.createVector3(builder, this.x, this.y, this.z);
  }
  convertToFlatPartial(builder: flatbuffers.Builder) {
    if (this.x == null && this.y == null && this.z == null) return null;
    Vector3Partial.startVector3Partial(builder);
    if (this.x != null)
      Vector3Partial.addX(builder, Float.createFloat(builder, this.x));
    if (this.y != null)
      Vector3Partial.addY(builder, Float.createFloat(builder, this.y));
    if (this.z != null)
      Vector3Partial.addZ(builder, Float.createFloat(builder, this.z));
    return Vector3Partial.endVector3Partial(builder);
  }
}

class Rotator {
  pitch: number;
  yaw: number;
  roll: number;
  constructor(pitch: number = 0, yaw: number = 0, roll: number = 0) {
    this.pitch = pitch;
    this.yaw = yaw;
    this.roll = roll;
  }
  fromFlat(flat: any) {
    if (flat == null) return this;
    this.pitch = flat.pitch();
    this.yaw = flat.yaw();
    this.roll = flat.roll();
    return this;
  }
  convertToFlat(builder: flatbuffers.Builder) {
    if (this.pitch == null && this.yaw == null && this.roll == null)
      return null;
    RotatorPartial.startRotatorPartial(builder);
    if (this.pitch != null)
      RotatorPartial.addPitch(builder, Float.createFloat(builder, this.pitch));
    if (this.yaw != null)
      RotatorPartial.addYaw(builder, Float.createFloat(builder, this.yaw));
    if (this.roll != null)
      RotatorPartial.addRoll(builder, Float.createFloat(builder, this.roll));
    return RotatorPartial.endRotatorPartial(builder);
  }
}

class Physics {
  location: Vector3;
  rotation: Rotator;
  velocity: Vector3;
  angularVelocity: Vector3;
  constructor(
    location: Vector3 = new Vector3(),
    rotation: Rotator = new Rotator(),
    velocity: Vector3 = new Vector3(),
    angularVelocity: Vector3 = new Vector3()
  ) {
    this.location = location;
    this.rotation = rotation;
    this.velocity = velocity;
    this.angularVelocity = angularVelocity;
  }
  fromFlat(flat: any) {
    this.location = new Vector3().fromFlat(flat.location());
    this.rotation = new Rotator().fromFlat(flat.rotation());
    this.velocity = new Vector3().fromFlat(flat.velocity());
    this.angularVelocity = new Vector3().fromFlat(flat.angularVelocity());
    return this;
  }
  convertToFlat(builder: flatbuffers.Builder) {
    let locationFlat = this.location
      ? this.location.convertToFlatPartial(builder)
      : null;
    let rotationFlat = this.rotation
      ? this.rotation.convertToFlat(builder)
      : null;
    let velocityFlat = this.velocity
      ? this.velocity.convertToFlatPartial(builder)
      : null;
    let angularVelocityFlat = this.angularVelocity
      ? this.angularVelocity.convertToFlatPartial(builder)
      : null;
    if (
      locationFlat == null &&
      rotationFlat == null &&
      velocityFlat == null &&
      angularVelocityFlat == null
    )
      return null;
    DesiredPhysics.startDesiredPhysics(builder);
    if (locationFlat != null) DesiredPhysics.addLocation(builder, locationFlat);
    if (rotationFlat != null) DesiredPhysics.addRotation(builder, rotationFlat);
    if (velocityFlat != null) DesiredPhysics.addVelocity(builder, velocityFlat);
    if (angularVelocityFlat != null)
      DesiredPhysics.addAngularVelocity(builder, angularVelocityFlat);
    return DesiredPhysics.endDesiredPhysics(builder);
  }
}

class BallState {
  physics: Physics;
  constructor(physics: Physics) {
    this.physics = physics;
  }
  convertToFlat(builder: flatbuffers.Builder) {
    let physicsFlat = this.physics ? this.physics.convertToFlat(builder) : null;
    if (physicsFlat == null) return null;
    else {
      DesiredBallState.startDesiredBallState(builder);
      DesiredBallState.addPhysics(builder, physicsFlat);
      return DesiredBallState.endDesiredBallState(builder);
    }
  }
}

class CarState {
  physics: Physics;
  boostAmount: number;
  jumped: boolean;
  doubleJumped: boolean;
  constructor(
    physics: Physics,
    boostAmount: number,
    jumped: boolean,
    doubleJumped: boolean
  ) {
    this.physics = physics;
    this.boostAmount = boostAmount;
    this.jumped = jumped;
    this.doubleJumped = doubleJumped;
  }
  convertToFlat(builder: flatbuffers.Builder) {
    let physicsFlat = this.physics ? this.physics.convertToFlat(builder) : null;
    DesiredCarState.startDesiredCarState(builder);
    if (physicsFlat != null) DesiredCarState.addPhysics(builder, physicsFlat);
    if (this.boostAmount != null)
      DesiredCarState.addBoostAmount(builder, this.boostAmount);
    if (this.jumped != null)
      DesiredCarState.addJumped(builder, Number(this.jumped));
    if (this.doubleJumped != null)
      DesiredCarState.addDoubleJumped(builder, Number(this.doubleJumped));
    return DesiredCarState.endDesiredCarState(builder);
  }
}

class BoostState {
  respawnTime: number;
  constructor(respawnTime: number) {
    this.respawnTime = respawnTime;
  }
  convertToFlat(builder: flatbuffers.Builder) {
    DesiredBoostState.startDesiredBoostState(builder);
    if (this.respawnTime != null)
      DesiredBoostState.addRespawnTime(builder, this.respawnTime);
    return DesiredBoostState.endDesiredBoostState(builder);
  }
}

class GameInfoState {
  worldGravityZ: number;
  gameSpeed: number;
  constructor(worldGravityZ: number, gameSpeed: number) {
    this.worldGravityZ = worldGravityZ;
    this.gameSpeed = gameSpeed;
  }
  convertToFlat(builder: flatbuffers.Builder) {
    DesiredGameInfoState.startDesiredGameInfoState(builder);
    if (this.worldGravityZ != null)
      DesiredGameInfoState.addWorldGravityZ(builder, this.worldGravityZ);
    if (this.gameSpeed != null)
      DesiredGameInfoState.addGameSpeed(builder, this.gameSpeed);
    return DesiredGameInfoState.endDesiredGameInfoState(builder);
  }
}

class GameState {
  ballState: BallState;
  carStates: (CarState | any)[];
  boostStates: (BoostState | any)[];
  gameInfoState: GameInfoState;
  constructor(
    ballState: BallState,
    carStates: (CarState | any)[],
    boostStates: (BoostState | any)[],
    gameInfoState: GameInfoState
  ) {
    this.ballState = ballState;
    this.carStates = carStates;
    this.boostStates = boostStates;
    this.gameInfoState = gameInfoState;
  }
  convertToFlat(builder: flatbuffers.Builder) {
    if (builder == null) builder = new flatbuffers.Builder(0);
    let ballStateFlat = this.ballState
      ? this.ballState.convertToFlat(builder)
      : null;
    let carStates: any = this.carStates ? [] : null;
    if (carStates != null) {
      for (let carState of this.carStates) {
        carStates.push(carState ? carState.convertToFlat(builder) : null);
      }
    }
    let carStatesFlat = carStates
      ? DesiredGameState.createCarStatesVector(builder, carStates)
      : null;
    let boostStates: any = this.boostStates ? [] : null;
    if (boostStates != null) {
      for (let boostState of this.boostStates) {
        boostStates.push(boostState ? boostState.convertToFlat(builder) : null);
      }
    }
    let boostStatesFlat = boostStates
      ? DesiredGameState.createBoostStatesVector(builder, boostStates)
      : null;
    let gameInfoStateFlat = this.gameInfoState
      ? this.gameInfoState.convertToFlat(builder)
      : null;

    DesiredGameState.startDesiredGameState(builder);
    if (ballStateFlat != null)
      DesiredGameState.addBallState(builder, ballStateFlat);
    if (carStatesFlat != null)
      DesiredGameState.addCarStates(builder, carStatesFlat);
    if (boostStatesFlat != null)
      DesiredGameState.addBoostStates(builder, boostStatesFlat);
    if (gameInfoStateFlat != null)
      DesiredGameState.addGameInfoState(builder, gameInfoStateFlat);
    return DesiredGameState.endDesiredGameState(builder);
  }
}

export {
  Vector3,
  Rotator,
  Physics,
  BallState,
  BoostState,
  GameInfoState,
  CarState,
  GameState,
};
