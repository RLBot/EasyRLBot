"use strict";
// This file is copied from RLBotJS by SuperVK. It is translated into typescript and some minor changes were made to make it compatible with this codebase.
exports.__esModule = true;
exports.GameState = exports.CarState = exports.GameInfoState = exports.BoostState = exports.BallState = exports.Physics = exports.Rotator = exports.Vector3 = void 0;
var flatbuffers_1 = require("flatbuffers");
var rlbot_generated_1 = require("./flat/rlbot_generated");
var flat = rlbot_generated_1.rlbot.flat;
var RotatorPartial = flat.RotatorPartial, DesiredPhysics = flat.DesiredPhysics, DesiredBallState = flat.DesiredBallState, DesiredCarState = flat.DesiredCarState, DesiredBoostState = flat.DesiredBoostState, DesiredGameInfoState = flat.DesiredGameInfoState, DesiredGameState = flat.DesiredGameState, Float = flat.Float, Vector3Partial = flat.Vector3Partial;
var Vector3 = /** @class */ (function () {
    function Vector3(x, y, z) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        this.x = x;
        this.y = y;
        this.z = z;
    }
    Vector3.prototype.fromFlat = function (flat) {
        this.x = flat.x();
        this.y = flat.y();
        this.z = flat.z();
        return this;
    };
    Vector3.prototype.convertToFlat = function (builder) {
        if (this.x == null && this.y == null && this.z == null)
            return null;
        return flat.Vector3.createVector3(builder, this.x, this.y, this.z);
    };
    Vector3.prototype.convertToFlatPartial = function (builder) {
        if (this.x == null && this.y == null && this.z == null)
            return null;
        Vector3Partial.startVector3Partial(builder);
        if (this.x != null)
            Vector3Partial.addX(builder, Float.createFloat(builder, this.x));
        if (this.y != null)
            Vector3Partial.addY(builder, Float.createFloat(builder, this.y));
        if (this.z != null)
            Vector3Partial.addZ(builder, Float.createFloat(builder, this.z));
        return Vector3Partial.endVector3Partial(builder);
    };
    return Vector3;
}());
exports.Vector3 = Vector3;
var Rotator = /** @class */ (function () {
    function Rotator(pitch, yaw, roll) {
        if (pitch === void 0) { pitch = 0; }
        if (yaw === void 0) { yaw = 0; }
        if (roll === void 0) { roll = 0; }
        this.pitch = pitch;
        this.yaw = yaw;
        this.roll = roll;
    }
    Rotator.prototype.fromFlat = function (flat) {
        if (flat == null)
            return this;
        this.pitch = flat.pitch();
        this.yaw = flat.yaw();
        this.roll = flat.roll();
        return this;
    };
    Rotator.prototype.convertToFlat = function (builder) {
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
    };
    return Rotator;
}());
exports.Rotator = Rotator;
var Physics = /** @class */ (function () {
    function Physics(location, rotation, velocity, angularVelocity) {
        if (location === void 0) { location = new Vector3(); }
        if (rotation === void 0) { rotation = new Rotator(); }
        if (velocity === void 0) { velocity = new Vector3(); }
        if (angularVelocity === void 0) { angularVelocity = new Vector3(); }
        this.location = location;
        this.rotation = rotation;
        this.velocity = velocity;
        this.angularVelocity = angularVelocity;
    }
    Physics.prototype.fromFlat = function (flat) {
        this.location = new Vector3().fromFlat(flat.location());
        this.rotation = new Rotator().fromFlat(flat.rotation());
        this.velocity = new Vector3().fromFlat(flat.velocity());
        this.angularVelocity = new Vector3().fromFlat(flat.angularVelocity());
        return this;
    };
    Physics.prototype.convertToFlat = function (builder) {
        var locationFlat = this.location
            ? this.location.convertToFlatPartial(builder)
            : null;
        var rotationFlat = this.rotation
            ? this.rotation.convertToFlat(builder)
            : null;
        var velocityFlat = this.velocity
            ? this.velocity.convertToFlatPartial(builder)
            : null;
        var angularVelocityFlat = this.angularVelocity
            ? this.angularVelocity.convertToFlatPartial(builder)
            : null;
        if (locationFlat == null &&
            rotationFlat == null &&
            velocityFlat == null &&
            angularVelocityFlat == null)
            return null;
        DesiredPhysics.startDesiredPhysics(builder);
        if (locationFlat != null)
            DesiredPhysics.addLocation(builder, locationFlat);
        if (rotationFlat != null)
            DesiredPhysics.addRotation(builder, rotationFlat);
        if (velocityFlat != null)
            DesiredPhysics.addVelocity(builder, velocityFlat);
        if (angularVelocityFlat != null)
            DesiredPhysics.addAngularVelocity(builder, angularVelocityFlat);
        return DesiredPhysics.endDesiredPhysics(builder);
    };
    return Physics;
}());
exports.Physics = Physics;
var BallState = /** @class */ (function () {
    function BallState(physics) {
        this.physics = physics;
    }
    BallState.prototype.convertToFlat = function (builder) {
        var physicsFlat = this.physics ? this.physics.convertToFlat(builder) : null;
        if (physicsFlat == null)
            return null;
        else {
            DesiredBallState.startDesiredBallState(builder);
            DesiredBallState.addPhysics(builder, physicsFlat);
            return DesiredBallState.endDesiredBallState(builder);
        }
    };
    return BallState;
}());
exports.BallState = BallState;
var CarState = /** @class */ (function () {
    function CarState(physics, boostAmount, jumped, doubleJumped) {
        this.physics = physics;
        this.boostAmount = boostAmount;
        this.jumped = jumped;
        this.doubleJumped = doubleJumped;
    }
    CarState.prototype.convertToFlat = function (builder) {
        var physicsFlat = this.physics ? this.physics.convertToFlat(builder) : null;
        DesiredCarState.startDesiredCarState(builder);
        if (physicsFlat != null)
            DesiredCarState.addPhysics(builder, physicsFlat);
        if (this.boostAmount != null)
            DesiredCarState.addBoostAmount(builder, this.boostAmount);
        if (this.jumped != null)
            DesiredCarState.addJumped(builder, Number(this.jumped));
        if (this.doubleJumped != null)
            DesiredCarState.addDoubleJumped(builder, Number(this.doubleJumped));
        return DesiredCarState.endDesiredCarState(builder);
    };
    return CarState;
}());
exports.CarState = CarState;
var BoostState = /** @class */ (function () {
    function BoostState(respawnTime) {
        this.respawnTime = respawnTime;
    }
    BoostState.prototype.convertToFlat = function (builder) {
        DesiredBoostState.startDesiredBoostState(builder);
        if (this.respawnTime != null)
            DesiredBoostState.addRespawnTime(builder, this.respawnTime);
        return DesiredBoostState.endDesiredBoostState(builder);
    };
    return BoostState;
}());
exports.BoostState = BoostState;
var GameInfoState = /** @class */ (function () {
    function GameInfoState(worldGravityZ, gameSpeed) {
        this.worldGravityZ = worldGravityZ;
        this.gameSpeed = gameSpeed;
    }
    GameInfoState.prototype.convertToFlat = function (builder) {
        DesiredGameInfoState.startDesiredGameInfoState(builder);
        if (this.worldGravityZ != null)
            DesiredGameInfoState.addWorldGravityZ(builder, this.worldGravityZ);
        if (this.gameSpeed != null)
            DesiredGameInfoState.addGameSpeed(builder, this.gameSpeed);
        return DesiredGameInfoState.endDesiredGameInfoState(builder);
    };
    return GameInfoState;
}());
exports.GameInfoState = GameInfoState;
var GameState = /** @class */ (function () {
    function GameState(ballState, carStates, boostStates, gameInfoState) {
        this.ballState = ballState;
        this.carStates = carStates;
        this.boostStates = boostStates;
        this.gameInfoState = gameInfoState;
    }
    GameState.prototype.convertToFlat = function (builder) {
        if (builder == null)
            builder = new flatbuffers_1.flatbuffers.Builder(0);
        var ballStateFlat = this.ballState
            ? this.ballState.convertToFlat(builder)
            : null;
        var carStates = this.carStates ? [] : null;
        if (carStates != null) {
            for (var _i = 0, _a = this.carStates; _i < _a.length; _i++) {
                var carState = _a[_i];
                carStates.push(carState ? carState.convertToFlat(builder) : null);
            }
        }
        var carStatesFlat = carStates
            ? DesiredGameState.createCarStatesVector(builder, carStates)
            : null;
        var boostStates = this.boostStates ? [] : null;
        if (boostStates != null) {
            for (var _b = 0, _c = this.boostStates; _b < _c.length; _b++) {
                var boostState = _c[_b];
                boostStates.push(boostState ? boostState.convertToFlat(builder) : null);
            }
        }
        var boostStatesFlat = boostStates
            ? DesiredGameState.createBoostStatesVector(builder, boostStates)
            : null;
        var gameInfoStateFlat = this.gameInfoState
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
    };
    return GameState;
}());
exports.GameState = GameState;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2FtZVN0YXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL0dhbWVTdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMkpBQTJKOzs7QUFFM0osMkNBQTBDO0FBQzFDLDBEQUErQztBQUMvQyxJQUFNLElBQUksR0FBRyx1QkFBSyxDQUFDLElBQUksQ0FBQztBQUV0QixJQUFBLGNBQWMsR0FTWixJQUFJLGVBVFEsRUFDZCxjQUFjLEdBUVosSUFBSSxlQVJRLEVBQ2QsZ0JBQWdCLEdBT2QsSUFBSSxpQkFQVSxFQUNoQixlQUFlLEdBTWIsSUFBSSxnQkFOUyxFQUNmLGlCQUFpQixHQUtmLElBQUksa0JBTFcsRUFDakIsb0JBQW9CLEdBSWxCLElBQUkscUJBSmMsRUFDcEIsZ0JBQWdCLEdBR2QsSUFBSSxpQkFIVSxFQUNoQixLQUFLLEdBRUgsSUFBSSxNQUZELEVBQ0wsY0FBYyxHQUNaLElBQUksZUFEUSxDQUNQO0FBRVQ7SUFJRSxpQkFBWSxDQUFhLEVBQUUsQ0FBYSxFQUFFLENBQWE7UUFBM0Msa0JBQUEsRUFBQSxLQUFhO1FBQUUsa0JBQUEsRUFBQSxLQUFhO1FBQUUsa0JBQUEsRUFBQSxLQUFhO1FBQ3JELElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNiLENBQUM7SUFDRCwwQkFBUSxHQUFSLFVBQVMsSUFBUztRQUNoQixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNsQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDRCwrQkFBYSxHQUFiLFVBQWMsT0FB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