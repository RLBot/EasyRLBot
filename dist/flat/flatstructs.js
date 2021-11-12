"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
exports.__esModule = true;
exports.QuickChatSelection = exports.QuickChat = exports.LoadoutPaint = exports.PlayerLoadout = exports.PlayerClass = exports.RespawnTimeOption = exports.DemolishOption = exports.GravityOption = exports.BoostStrengthOption = exports.RumbleOption = exports.BoostOption = exports.BallBouncinessOption = exports.BallSizeOption = exports.BallWeightOption = exports.BallTypeOption = exports.BallMaxSpeedOption = exports.GameSpeedOption = exports.SeriesLengthOption = exports.OvertimeOption = exports.MaxScore = exports.MatchLength = exports.ExistingMatchBehavior = exports.MutatorSettings = exports.GameMap = exports.GameMode = exports.PlayerConfiguration = exports.MatchSettings = exports.FieldInfo = exports.GoalInfo = exports.BoostPad = exports.BallPrediction = exports.GameTickPacket = exports.TeamInfo = exports.BoostPadState = exports.PlayerInfo = exports.GameInfo = exports.BallInfo = exports.Touch = void 0;
// This file is copied from RLBotJS by SuperVK. It is translated into typescript and some big changes were made to make it compatible with this codebase.
__exportStar(require("../GameState"), exports);
var GameState_1 = require("../GameState");
// These are now imported from GameState to not duplicate classes
// class Vector3 {
//   x: any;
//   y: any;
//   z: any;
//   constructor(flat: any) {
//     this.x = flat.x();
//     this.y = flat.y();
//     this.z = flat.z();
//   }
// }
// class Rotator {
//   pitch: any;
//   yaw: any;
//   roll: any;
//   constructor(flat: any) {
//     this.pitch = flat.pitch();
//     this.yaw = flat.yaw();
//     this.roll = flat.roll();
//   }
// }
// class Physics {
//   location: Vector3;
//   rotation: any;
//   velocity: any;
//   angularVelocity: any;
//   constructor(flat: any) {
//     this.location = new Vector3(flat.location());
//     this.rotation = flat.rotation() ? new Rotator(flat.rotation()) : null;
//     this.velocity = new Vector3(flat.velocity());
//     this.angularVelocity = new Vector3(flat.angularVelocity());
//   }
// }
var Touch = /** @class */ (function () {
    function Touch(flat) {
        this.playerName = flat.playerName();
        this.gameSeconds = flat.gameSeconds();
        this.location = new GameState_1.Vector3().fromFlat(flat.location());
        this.normal = new GameState_1.Vector3().fromFlat(flat.normal());
        this.team = flat.team();
        this.playerIndex = flat.playerIndex();
    }
    return Touch;
}());
exports.Touch = Touch;
var DropShotBallInfo = /** @class */ (function () {
    function DropShotBallInfo(flat) {
        this.absorbedForce = flat.absorbedForce();
        this.damageIndex = flat.damageIndex();
        this.forceAccumRecent = flat.forceAccumRecent();
    }
    return DropShotBallInfo;
}());
var BallInfo = /** @class */ (function () {
    function BallInfo(flat) {
        this.physics = new GameState_1.Physics().fromFlat(flat.physics());
        this.latestTouch = flat.latestTouch()
            ? new Touch(flat.latestTouch())
            : null;
        this.dropShotInfo = new DropShotBallInfo(flat.dropShotInfo());
    }
    return BallInfo;
}());
exports.BallInfo = BallInfo;
var GameInfo = /** @class */ (function () {
    function GameInfo(flat) {
        this.secondsElapsed = flat.secondsElapsed();
        this.gameTimeRemaining = flat.gameTimeRemaining();
        this.isOvertime = flat.isOvertime();
        this.isRoundActive = flat.isRoundActive();
        this.isKickoffPause = flat.isKickoffPause();
        this.isMatchEnded = flat.isMatchEnded();
        this.worldGravityZ = flat.worldGravityZ();
        this.gameSpeed = flat.gameSpeed();
        this.frameNum = flat.frameNum();
    }
    return GameInfo;
}());
exports.GameInfo = GameInfo;
var ScoreInfo = /** @class */ (function () {
    function ScoreInfo(flat) {
        this.score = flat.score();
        this.goals = flat.goals();
        this.ownGoals = flat.ownGoals();
        this.assists = flat.assists();
        this.saves = flat.saves();
        this.shots = flat.shots();
        this.demolitions = flat.demolitions();
    }
    return ScoreInfo;
}());
var PlayerInfo = /** @class */ (function () {
    function PlayerInfo(flat) {
        this.physics = new GameState_1.Physics().fromFlat(flat.physics());
        this.scoreInfo = new ScoreInfo(flat.scoreInfo());
        this.isDemolished = flat.isDemolished();
        this.hasWheelContact = flat.hasWheelContact();
        this.isSupersonic = flat.isSupersonic();
        this.isBot = flat.isBot();
        this.jumped = flat.jumped();
        this.doubleJumped = flat.doubleJumped();
        this.name = flat.name();
        this.boost = flat.boost();
        this.team = flat.team();
    }
    return PlayerInfo;
}());
exports.PlayerInfo = PlayerInfo;
var BoostPadState = /** @class */ (function () {
    function BoostPadState(flat) {
        this.isActive = flat.isActive();
        this.timer = flat.timer();
    }
    return BoostPadState;
}());
exports.BoostPadState = BoostPadState;
var TeamInfo = /** @class */ (function () {
    function TeamInfo(flat) {
        this.teamIndex = flat.teamIndex();
        this.score = flat.score();
    }
    return TeamInfo;
}());
exports.TeamInfo = TeamInfo;
var DropshotTile = /** @class */ (function () {
    function DropshotTile(flat) {
        this.tileState = flat.tileState();
    }
    return DropshotTile;
}());
var GameTickPacket = /** @class */ (function () {
    function GameTickPacket(flat) {
        this.players = [];
        for (var p = 0; p < flat.playersLength(); p++) {
            this.players.push(new PlayerInfo(flat.players(p)));
        }
        this.boostPadStates = [];
        for (var b = 0; b < flat.boostPadStatesLength(); b++) {
            this.boostPadStates.push(new BoostPadState(flat.boostPadStates(b)));
        }
        this.ball = flat.ball() ? new BallInfo(flat.ball()) : null;
        this.gameInfo = flat.gameInfo()
            ? new GameInfo(flat.gameInfo(flat.gameInfo()))
            : null;
        this.tileInformation = [];
        for (var t = 0; t < flat.tileInformationLength(); t++) {
            this.tileInformation.push(new DropshotTile(flat.tileInformation(t)));
        }
        this.teams = [];
        for (var t = 0; t < flat.teamsLength(); t++) {
            this.teams.push(new TeamInfo(flat.teams(t)));
        }
    }
    return GameTickPacket;
}());
exports.GameTickPacket = GameTickPacket;
var PredictionSlice = /** @class */ (function () {
    function PredictionSlice(flat) {
        this.gameSeconds = flat.gameSeconds();
        this.physics = new GameState_1.Physics().fromFlat(flat.physics());
    }
    return PredictionSlice;
}());
var BallPrediction = /** @class */ (function () {
    function BallPrediction(flat) {
        this.slices = [];
        for (var s = 0; s < flat.slicesLength(); s++) {
            this.slices.push(new PredictionSlice(flat.slices(s)));
        }
    }
    return BallPrediction;
}());
exports.BallPrediction = BallPrediction;
var BoostPad = /** @class */ (function () {
    function BoostPad(flat) {
        this.location = new GameState_1.Vector3().fromFlat(flat.location());
        this.isFullBoost = flat.isFullBoost();
    }
    return BoostPad;
}());
exports.BoostPad = BoostPad;
var GoalInfo = /** @class */ (function () {
    function GoalInfo(flat) {
        this.teamNum = flat.teamNum();
        this.location = new GameState_1.Vector3().fromFlat(flat.location());
        this.direction = new GameState_1.Vector3().fromFlat(flat.direction());
    }
    return GoalInfo;
}());
exports.GoalInfo = GoalInfo;
var FieldInfo = /** @class */ (function () {
    function FieldInfo(flat) {
        this.boostPads = [];
        for (var b = 0; b < flat.boostPadsLength(); b++) {
            this.boostPads.push(new BoostPad(flat.boostPads(b)));
        }
        this.goals = [];
        for (var g = 0; g < flat.goalsLength(); g++) {
            this.goals.push(new GoalInfo(flat.goals(g)));
        }
    }
    return FieldInfo;
}());
exports.FieldInfo = FieldInfo;
var RLBotPlayer = /** @class */ (function () {
    function RLBotPlayer() {
    }
    return RLBotPlayer;
}());
var HumanPlayer = /** @class */ (function () {
    function HumanPlayer() {
    }
    return HumanPlayer;
}());
var PsyonixBotPlayer = /** @class */ (function () {
    function PsyonixBotPlayer(flat) {
        this.botSkill = flat.botSkill();
    }
    return PsyonixBotPlayer;
}());
var PartyMemberBotPlayer = /** @class */ (function () {
    function PartyMemberBotPlayer() {
    }
    return PartyMemberBotPlayer;
}());
var PlayerClass = /** @class */ (function (_super) {
    __extends(PlayerClass, _super);
    function PlayerClass(flat) {
        return _super.call(this, flat) || this;
    }
    return PlayerClass;
}(PsyonixBotPlayer));
exports.PlayerClass = PlayerClass;
var LoadoutPaint = /** @class */ (function () {
    function LoadoutPaint(flat) {
        this.carPaintId = flat.carPaintId();
        this.decalPaintId = flat.decalPaintId();
        this.wheelsPaintId = flat.wheelsPaintId();
        this.boostPaintId = flat.boostPaintId();
        this.antennaPaintId = flat.antennaPaintId();
        this.hatPaintId = flat.hatPaintId();
        this.trailsPaintId = flat.trailsPaintId();
        this.goalExplosionPaintId = flat.goalExplosionPaintId();
    }
    return LoadoutPaint;
}());
exports.LoadoutPaint = LoadoutPaint;
var Color = /** @class */ (function () {
    function Color(flat) {
        this.a = flat.a();
        this.r = flat.b();
        (this.g = flat.g()), (this.b = flat.b());
    }
    return Color;
}());
var PlayerLoadout = /** @class */ (function () {
    function PlayerLoadout(flat) {
        this.teamColorId = flat.teamColorId();
        this.customColorId = flat.customColorId();
        this.carId = flat.carId();
        this.decalId = flat.decalId();
        this.wheelsId = flat.wheelsId();
        this.boostId = flat.boostId();
        this.antennaId = flat.antennaId();
        this.hatId = flat.hatId();
        this.paintFinishId = flat.paintFinishedId();
        this.customFinishId = flat.customFinishId();
        this.engineAudioId = flat.engineAudioId();
        this.trailsId = flat.trailsId();
        this.goalExplosionId = flat.goalExplosionId();
        this.loadoutPaint = new LoadoutPaint(flat.loadoutPaint());
        this.primaryColorLookup = new Color(flat.primaryColorLookup());
        this.secondaryColorLookup = new Color(flat.secondaryColorLookup());
    }
    return PlayerLoadout;
}());
exports.PlayerLoadout = PlayerLoadout;
var PlayerConfiguration = /** @class */ (function () {
    function PlayerConfiguration(flat) {
        this.variety = new PlayerClass(flat.variety());
        this.name = flat.name();
        this.team = flat.team();
        this.loadout = new PlayerLoadout(flat.loadout());
        this.spawnId = flat.spawnId();
    }
    return PlayerConfiguration;
}());
exports.PlayerConfiguration = PlayerConfiguration;
var GameMode;
(function (GameMode) {
    GameMode[GameMode["Soccer"] = 0] = "Soccer";
    GameMode[GameMode["Hoops"] = 1] = "Hoops";
    GameMode[GameMode["Dropshot"] = 2] = "Dropshot";
    GameMode[GameMode["Hockey"] = 3] = "Hockey";
    GameMode[GameMode["Rumble"] = 4] = "Rumble";
    GameMode[GameMode["Heatseeker"] = 5] = "Heatseeker";
})(GameMode || (GameMode = {}));
exports.GameMode = GameMode;
var GameMap;
(function (GameMap) {
    GameMap[GameMap["DFHStadium"] = 0] = "DFHStadium";
    GameMap[GameMap["Mannfield"] = 1] = "Mannfield";
    GameMap[GameMap["ChampionsField"] = 2] = "ChampionsField";
    GameMap[GameMap["UrbanCentral"] = 3] = "UrbanCentral";
    GameMap[GameMap["BeckwithPark"] = 4] = "BeckwithPark";
    GameMap[GameMap["UtopiaColiseum"] = 5] = "UtopiaColiseum";
    GameMap[GameMap["Wasteland"] = 6] = "Wasteland";
    GameMap[GameMap["NeoTokyo"] = 7] = "NeoTokyo";
    GameMap[GameMap["AquaDome"] = 8] = "AquaDome";
    GameMap[GameMap["StarbaseArc"] = 9] = "StarbaseArc";
    GameMap[GameMap["Farmstead"] = 10] = "Farmstead";
    GameMap[GameMap["SaltyShores"] = 11] = "SaltyShores";
    GameMap[GameMap["DFHStadium_Stormy"] = 12] = "DFHStadium_Stormy";
    GameMap[GameMap["DFHStadium_Day"] = 13] = "DFHStadium_Day";
    GameMap[GameMap["Mannfield_Stormy"] = 14] = "Mannfield_Stormy";
    GameMap[GameMap["Mannfield_Night"] = 15] = "Mannfield_Night";
    GameMap[GameMap["ChampionsField_Day"] = 16] = "ChampionsField_Day";
    GameMap[GameMap["BeckwithPark_Stormy"] = 17] = "BeckwithPark_Stormy";
    GameMap[GameMap["BeckwithPark_Midnight"] = 18] = "BeckwithPark_Midnight";
    GameMap[GameMap["UrbanCentral_Night"] = 19] = "UrbanCentral_Night";
    GameMap[GameMap["UrbanCentral_Dawn"] = 20] = "UrbanCentral_Dawn";
    GameMap[GameMap["UtopiaColiseum_Dusk"] = 21] = "UtopiaColiseum_Dusk";
    GameMap[GameMap["DFHStadium_Snowy"] = 22] = "DFHStadium_Snowy";
    GameMap[GameMap["Mannfield_Snowy"] = 23] = "Mannfield_Snowy";
    GameMap[GameMap["UtopiaColiseum_Snowy"] = 24] = "UtopiaColiseum_Snowy";
    GameMap[GameMap["Badlands"] = 25] = "Badlands";
    GameMap[GameMap["Badlands_Night"] = 26] = "Badlands_Night";
    GameMap[GameMap["TokyoUnderpass"] = 27] = "TokyoUnderpass";
    GameMap[GameMap["Arctagon"] = 28] = "Arctagon";
    GameMap[GameMap["Pillars"] = 29] = "Pillars";
    GameMap[GameMap["Cosmic"] = 30] = "Cosmic";
    GameMap[GameMap["DoubleGoal"] = 31] = "DoubleGoal";
    GameMap[GameMap["Octagon"] = 32] = "Octagon";
    GameMap[GameMap["Underpass"] = 33] = "Underpass";
    GameMap[GameMap["UtopiaRetro"] = 34] = "UtopiaRetro";
    GameMap[GameMap["Hoops_DunkHouse"] = 35] = "Hoops_DunkHouse";
    GameMap[GameMap["DropShot_Core707"] = 36] = "DropShot_Core707";
    GameMap[GameMap["ThrowbackStadium"] = 37] = "ThrowbackStadium";
    GameMap[GameMap["ForbiddenTemple"] = 38] = "ForbiddenTemple";
    GameMap[GameMap["RivalsArena"] = 39] = "RivalsArena";
    GameMap[GameMap["Farmstead_Night"] = 40] = "Farmstead_Night";
    GameMap[GameMap["SaltyShores_Night"] = 41] = "SaltyShores_Night";
})(GameMap || (GameMap = {}));
exports.GameMap = GameMap;
var MatchLength;
(function (MatchLength) {
    MatchLength[MatchLength["Five_Minutes"] = 0] = "Five_Minutes";
    MatchLength[MatchLength["Ten_Minutes"] = 1] = "Ten_Minutes";
    MatchLength[MatchLength["Twenty_Minutes"] = 2] = "Twenty_Minutes";
    MatchLength[MatchLength["Unlimited"] = 3] = "Unlimited";
})(MatchLength || (MatchLength = {}));
exports.MatchLength = MatchLength;
var MaxScore;
(function (MaxScore) {
    MaxScore[MaxScore["Unlimited"] = 0] = "Unlimited";
    MaxScore[MaxScore["One_Goal"] = 1] = "One_Goal";
    MaxScore[MaxScore["Three_Goals"] = 2] = "Three_Goals";
    MaxScore[MaxScore["Five_Goals"] = 3] = "Five_Goals";
})(MaxScore || (MaxScore = {}));
exports.MaxScore = MaxScore;
var OvertimeOption;
(function (OvertimeOption) {
    OvertimeOption[OvertimeOption["Unlimited"] = 0] = "Unlimited";
    OvertimeOption[OvertimeOption["Five_Max_First_Score"] = 1] = "Five_Max_First_Score";
    OvertimeOption[OvertimeOption["Five_Max_Random_Team"] = 2] = "Five_Max_Random_Team";
})(OvertimeOption || (OvertimeOption = {}));
exports.OvertimeOption = OvertimeOption;
var SeriesLengthOption;
(function (SeriesLengthOption) {
    SeriesLengthOption[SeriesLengthOption["Unlimited"] = 0] = "Unlimited";
    SeriesLengthOption[SeriesLengthOption["Three_Games"] = 1] = "Three_Games";
    SeriesLengthOption[SeriesLengthOption["Five_Games"] = 2] = "Five_Games";
    SeriesLengthOption[SeriesLengthOption["Seven_Games"] = 3] = "Seven_Games";
})(SeriesLengthOption || (SeriesLengthOption = {}));
exports.SeriesLengthOption = SeriesLengthOption;
var GameSpeedOption;
(function (GameSpeedOption) {
    GameSpeedOption[GameSpeedOption["Default"] = 0] = "Default";
    GameSpeedOption[GameSpeedOption["Slo_Mo"] = 1] = "Slo_Mo";
    GameSpeedOption[GameSpeedOption["Time_Warp"] = 2] = "Time_Warp";
})(GameSpeedOption || (GameSpeedOption = {}));
exports.GameSpeedOption = GameSpeedOption;
var BallMaxSpeedOption;
(function (BallMaxSpeedOption) {
    BallMaxSpeedOption[BallMaxSpeedOption["Default"] = 0] = "Default";
    BallMaxSpeedOption[BallMaxSpeedOption["Slow"] = 1] = "Slow";
    BallMaxSpeedOption[BallMaxSpeedOption["Fast"] = 2] = "Fast";
    BallMaxSpeedOption[BallMaxSpeedOption["Super_Fast"] = 3] = "Super_Fast";
})(BallMaxSpeedOption || (BallMaxSpeedOption = {}));
exports.BallMaxSpeedOption = BallMaxSpeedOption;
var BallTypeOption;
(function (BallTypeOption) {
    BallTypeOption[BallTypeOption["Default"] = 0] = "Default";
    BallTypeOption[BallTypeOption["Cube"] = 1] = "Cube";
    BallTypeOption[BallTypeOption["Puck"] = 2] = "Puck";
    BallTypeOption[BallTypeOption["Basketball"] = 3] = "Basketball";
})(BallTypeOption || (BallTypeOption = {}));
exports.BallTypeOption = BallTypeOption;
var BallWeightOption;
(function (BallWeightOption) {
    BallWeightOption[BallWeightOption["Default"] = 0] = "Default";
    BallWeightOption[BallWeightOption["Light"] = 1] = "Light";
    BallWeightOption[BallWeightOption["Heavy"] = 2] = "Heavy";
    BallWeightOption[BallWeightOption["Super_Light"] = 3] = "Super_Light";
})(BallWeightOption || (BallWeightOption = {}));
exports.BallWeightOption = BallWeightOption;
var BallSizeOption;
(function (BallSizeOption) {
    BallSizeOption[BallSizeOption["Default"] = 0] = "Default";
    BallSizeOption[BallSizeOption["Small"] = 1] = "Small";
    BallSizeOption[BallSizeOption["Large"] = 2] = "Large";
    BallSizeOption[BallSizeOption["Gigantic"] = 3] = "Gigantic";
})(BallSizeOption || (BallSizeOption = {}));
exports.BallSizeOption = BallSizeOption;
var BallBouncinessOption;
(function (BallBouncinessOption) {
    BallBouncinessOption[BallBouncinessOption["Default"] = 0] = "Default";
    BallBouncinessOption[BallBouncinessOption["Low"] = 1] = "Low";
    BallBouncinessOption[BallBouncinessOption["High"] = 2] = "High";
    BallBouncinessOption[BallBouncinessOption["Super_High"] = 3] = "Super_High";
})(BallBouncinessOption || (BallBouncinessOption = {}));
exports.BallBouncinessOption = BallBouncinessOption;
var BoostOption;
(function (BoostOption) {
    BoostOption[BoostOption["Normal_Boost"] = 0] = "Normal_Boost";
    BoostOption[BoostOption["Unlimited_Boost"] = 1] = "Unlimited_Boost";
    BoostOption[BoostOption["Slow_Recharge"] = 2] = "Slow_Recharge";
    BoostOption[BoostOption["Rapid_Recharge"] = 3] = "Rapid_Recharge";
    BoostOption[BoostOption["No_Boost"] = 4] = "No_Boost";
})(BoostOption || (BoostOption = {}));
exports.BoostOption = BoostOption;
var RumbleOption;
(function (RumbleOption) {
    RumbleOption[RumbleOption["No_Rumble"] = 0] = "No_Rumble";
    RumbleOption[RumbleOption["Default"] = 1] = "Default";
    RumbleOption[RumbleOption["Slow"] = 2] = "Slow";
    RumbleOption[RumbleOption["Civilized"] = 3] = "Civilized";
    RumbleOption[RumbleOption["Destruction_Derby"] = 4] = "Destruction_Derby";
    RumbleOption[RumbleOption["Spring_Loaded"] = 5] = "Spring_Loaded";
    RumbleOption[RumbleOption["Spikes_Only"] = 6] = "Spikes_Only";
    RumbleOption[RumbleOption["Spike_Rush"] = 7] = "Spike_Rush";
})(RumbleOption || (RumbleOption = {}));
exports.RumbleOption = RumbleOption;
var BoostStrengthOption;
(function (BoostStrengthOption) {
    BoostStrengthOption[BoostStrengthOption["One"] = 0] = "One";
    BoostStrengthOption[BoostStrengthOption["OneAndAHalf"] = 1] = "OneAndAHalf";
    BoostStrengthOption[BoostStrengthOption["Two"] = 2] = "Two";
    BoostStrengthOption[BoostStrengthOption["Ten"] = 3] = "Ten";
})(BoostStrengthOption || (BoostStrengthOption = {}));
exports.BoostStrengthOption = BoostStrengthOption;
var GravityOption;
(function (GravityOption) {
    GravityOption[GravityOption["Default"] = 0] = "Default";
    GravityOption[GravityOption["Low"] = 1] = "Low";
    GravityOption[GravityOption["High"] = 2] = "High";
    GravityOption[GravityOption["Super_High"] = 3] = "Super_High";
})(GravityOption || (GravityOption = {}));
exports.GravityOption = GravityOption;
var DemolishOption;
(function (DemolishOption) {
    DemolishOption[DemolishOption["Default"] = 0] = "Default";
    DemolishOption[DemolishOption["Disabled"] = 1] = "Disabled";
    DemolishOption[DemolishOption["Friendly_Fire"] = 2] = "Friendly_Fire";
    DemolishOption[DemolishOption["On_Contact"] = 3] = "On_Contact";
    DemolishOption[DemolishOption["On_Contact_FF"] = 4] = "On_Contact_FF";
})(DemolishOption || (DemolishOption = {}));
exports.DemolishOption = DemolishOption;
var RespawnTimeOption;
(function (RespawnTimeOption) {
    RespawnTimeOption[RespawnTimeOption["Three_Seconds"] = 0] = "Three_Seconds";
    RespawnTimeOption[RespawnTimeOption["Two_Seconds"] = 1] = "Two_Seconds";
    RespawnTimeOption[RespawnTimeOption["One_Seconds"] = 2] = "One_Seconds";
    RespawnTimeOption[RespawnTimeOption["Disable_Goal_Reset"] = 3] = "Disable_Goal_Reset";
})(RespawnTimeOption || (RespawnTimeOption = {}));
exports.RespawnTimeOption = RespawnTimeOption;
var MutatorSettings = /** @class */ (function () {
    function MutatorSettings(flat) {
        this.matchLength = flat.matchLength();
        this.maxScore = flat.maxScore();
        this.overtimeOption = flat.overtimeOption();
        this.seriesLengthOption = flat.seriesLengthOption();
        this.gameSpeedOption = flat.gameSpeedOption();
        this.ballMaxSpeedOption = flat.ballMaxSpeedOption();
        this.ballTypeOption = flat.ballTypeOption();
        this.ballWeightOption = flat.ballWeightOption();
        this.ballSizeOption = flat.ballSizeOption();
        this.ballBouncinessOption = flat.ballBouncinessOption();
        this.boostOption = flat.boostOption();
        this.rumbleOption = flat.rumbleOption();
        this.boostStrengthOption = flat.boostStrengthOption();
        this.gravityOption = flat.gravityOption();
        this.demolishOption = flat.demolishOption();
        this.respawnTimeOption = flat.respawnTimeOption();
    }
    return MutatorSettings;
}());
exports.MutatorSettings = MutatorSettings;
var ExistingMatchBehavior;
(function (ExistingMatchBehavior) {
    /// Restart the match if any match settings differ. This is the default because old RLBot always worked this way.
    ExistingMatchBehavior[ExistingMatchBehavior["Restart_If_Different"] = 0] = "Restart_If_Different";
    /// Always restart the match, even if config is identical
    ExistingMatchBehavior[ExistingMatchBehavior["Restart"] = 1] = "Restart";
    /// Never restart an existing match, just try to remove or spawn cars to match the configuration.
    /// If we are not in the middle of a match, a match will be started. Handy for LAN matches.
    ExistingMatchBehavior[ExistingMatchBehavior["Continue_And_Spawn"] = 2] = "Continue_And_Spawn";
})(ExistingMatchBehavior || (ExistingMatchBehavior = {}));
exports.ExistingMatchBehavior = ExistingMatchBehavior;
var MatchSettings = /** @class */ (function () {
    function MatchSettings(flat) {
        this.playerConfigurations = [];
        for (var _i = 0, _a = flat.playerConfigurations(); _i < _a.length; _i++) {
            var pc = _a[_i];
            this.playerConfigurations.push(new PlayerConfiguration(pc));
        }
        this.gameMode = flat.gameMode();
        this.gameMap = flat.gameMap();
        this.skipReplays = flat.skipReplays();
        this.instantStart = flat.instantStart();
        this.mutatorSettings = new MutatorSettings(flat.mutatorSettings());
        this.existingMatchBehavior = flat.existingMatchBehavior();
        this.enableLockstep = flat.enableLockstep();
        this.enableRendering = flat.enableRendering();
        this.enableStateSetting = flat.enableStateSetting();
        this.autoSaveReplay = flat.autoSaveReplay();
    }
    return MatchSettings;
}());
exports.MatchSettings = MatchSettings;
var QuickChatSelection;
(function (QuickChatSelection) {
    QuickChatSelection[QuickChatSelection["Information_IGotIt"] = 0] = "Information_IGotIt";
    QuickChatSelection[QuickChatSelection["Information_NeedBoost"] = 1] = "Information_NeedBoost";
    QuickChatSelection[QuickChatSelection["Information_TakeTheShot"] = 2] = "Information_TakeTheShot";
    QuickChatSelection[QuickChatSelection["Information_Defending"] = 3] = "Information_Defending";
    QuickChatSelection[QuickChatSelection["Information_GoForIt"] = 4] = "Information_GoForIt";
    QuickChatSelection[QuickChatSelection["Information_Centering"] = 5] = "Information_Centering";
    QuickChatSelection[QuickChatSelection["Information_AllYours"] = 6] = "Information_AllYours";
    QuickChatSelection[QuickChatSelection["Information_InPosition"] = 7] = "Information_InPosition";
    QuickChatSelection[QuickChatSelection["Information_Incoming"] = 8] = "Information_Incoming";
    QuickChatSelection[QuickChatSelection["Compliments_NiceShot"] = 9] = "Compliments_NiceShot";
    QuickChatSelection[QuickChatSelection["Compliments_GreatPass"] = 10] = "Compliments_GreatPass";
    QuickChatSelection[QuickChatSelection["Compliments_Thanks"] = 11] = "Compliments_Thanks";
    QuickChatSelection[QuickChatSelection["Compliments_WhatASave"] = 12] = "Compliments_WhatASave";
    QuickChatSelection[QuickChatSelection["Compliments_NiceOne"] = 13] = "Compliments_NiceOne";
    QuickChatSelection[QuickChatSelection["Compliments_WhatAPlay"] = 14] = "Compliments_WhatAPlay";
    QuickChatSelection[QuickChatSelection["Compliments_GreatClear"] = 15] = "Compliments_GreatClear";
    QuickChatSelection[QuickChatSelection["Compliments_NiceBlock"] = 16] = "Compliments_NiceBlock";
    QuickChatSelection[QuickChatSelection["Reactions_OMG"] = 17] = "Reactions_OMG";
    QuickChatSelection[QuickChatSelection["Reactions_Noooo"] = 18] = "Reactions_Noooo";
    QuickChatSelection[QuickChatSelection["Reactions_Wow"] = 19] = "Reactions_Wow";
    QuickChatSelection[QuickChatSelection["Reactions_CloseOne"] = 20] = "Reactions_CloseOne";
    QuickChatSelection[QuickChatSelection["Reactions_NoWay"] = 21] = "Reactions_NoWay";
    QuickChatSelection[QuickChatSelection["Reactions_HolyCow"] = 22] = "Reactions_HolyCow";
    QuickChatSelection[QuickChatSelection["Reactions_Whew"] = 23] = "Reactions_Whew";
    QuickChatSelection[QuickChatSelection["Reactions_Siiiick"] = 24] = "Reactions_Siiiick";
    QuickChatSelection[QuickChatSelection["Reactions_Calculated"] = 25] = "Reactions_Calculated";
    QuickChatSelection[QuickChatSelection["Reactions_Savage"] = 26] = "Reactions_Savage";
    QuickChatSelection[QuickChatSelection["Reactions_Okay"] = 27] = "Reactions_Okay";
    QuickChatSelection[QuickChatSelection["Apologies_Cursing"] = 28] = "Apologies_Cursing";
    QuickChatSelection[QuickChatSelection["Apologies_NoProblem"] = 29] = "Apologies_NoProblem";
    QuickChatSelection[QuickChatSelection["Apologies_Whoops"] = 30] = "Apologies_Whoops";
    QuickChatSelection[QuickChatSelection["Apologies_Sorry"] = 31] = "Apologies_Sorry";
    QuickChatSelection[QuickChatSelection["Apologies_MyBad"] = 32] = "Apologies_MyBad";
    QuickChatSelection[QuickChatSelection["Apologies_Oops"] = 33] = "Apologies_Oops";
    QuickChatSelection[QuickChatSelection["Apologies_MyFault"] = 34] = "Apologies_MyFault";
    QuickChatSelection[QuickChatSelection["PostGame_Gg"] = 35] = "PostGame_Gg";
    QuickChatSelection[QuickChatSelection["PostGame_WellPlayed"] = 36] = "PostGame_WellPlayed";
    QuickChatSelection[QuickChatSelection["PostGame_ThatWasFun"] = 37] = "PostGame_ThatWasFun";
    QuickChatSelection[QuickChatSelection["PostGame_Rematch"] = 38] = "PostGame_Rematch";
    QuickChatSelection[QuickChatSelection["PostGame_OneMoreGame"] = 39] = "PostGame_OneMoreGame";
    QuickChatSelection[QuickChatSelection["PostGame_WhatAGame"] = 40] = "PostGame_WhatAGame";
    QuickChatSelection[QuickChatSelection["PostGame_NiceMoves"] = 41] = "PostGame_NiceMoves";
    QuickChatSelection[QuickChatSelection["PostGame_EverybodyDance"] = 42] = "PostGame_EverybodyDance";
    /// Custom text chats made by bot makers
    QuickChatSelection[QuickChatSelection["MaxPysonixQuickChatPresets"] = 43] = "MaxPysonixQuickChatPresets";
    /// Waste of CPU cycles
    QuickChatSelection[QuickChatSelection["Custom_Toxic_WasteCPU"] = 44] = "Custom_Toxic_WasteCPU";
    /// Git gud*
    QuickChatSelection[QuickChatSelection["Custom_Toxic_GitGut"] = 45] = "Custom_Toxic_GitGut";
    /// De-Allocate Yourself
    QuickChatSelection[QuickChatSelection["Custom_Toxic_DeAlloc"] = 46] = "Custom_Toxic_DeAlloc";
    /// 404: Your skill not found
    QuickChatSelection[QuickChatSelection["Custom_Toxic_404NoSkill"] = 47] = "Custom_Toxic_404NoSkill";
    /// Get a virus
    QuickChatSelection[QuickChatSelection["Custom_Toxic_CatchVirus"] = 48] = "Custom_Toxic_CatchVirus";
    /// Passing!
    QuickChatSelection[QuickChatSelection["Custom_Useful_Passing"] = 49] = "Custom_Useful_Passing";
    /// Faking!
    QuickChatSelection[QuickChatSelection["Custom_Useful_Faking"] = 50] = "Custom_Useful_Faking";
    /// Demoing!
    QuickChatSelection[QuickChatSelection["Custom_Useful_Demoing"] = 51] = "Custom_Useful_Demoing";
    /// BOOPING
    QuickChatSelection[QuickChatSelection["Custom_Useful_Bumping"] = 52] = "Custom_Useful_Bumping";
    /// The chances of that was 47525 to 1*
    QuickChatSelection[QuickChatSelection["Custom_Compliments_TinyChances"] = 53] = "Custom_Compliments_TinyChances";
    /// Who upped your skill level?
    QuickChatSelection[QuickChatSelection["Custom_Compliments_SkillLevel"] = 54] = "Custom_Compliments_SkillLevel";
    /// Your programmer should be proud
    QuickChatSelection[QuickChatSelection["Custom_Compliments_proud"] = 55] = "Custom_Compliments_proud";
    /// You're the GC of Bots
    QuickChatSelection[QuickChatSelection["Custom_Compliments_GC"] = 56] = "Custom_Compliments_GC";
    /// Are you <Insert Pro>Bot? *
    QuickChatSelection[QuickChatSelection["Custom_Compliments_Pro"] = 57] = "Custom_Compliments_Pro";
    /// Lag
    QuickChatSelection[QuickChatSelection["Custom_Excuses_Lag"] = 58] = "Custom_Excuses_Lag";
    /// Ghost inputs
    QuickChatSelection[QuickChatSelection["Custom_Excuses_GhostInputs"] = 59] = "Custom_Excuses_GhostInputs";
    /// RIGGED
    QuickChatSelection[QuickChatSelection["Custom_Excuses_Rigged"] = 60] = "Custom_Excuses_Rigged";
    /// Mafia plays!
    QuickChatSelection[QuickChatSelection["Custom_Toxic_MafiaPlays"] = 61] = "Custom_Toxic_MafiaPlays";
    /// Yeet!
    QuickChatSelection[QuickChatSelection["Custom_Exclamation_Yeet"] = 62] = "Custom_Exclamation_Yeet";
})(QuickChatSelection || (QuickChatSelection = {}));
exports.QuickChatSelection = QuickChatSelection;
var QuickChat = /** @class */ (function () {
    function QuickChat(flat) {
        this.quickChatSelection = flat.quickChatSelection();
        this.playerIndex = flat.playerIndex();
        this.teamOnly = flat.teamOnly();
        this.messageIndex = flat.messageIndex();
        this.timeStamp = flat.timeStamp();
    }
    return QuickChat;
}());
exports.QuickChat = QuickChat;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhdHN0cnVjdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZmxhdC9mbGF0c3RydWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlKQUF5SjtBQUN6SiwrQ0FBNkI7QUFDN0IsMENBU3NCO0FBRXRCLGlFQUFpRTtBQUNqRSxrQkFBa0I7QUFDbEIsWUFBWTtBQUNaLFlBQVk7QUFDWixZQUFZO0FBQ1osNkJBQTZCO0FBQzdCLHlCQUF5QjtBQUN6Qix5QkFBeUI7QUFDekIseUJBQXlCO0FBQ3pCLE1BQU07QUFDTixJQUFJO0FBRUosa0JBQWtCO0FBQ2xCLGdCQUFnQjtBQUNoQixjQUFjO0FBQ2QsZUFBZTtBQUNmLDZCQUE2QjtBQUM3QixpQ0FBaUM7QUFDakMsNkJBQTZCO0FBQzdCLCtCQUErQjtBQUMvQixNQUFNO0FBQ04sSUFBSTtBQUVKLGtCQUFrQjtBQUNsQix1QkFBdUI7QUFDdkIsbUJBQW1CO0FBQ25CLG1CQUFtQjtBQUNuQiwwQkFBMEI7QUFDMUIsNkJBQTZCO0FBQzdCLG9EQUFvRDtBQUNwRCw2RUFBNkU7QUFDN0Usb0RBQW9EO0FBQ3BELGtFQUFrRTtBQUNsRSxNQUFNO0FBQ04sSUFBSTtBQUVKO0lBT0UsZUFBWSxJQUFTO1FBQ25CLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxtQkFBTyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxtQkFBTyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxJQUFJLEdB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