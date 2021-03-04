"use strict";
// This file is copied from RLBotJS by SuperVK. It is translated into typescript and some big changes were made to make it compatible with this codebase.
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
exports.__esModule = true;
exports.QuickChatSelection = exports.QuickChat = exports.LoadoutPaint = exports.PlayerLoadout = exports.PlayerClass = exports.RespawnTimeOption = exports.DemolishOption = exports.GravityOption = exports.BoostStrengthOption = exports.RumbleOption = exports.BoostOption = exports.BallBouncinessOption = exports.BallSizeOption = exports.BallWeightOption = exports.BallTypeOption = exports.BallMaxSpeedOption = exports.GameSpeedOption = exports.SeriesLengthOption = exports.OvertimeOption = exports.MaxScore = exports.MatchLength = exports.ExistingMatchBehavior = exports.MutatorSettings = exports.GameMap = exports.GameMode = exports.PlayerConfiguration = exports.MatchSettings = exports.FieldInfo = exports.GoalInfo = exports.BoostPad = exports.BallPrediction = exports.GameTickPacket = exports.TeamInfo = exports.BoostPadState = exports.PlayerInfo = exports.GameInfo = exports.BallInfo = exports.Touch = void 0;
var Vector3 = /** @class */ (function () {
    function Vector3(flat) {
        this.x = flat.x();
        this.y = flat.y();
        this.z = flat.z();
    }
    return Vector3;
}());
var Rotator = /** @class */ (function () {
    function Rotator(flat) {
        this.pitch = flat.pitch();
        this.yaw = flat.yaw();
        this.roll = flat.roll();
    }
    return Rotator;
}());
var Physics = /** @class */ (function () {
    function Physics(flat) {
        this.location = new Vector3(flat.location());
        this.rotation = flat.rotation() ? new Rotator(flat.rotation()) : null;
        this.velocity = new Vector3(flat.velocity());
        this.angularVelocity = new Vector3(flat.angularVelocity());
    }
    return Physics;
}());
var Touch = /** @class */ (function () {
    function Touch(flat) {
        this.playerName = flat.playerName();
        this.gameSeconds = flat.gameSeconds();
        this.location = new Vector3(flat.location());
        this.normal = new Vector3(flat.normal());
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
        this.physics = new Physics(flat.physics());
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
        this.physics = new Physics(flat.physics());
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
        this.physics = new Physics(flat.physics());
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
        this.location = new Vector3(flat.location());
        this.isFullBoost = flat.isFullBoost();
    }
    return BoostPad;
}());
exports.BoostPad = BoostPad;
var GoalInfo = /** @class */ (function () {
    function GoalInfo(flat) {
        this.teamNum = flat.teamNum();
        this.location = new Vector3(flat.location());
        this.direction = new Vector3(flat.direction());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhdHN0cnVjdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZmxhdC9mbGF0c3RydWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEseUpBQXlKOzs7Ozs7Ozs7Ozs7Ozs7O0FBRXpKO0lBSUUsaUJBQVksSUFBUztRQUNuQixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBQ0gsY0FBQztBQUFELENBQUMsQUFURCxJQVNDO0FBRUQ7SUFJRSxpQkFBWSxJQUFTO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FBQyxBQVRELElBU0M7QUFDRDtJQUtFLGlCQUFZLElBQVM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUN0RSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxP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