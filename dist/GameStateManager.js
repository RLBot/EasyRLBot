"use strict";
exports.__esModule = true;
exports.GameStateManager = void 0;
var rlbot_generated_1 = require("./flat/rlbot_generated");
var flatbuffers_1 = require("flatbuffers");
var GameStateManager = /** @class */ (function () {
    function GameStateManager(client) {
        this.gameState = null;
        this.client = client;
    }
    GameStateManager.prototype.get = function () {
        return this.gameState;
    };
    GameStateManager.prototype.set = function (newGameState) {
        this.gameState = newGameState;
        var controllerState = rlbot_generated_1.rlbot.flat.ControllerState;
        var playerInput = rlbot_generated_1.rlbot.flat.PlayerInput;
        var builder = new flatbuffers_1.flatbuffers.Builder(1024);
        this.client.ws.write();
    };
    return GameStateManager;
}());
exports.GameStateManager = GameStateManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2FtZVN0YXRlTWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9HYW1lU3RhdGVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLDBEQUErQztBQUMvQywyQ0FBMEM7QUFHMUM7SUFHRSwwQkFBWSxNQUFpQjtRQURyQixjQUFTLEdBQXFCLElBQUksQ0FBQztRQUV6QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRUQsOEJBQUcsR0FBSDtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsOEJBQUcsR0FBSCxVQUFJLFlBQXVCO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDO1FBQzlCLElBQUksZUFBZSxHQUFHLHVCQUFLLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUNqRCxJQUFJLFdBQVcsR0FBRyx1QkFBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFFekMsSUFBSSxPQUFPLEdBQUcsSUFBSSx5QkFBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBbEJELElBa0JDO0FBRVEsNENBQWdCIn0=