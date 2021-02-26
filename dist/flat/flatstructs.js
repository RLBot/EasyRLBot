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
exports.QuickChatSelection = exports.QuickChat = exports.LoadoutPaint = exports.Color = exports.PlayerLoadout = exports.PlayerClass = exports.RespawnTimeOption = exports.DemolishOption = exports.GravityOption = exports.BoostStrengthOption = exports.RumbleOption = exports.BoostOption = exports.BallBouncinessOption = exports.BallSizeOption = exports.BallWeightOption = exports.BallTypeOption = exports.BallMaxSpeedOption = exports.GameSpeedOption = exports.SeriesLengthOption = exports.OvertimeOption = exports.MaxScore = exports.MatchLength = exports.ExistingMatchBehavior = exports.MutatorSettings = exports.GameMap = exports.GameMode = exports.PlayerConfiguration = exports.MatchSettings = exports.FieldInfo = exports.GoalInfo = exports.BoostPad = exports.BallPrediction = exports.GameTickPacket = exports.TeamInfo = exports.BoostPadState = exports.PlayerInfo = exports.GameInfo = exports.BallInfo = exports.Touch = exports.Physics = exports.Rotator = exports.Vector3 = void 0;
var Vector3 = /** @class */ (function () {
    function Vector3(flat) {
        this.x = flat.x();
        this.y = flat.y();
        this.z = flat.z();
    }
    return Vector3;
}());
exports.Vector3 = Vector3;
var Rotator = /** @class */ (function () {
    function Rotator(flat) {
        this.pitch = flat.pitch();
        this.yaw = flat.yaw();
        this.roll = flat.roll();
    }
    return Rotator;
}());
exports.Rotator = Rotator;
var Physics = /** @class */ (function () {
    function Physics(flat) {
        this.location = new Vector3(flat.location());
        this.rotation = flat.rotation() ? new Rotator(flat.rotation()) : null;
        this.velocity = new Vector3(flat.velocity());
        this.angularVelocity = new Vector3(flat.angularVelocity());
    }
    return Physics;
}());
exports.Physics = Physics;
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
exports.Color = Color;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhdHN0cnVjdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZmxhdC9mbGF0c3RydWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEseUpBQXlKOzs7Ozs7Ozs7Ozs7Ozs7O0FBRXpKO0lBSUUsaUJBQVksSUFBUztRQUNuQixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBQ0gsY0FBQztBQUFELENBQUMsQUFURCxJQVNDO0FBNHJCQywwQkFBTztBQTFyQlQ7SUFJRSxpQkFBWSxJQUFTO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FBQyxBQVRELElBU0M7QUFrckJDLDBCQUFPO0FBanJCVDtJQUtFLGlCQUFZLElBQVM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUN0RSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FB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