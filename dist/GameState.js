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
        this.x = x;
        this.y = y;
        this.z = z;
    }
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
        this.pitch = pitch;
        this.yaw = yaw;
        this.roll = roll;
    }
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
        this.location = location;
        this.rotation = rotation;
        this.velocity = velocity;
        this.angularVelocity = angularVelocity;
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2FtZVN0YXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL0dhbWVTdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMkpBQTJKOzs7QUFFM0osMkNBQTBDO0FBQzFDLDBEQUErQztBQUMvQyxJQUFNLElBQUksR0FBRyx1QkFBSyxDQUFDLElBQUksQ0FBQztBQUV0QixJQUFBLGNBQWMsR0FTWixJQUFJLGVBVFEsRUFDZCxjQUFjLEdBUVosSUFBSSxlQVJRLEVBQ2QsZ0JBQWdCLEdBT2QsSUFBSSxpQkFQVSxFQUNoQixlQUFlLEdBTWIsSUFBSSxnQkFOUyxFQUNmLGlCQUFpQixHQUtmLElBQUksa0JBTFcsRUFDakIsb0JBQW9CLEdBSWxCLElBQUkscUJBSmMsRUFDcEIsZ0JBQWdCLEdBR2QsSUFBSSxpQkFIVSxFQUNoQixLQUFLLEdBRUgsSUFBSSxNQUZELEVBQ0wsY0FBYyxHQUNaLElBQUksZUFEUSxDQUNQO0FBRVQ7SUFJRSxpQkFBWSxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVM7UUFDekMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUNELCtCQUFhLEdBQWIsVUFBYyxPQUE0QjtRQUN4QyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQ3BFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUNELHNDQUFvQixHQUFwQixVQUFxQixPQUE0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