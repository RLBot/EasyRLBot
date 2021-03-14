# EasyRLBot

A RLBot implementation in javascript with Sockets.

## Information

These docs cover most of the functionality but if there is something not in the documentation you can contact me on discord for help swz#4419 (212103205448843265)

[GitHub](https://github.com/SWZ-github/EasyRLBot)

[NPM](https://npmjs.org/package/easyrlbot)

## Starting out

When making a bot you want to make a new class that is going to extend Client. This client handles communicating with RLBot using sockets. Then you wanna pass that Client into a new Manager. This Manager automaticly adds and removes bots when needed and passes the necesary arguments to the Client.

## Example

[SWZ-github/EasyRLBotExample](https://github.com/SWZ-github/EasyRLBotExample)

## Controlling the car

This code will drive the car forward. More details about the Controller object [here](#Controller)

```js
const { Client, Manager, Controller } = require("EasyRLBot");

class ExampleBot extends Client {
  constructor(...args) {
    super(...args); // Do not change this except if you know what you are doing.
  }
  getOutput(gameTickPacket, fieldInfo, ballPrediction) {
    let controller = new Controller(); // Create a new controller

    // Drive forward
    controller.throttle = 1;

    // Send controller to RLBot
    this.controller.sendInput(controller);
  }
}

let manager = new Manager(
  ExampleBot,
  3215 // This is the defualt port used by EasyRLBotExample
);
```

## Sending a quickchat

This code will spam Nice Shot! All of the quickchats are avaliable [here](#quickChats)

```js
const { Client, Manager, Controller, quickChats } = require("EasyRLBot");

class ExampleBot extends Client {
  constructor(...args) {
    super(...args); // Do not change this except if you know what you are doing.
  }
  getOutput(gameTickPacket, fieldInfo, ballPrediction) {
    this.sendQuickChat(
      quickChats.information.NiceShot, // The quickchat
      false // If the quickchat is team only
    );
  }
}

let manager = new Manager(
  ExampleBot,
  3215 // This is the defualt port used by EasyRLBotExample
);
```

## Rendering on screen

To make sure this works, enable rendering under the extra menu in the gui.

```js
const { Client, Manager, Color, Vector3 } = require("EasyRLBot");

class ExampleBot extends Client {
  constructor(...args) {
    super(...args); // Do not change this except if you know what you are doing.
  }
  getOutput(gameTickPacket, fieldInfo, ballPrediction) {
    this.renderer.beginRendering(); // Start rendering

    // Render a string in 2D space
    this.renderer.drawString2D(
      0, // X coordinate (0 being in the left)
      0, // Y coordinate (0 being in the top)
      5, // X scale
      5, // Y scale
      "Hello, world!", // Text
      new Color(255, 255, 255, 255) // White Color (ARGB)
    );

    // Render a 2D string at a 3D space position
    this.renderer.drawString3D(
      new Vector3(0, 0, 0), // New vector with coordinates (0 being in the center of the field)
      5, // X scale
      5, // Y scale
      "Hello, 3D world!", // Text
      new Color(255, 255, 255, 255) // White Color (ARGB)
    );

    let carLocation = gameTickPacket.players[this.botIndex].physics.location;

    // Draw a line in 3D space
    this.renderer.drawLine3D(
      new Vector3(0, 0, 0), // Start vector with coordinates (0 being in the center of the field)
      new Vector3(carLocation.x, carLocation.y, carLocation.z), // End vector with coordinates of the car location
      new Color(255, 255, 255, 255) // White Color (ARGB)
    );

    // Render a 2D rectangle
    this.renderer.drawRect2D(
      0, // X coordinate (0 being in the left)
      0, // Y coordinate (0 being in the top)
      100, // Width
      100, // Height
      new Color(255, 255, 255, 255) // White Color (ARGB)
    );

    let ballLocation = gameTickPacket.ball.physics.location;

    // Render a 2D rectangle at a 3D space position
    this.renderer.drawRect3D(
      new Vector3(ballLocation.x, ballLocation.y, ballLocation.z), // Vector with coordinates (0 being in the center of the field)
      185.5, // Width of the ball
      185.5, // Height of the ball
      new Color(255, 255, 255, 255), // White Color (ARGB)
      false // If the rectangle should be centered
    );

    this.renderer.endRendering(); // Stop taking inputs and send data to RLBot
  }
}
let manager = new Manager(
  ExampleBot,
  3215 // This is the defualt port used by EasyRLBotExample
);
```

## Game data objects

This part is from [SuperVKs package](https://github.com/SuperVK/RLBotJS#game-data-objects) but still applies to this package

### Controller

```js
{
  throttle: 0, /// -1 for fuzll reverse, 1 for full forward
  steer: 0, /// -1 for full left, 1 for full right
  pitch: 0, /// -1 for nose down, 1 for nose up
  yaw: 0, /// -1 for full left, 1 for full right
  roll: 0, /// -1 for roll left, 1 for roll right
  jump: false, /// true if you want to press the jump button
  boost: false, /// true if you want to press the boost button
  handbrake: false, /// true if you want to press the handbrake button
  useItem: false, /// true if you want to use a rumble item
}
```

- `throttle`: Default is `0`. To go forward, change this to `1`. To go backwards, change this to `-1`. Setting this to `0` will stop the throttle. **NOTE**: Setting this to `0` does not slow the car down very well. If you want to brake, change the throttle to the opposite from what it was. E.g. when this is set to `1`, set this to `-1` until the bot has slowed down.
- `steer`: Default is `0`. To steer right, change this to `1`. To steer left, change this to `-1`. Setting this to `0` will steer forwards.
- `pitch`: Default is `0`. To tip the bot forwards, change this to `-1`. To tip the bot backwards, change this to `1`. **NOTE**: Changing this is a way to dodge.
- `roll`: Default is `0`. To roll clockwise(relative to the back of the car), change this to `-1`. To roll anti-clockwise(relative to the back of the car), change this to `1`. **NOTE**: Changing this is a way to dodge.
- `yaw`: Default is `0`. To rotate the bot clockwise(relative to the top of the car), change this to `-1`. To rotate the bot clockwise(relative to the top of the car), change this to `1`. **NOTE**: Changing this is a way to dodge.
- `boost`: Default is `false`. To use boost, change this to `true`. To not use boost, change this to `false`.
- `jump`: Default is `false`. To jump, change this to `true`. To not jump, change this to `false`
- `handbrake`: Default is `false`. To powerslide, change this to `true`. To not powerslide, change this to `false`.
- `useItem`: Default is `false`. To use a rumble item, change this to `true`. To not use a rumble item, change this to `false`.

### GameTickPacket

```js
{
  "players": [
    {
      "physics": {
        "location": {
          "x": -256,
          "y": -3840,
          "z": 17.010000228881836
        },
        "rotation": {
          "pitch": -0.009587380103766918,
          "yaw": 1.5707963705062866,
          "roll": 0
        },
        "velocity": {
          "x": 0,
          "y": 0.010999999940395355,
          "z": 0.210999995470047
        },
        "angularVelocity": {
          "x": -0.0006099999882280827,
          "y": 0,
          "z": 0
        }
      },
      "scoreInfo": {
        "score": 0,
        "goals": 0,
        "ownGoals": 0,
        "assists": 0,
        "saves": 0,
        "shots": 0,
        "demolitions": 0
      },
      "isDemolished": false,
      "hasWheelContact": true,
      "isSupersonic": false,
      "isBot": true,
      "jumped": false,
      "doubleJumped": false,
      "name": "Bot",
      "boost": 34,
      "team": 0
    },
    [...] // Order based on index
  ],
  "boostPadStates": [
    {
      "isActive": true,
      "timer": 0
    },
    {
      "isActive": true,
      "timer": 0
    },
    [...] // Order can be found at the useful game values
  ],
  "ball": {
    "physics": {
      "location": {
        "x": -863.6399536132812,
        "y": 281.4499816894531,
        "z": 93.13999938964844
      },
      "rotation": {
        "pitch": 0.18158496916294098,
        "yaw": 0.04918326064944267,
        "roll": 0.06778277456760406
      },
      "velocity": {
        "x": -567.2109375,
        "y": 179.26100158691406,
        "z": 0
      },
      "angularVelocity": {
        "x": -1.809209942817688,
        "y": -5.720609664916992,
        "z": 0.011809999123215675
      }
    },
    "latestTouch": {
      "playerName": "SuperVK",
      "gameSeconds": 405.3416748046875,
      "location": {
        "x": -193.3159637451172,
        "y": 64.18572998046875,
        "z": 92.49647521972656
      },
      "normal": {
        "x": -0.9340062141418457,
        "y": 0.35719090700149536,
        "z": 0.006852129008620977
      },
      "team": 1,
      "playerIndex": 2
    },
    "dropShotInfo": {
      "absorbedForce": 0,
      "damageIndex": 0,
      "forceAccumRecent": 0
    }
  },
  "gameInfo": {
    "secondsElapsed": 406.2083435058594,
    "gameTimeRemaining": -396.08331298828125,
    "isOvertime": false,
    "isRoundActive": true,
    "isKickoffPause": false,
    "isMatchEnded": false,
    "worldGravityZ": -650,
    "gameSpeed": 0
  },
  "tileInformation": [], //for Dropshot
  "teams": [
    {
      "teamIndex": 0,
      "score": 0
    },
    {
      "teamIndex": 1,
      "score": 0
    }
  ]
}
```

### BallPrediction

```js
{
    "slices": [
        {
            "gameSeconds": 406.2083435058594,
            "physics": {
                "location": {
                    "x": -863.6399536132812,
                    "y": 281.4499816894531,
                    "z": 93.13999938964844
                },
                "rotation": null, // Ball prediction doesn't have rotation
                "velocity": {
                    "x": -567.2109375,
                    "y": 179.26100158691406,
                    "z": 0
                },
                "angularVelocity": {
                    "x": -1.809209942817688,
                    "y": -5.720609664916992,
                    "z": 0.011809999123215675
                }
            }
        },
        [...] // One slice represents one frame
    ]
}
```

### quickChats

- `information`
  - `IGotIt`: `0` - I got it!
  - `NeedBoost`: `1` - Need boost!
  - `TakeTheShot`: `2` - Take the shot!
  - `Defending`: `3` - Defending!
  - `GoForIt`: `4` - Gor for it!
  - `Centering`: `5` - Centering!
  - `AllYours`: `6` - All yours!
  - `InPosition`: `7` - In position!
  - `Incoming`: `8` - Incoming!
  - `NiceShot`: `9` - Nice shot!
  - `GreatPass`: `10` - Great pass!
  - `Thanks`: `11` - Thanks!
  - `WhatASave`: `12` - What a save!
  - `NiceOne`: `13` - Nice one!
  - `WhatAPlay`: `14` - What a play!
  - `GreatClear`: `15` - Great clear!
  - `NiceBlock`: `16` - Nice block!
- `compliments`
  - `NiceShot`: `9` - Nice shot!
  - `GreatPass`: `10` - Great pass!
  - `Thanks`: `11` - Thanks!
  - `WhatASave`: `12` - What a save!
  - `NiceOne`: `13` - Nice one!
  - `WhatAPlay`: `14` - What a play!
  - `GreatClear`: `15` - Great clear!
  - `NiceBlock`: `16` - Nice block!
- `reactions`
  - `OMG`: `17` - OMG!
  - `Noooo`: `18` - Noooo!
  - `Wow`: `19` - Wow!
  - `CloseOne`: `20` - Close one.
  - `NoWay`: `21` - No way!
  - `HolyCow`: `22` - Holy cow!
  - `Whew`: `23` - Whew.
  - `Siiiick`: `24` - Siiiick.
  - `Calculated`: `25` - Calculated.
  - `Savage`: `26` - Savage!
  - `Okay`: `27` - Okay.
- `apologies`
  - `Cursing`: `28` - $#@%!
  - `NoProblem`: `29` - No problem!
  - `Whoops`: `30` - Whoops.
  - `Sorry`: `31` - Sorry!
  - `MyBad`: `32` - My bad.
  - `Oops`: `33` - Oops.
  - `MyFault`: `34` - My fault.
- `postGame`
  - `Gg`: `35` - GG
  - `WellPlayed`: `36` - Well played.
  - `ThatWasFun`: `37` - That was fun!
  - `Rematch`: `38` - Rematch!
  - `OneMoreGame`: `39` - One more game!
  - `WhatAGame`: `40` - What a game!
  - `NiceMoves`: `41` - Nice moves!
  - `EverybodyDance`: `42` - Everybody dance!
- `custom`
  - `Toxic_WasteCPU`: `44` - Waste of CPU cycles
  - `Toxic_GitGut`: `45` - Git gud\*
  - `Toxic_DeAlloc`: `46` - De-Allocate Yourself
  - `Toxic_404NoSkill`: `47` - 404: Your skill not found
  - `Toxic_CatchVirus`: `48` - Get a virus
  - `Useful_Passing`: `49` - Passing!
  - `Useful_Faking`: `50` - Faking!
  - `Useful_Demoing`: `51` - Demoing!
  - `Useful_Bumping`: `52` - BOOPING
  - `Compliments_TinyChances`: `53` - The chances of that was 47525 to 1\*
  - `Compliments_SkillLevel`: `54` - Who upped your skill level?
  - `Compliments_proud`: `55` - Your programmer should be proud
  - `Compliments_GC`: `56` - You're the GC of Bots
  - `Compliments_Pro`: `57` - Are you \<Insert Pro\>Bot? \*
