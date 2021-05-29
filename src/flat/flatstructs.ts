// This file is copied from RLBotJS by SuperVK. It is translated into typescript and some big changes were made to make it compatible with this codebase.
export * from "../GameState";
import {
  Vector3,
  Rotator,
  Physics,
  BallState,
  BoostState,
  GameInfoState,
  CarState,
  GameState,
} from "../GameState";

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

class Touch {
  playerName: any;
  gameSeconds: any;
  location: any;
  normal: any;
  team: any;
  playerIndex: any;
  constructor(flat: any) {
    this.playerName = flat.playerName();
    this.gameSeconds = flat.gameSeconds();
    this.location = new Vector3().fromFlat(flat.location());
    this.normal = new Vector3().fromFlat(flat.normal());
    this.team = flat.team();
    this.playerIndex = flat.playerIndex();
  }
}

class DropShotBallInfo {
  absorbedForce: any;
  damageIndex: any;
  forceAccumRecent: any;
  constructor(flat: any) {
    this.absorbedForce = flat.absorbedForce();
    this.damageIndex = flat.damageIndex();
    this.forceAccumRecent = flat.forceAccumRecent();
  }
}

class BallInfo {
  physics: any;
  latestTouch: any;
  dropShotInfo: any;
  constructor(flat: any) {
    this.physics = new Physics().fromFlat(flat.physics());
    this.latestTouch = flat.latestTouch()
      ? new Touch(flat.latestTouch())
      : null;
    this.dropShotInfo = new DropShotBallInfo(flat.dropShotInfo());
  }
}

class GameInfo {
  secondsElapsed: any;
  gameTimeRemaining: any;
  isOvertime: any;
  isRoundActive: any;
  isKickoffPause: any;
  isMatchEnded: any;
  worldGravityZ: any;
  gameSpeed: any;
  frameNum: any;
  constructor(flat: any) {
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
}

class ScoreInfo {
  score: any;
  goals: any;
  ownGoals: any;
  assists: any;
  saves: any;
  shots: any;
  demolitions: any;
  constructor(flat: any) {
    this.score = flat.score();
    this.goals = flat.goals();
    this.ownGoals = flat.ownGoals();
    this.assists = flat.assists();
    this.saves = flat.saves();
    this.shots = flat.shots();
    this.demolitions = flat.demolitions();
  }
}

class PlayerInfo {
  physics: Physics;
  scoreInfo: ScoreInfo;
  isDemolished: any;
  hasWheelContact: any;
  isSupersonic: any;
  isBot: any;
  jumped: any;
  doubleJumped: any;
  name: any;
  boost: any;
  team: any;
  constructor(flat: any) {
    this.physics = new Physics().fromFlat(flat.physics());
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
}

class BoostPadState {
  isActive: any;
  timer: any;
  constructor(flat: any) {
    this.isActive = flat.isActive();
    this.timer = flat.timer();
  }
}

class TeamInfo {
  teamIndex: any;
  score: any;
  constructor(flat: any) {
    this.teamIndex = flat.teamIndex();
    this.score = flat.score();
  }
}

class DropshotTile {
  tileState: any;
  constructor(flat: any) {
    this.tileState = flat.tileState();
  }
}

class GameTickPacket {
  players: PlayerInfo[];
  boostPadStates: BoostPadState[];
  ball: BallInfo | null;
  gameInfo: GameInfo | null;
  tileInformation: DropshotTile[];
  teams: TeamInfo[];
  constructor(flat: any) {
    this.players = [];
    for (let p = 0; p < flat.playersLength(); p++) {
      this.players.push(new PlayerInfo(flat.players(p)));
    }
    this.boostPadStates = [];
    for (let b = 0; b < flat.boostPadStatesLength(); b++) {
      this.boostPadStates.push(new BoostPadState(flat.boostPadStates(b)));
    }
    this.ball = flat.ball() ? new BallInfo(flat.ball()) : null;
    this.gameInfo = flat.gameInfo()
      ? new GameInfo(flat.gameInfo(flat.gameInfo()))
      : null;
    this.tileInformation = [];
    for (let t = 0; t < flat.tileInformationLength(); t++) {
      this.tileInformation.push(new DropshotTile(flat.tileInformation(t)));
    }
    this.teams = [];
    for (let t = 0; t < flat.teamsLength(); t++) {
      this.teams.push(new TeamInfo(flat.teams(t)));
    }
  }
}

class PredictionSlice {
  gameSeconds: any;
  physics: Physics;
  constructor(flat: any) {
    this.gameSeconds = flat.gameSeconds();
    this.physics = new Physics().fromFlat(flat.physics());
  }
}

class BallPrediction {
  slices: PredictionSlice[];
  constructor(flat: any) {
    this.slices = [];
    for (let s = 0; s < flat.slicesLength(); s++) {
      this.slices.push(new PredictionSlice(flat.slices(s)));
    }
  }
}

class BoostPad {
  location: Vector3;
  isFullBoost: any;
  constructor(flat: any) {
    this.location = new Vector3().fromFlat(flat.location());
    this.isFullBoost = flat.isFullBoost();
  }
}

class GoalInfo {
  teamNum: any;
  location: Vector3;
  direction: Vector3;
  constructor(flat: any) {
    this.teamNum = flat.teamNum();
    this.location = new Vector3().fromFlat(flat.location());
    this.direction = new Vector3().fromFlat(flat.direction());
  }
}

class FieldInfo {
  boostPads: BoostPad[];
  goals: GoalInfo[];
  constructor(flat: any) {
    this.boostPads = [];
    for (let b = 0; b < flat.boostPadsLength(); b++) {
      this.boostPads.push(new BoostPad(flat.boostPads(b)));
    }
    this.goals = [];
    for (let g = 0; g < flat.goalsLength(); g++) {
      this.goals.push(new GoalInfo(flat.goals(g)));
    }
  }
}

class RLBotPlayer {}

class HumanPlayer {}

class PsyonixBotPlayer {
  botSkill: number;
  constructor(flat: any) {
    this.botSkill = flat.botSkill();
  }
}

class PartyMemberBotPlayer {}

class PlayerClass extends PsyonixBotPlayer {
  constructor(flat: any) {
    super(flat);
  }
}

class LoadoutPaint {
  carPaintId: number;
  decalPaintId: number;
  wheelsPaintId: number;
  boostPaintId: number;
  antennaPaintId: number;
  hatPaintId: number;
  trailsPaintId: number;
  goalExplosionPaintId: number;
  constructor(flat: any) {
    this.carPaintId = flat.carPaintId();
    this.decalPaintId = flat.decalPaintId();
    this.wheelsPaintId = flat.wheelsPaintId();
    this.boostPaintId = flat.boostPaintId();
    this.antennaPaintId = flat.antennaPaintId();
    this.hatPaintId = flat.hatPaintId();
    this.trailsPaintId = flat.trailsPaintId();
    this.goalExplosionPaintId = flat.goalExplosionPaintId();
  }
}

class Color {
  a: number;
  r: number;
  g: number;
  b: number;
  constructor(flat: any) {
    this.a = flat.a();
    this.r = flat.b();
    (this.g = flat.g()), (this.b = flat.b());
  }
}

class PlayerLoadout {
  teamColorId: number;
  customColorId: number;
  carId: number;
  decalId: number;
  wheelsId: number;
  boostId: number;
  antennaId: number;
  hatId: number;
  paintFinishId: number;
  customFinishId: number;
  engineAudioId: number;
  trailsId: number;
  goalExplosionId: number;
  loadoutPaint: LoadoutPaint;
  primaryColorLookup: Color;
  secondaryColorLookup: Color;
  constructor(flat: any) {
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
}

class PlayerConfiguration {
  variety: PlayerClass;
  name: string;
  team: number;
  loadout: PlayerLoadout;
  spawnId: number;
  constructor(flat: any) {
    this.variety = new PlayerClass(flat.variety());
    this.name = flat.name();
    this.team = flat.team();
    this.loadout = new PlayerLoadout(flat.loadout());
    this.spawnId = flat.spawnId();
  }
}

enum GameMode {
  Soccer,
  Hoops,
  Dropshot,
  Hockey,
  Rumble,
  Heatseeker,
}

enum GameMap {
  DFHStadium,
  Mannfield,
  ChampionsField,
  UrbanCentral,
  BeckwithPark,
  UtopiaColiseum,
  Wasteland,
  NeoTokyo,
  AquaDome,
  StarbaseArc,
  Farmstead,
  SaltyShores,
  DFHStadium_Stormy,
  DFHStadium_Day,
  Mannfield_Stormy,
  Mannfield_Night,
  ChampionsField_Day,
  BeckwithPark_Stormy,
  BeckwithPark_Midnight,
  UrbanCentral_Night,
  UrbanCentral_Dawn,
  UtopiaColiseum_Dusk,
  DFHStadium_Snowy,
  Mannfield_Snowy,
  UtopiaColiseum_Snowy,
  Badlands,
  Badlands_Night,
  TokyoUnderpass,
  Arctagon,
  Pillars,
  Cosmic,
  DoubleGoal,
  Octagon,
  Underpass,
  UtopiaRetro,
  Hoops_DunkHouse,
  DropShot_Core707,
  ThrowbackStadium,
  ForbiddenTemple,
  RivalsArena,
  Farmstead_Night,
  SaltyShores_Night,
}

enum MatchLength {
  Five_Minutes,
  Ten_Minutes,
  Twenty_Minutes,
  Unlimited,
}

enum MaxScore {
  Unlimited,
  One_Goal,
  Three_Goals,
  Five_Goals,
}

enum OvertimeOption {
  Unlimited,
  Five_Max_First_Score,
  Five_Max_Random_Team,
}

enum SeriesLengthOption {
  Unlimited,
  Three_Games,
  Five_Games,
  Seven_Games,
}

enum GameSpeedOption {
  Default,
  Slo_Mo,
  Time_Warp,
}

enum BallMaxSpeedOption {
  Default,
  Slow,
  Fast,
  Super_Fast,
}

enum BallTypeOption {
  Default,
  Cube,
  Puck,
  Basketball,
}

enum BallWeightOption {
  Default,
  Light,
  Heavy,
  Super_Light,
}

enum BallSizeOption {
  Default,
  Small,
  Large,
  Gigantic,
}

enum BallBouncinessOption {
  Default,
  Low,
  High,
  Super_High,
}

enum BoostOption {
  Normal_Boost,
  Unlimited_Boost,
  Slow_Recharge,
  Rapid_Recharge,
  No_Boost,
}

enum RumbleOption {
  No_Rumble, // Cannot be named None because that breaks Python.
  Default,
  Slow,
  Civilized,
  Destruction_Derby,
  Spring_Loaded,
  Spikes_Only,
  Spike_Rush,
}

enum BoostStrengthOption {
  One,
  OneAndAHalf,
  Two,
  Ten,
}

enum GravityOption {
  Default,
  Low,
  High,
  Super_High,
}

enum DemolishOption {
  Default,
  Disabled,
  Friendly_Fire,
  On_Contact,
  On_Contact_FF,
}

enum RespawnTimeOption {
  Three_Seconds,
  Two_Seconds,
  One_Seconds,
  Disable_Goal_Reset,
}

class MutatorSettings {
  matchLength: MatchLength;
  maxScore: MaxScore;
  overtimeOption: OvertimeOption;
  seriesLengthOption: SeriesLengthOption;
  gameSpeedOption: GameSpeedOption;
  ballMaxSpeedOption: BallMaxSpeedOption;
  ballTypeOption: BallTypeOption;
  ballWeightOption: BallWeightOption;
  ballSizeOption: BallSizeOption;
  ballBouncinessOption: BallBouncinessOption;
  boostOption: BoostOption;
  rumbleOption: RumbleOption;
  boostStrengthOption: BoostStrengthOption;
  gravityOption: GravityOption;
  demolishOption: DemolishOption;
  respawnTimeOption: RespawnTimeOption;
  constructor(flat: any) {
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
}

enum ExistingMatchBehavior {
  /// Restart the match if any match settings differ. This is the default because old RLBot always worked this way.
  Restart_If_Different,

  /// Always restart the match, even if config is identical
  Restart,

  /// Never restart an existing match, just try to remove or spawn cars to match the configuration.
  /// If we are not in the middle of a match, a match will be started. Handy for LAN matches.
  Continue_And_Spawn,
}

class MatchSettings {
  playerConfigurations: PlayerConfiguration[];
  gameMode: GameMode;
  gameMap: GameMap;
  skipReplays: boolean;
  instantStart: boolean;
  mutatorSettings: MutatorSettings;
  existingMatchBehavior: ExistingMatchBehavior;
  enableLockstep: boolean;
  enableRendering: boolean;
  enableStateSetting: boolean;
  autoSaveReplay: boolean;
  constructor(flat: any) {
    this.playerConfigurations = [];
    for (let pc of flat.playerConfigurations()) {
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
}

enum QuickChatSelection {
  Information_IGotIt = 0,
  Information_NeedBoost = 1,
  Information_TakeTheShot = 2,
  Information_Defending = 3,
  Information_GoForIt = 4,
  Information_Centering = 5,
  Information_AllYours = 6,
  Information_InPosition = 7,
  Information_Incoming = 8,
  Compliments_NiceShot = 9,
  Compliments_GreatPass = 10,
  Compliments_Thanks = 11,
  Compliments_WhatASave = 12,
  Compliments_NiceOne = 13,
  Compliments_WhatAPlay = 14,
  Compliments_GreatClear = 15,
  Compliments_NiceBlock = 16,
  Reactions_OMG = 17,
  Reactions_Noooo = 18,
  Reactions_Wow = 19,
  Reactions_CloseOne = 20,
  Reactions_NoWay = 21,
  Reactions_HolyCow = 22,
  Reactions_Whew = 23,
  Reactions_Siiiick = 24,
  Reactions_Calculated = 25,
  Reactions_Savage = 26,
  Reactions_Okay = 27,
  Apologies_Cursing = 28,
  Apologies_NoProblem = 29,
  Apologies_Whoops = 30,
  Apologies_Sorry = 31,
  Apologies_MyBad = 32,
  Apologies_Oops = 33,
  Apologies_MyFault = 34,
  PostGame_Gg = 35,
  PostGame_WellPlayed = 36,
  PostGame_ThatWasFun = 37,
  PostGame_Rematch = 38,
  PostGame_OneMoreGame = 39,
  PostGame_WhatAGame = 40,
  PostGame_NiceMoves = 41,
  PostGame_EverybodyDance = 42,
  /// Custom text chats made by bot makers
  MaxPysonixQuickChatPresets = 43,
  /// Waste of CPU cycles
  Custom_Toxic_WasteCPU = 44,
  /// Git gud*
  Custom_Toxic_GitGut = 45,
  /// De-Allocate Yourself
  Custom_Toxic_DeAlloc = 46,
  /// 404: Your skill not found
  Custom_Toxic_404NoSkill = 47,
  /// Get a virus
  Custom_Toxic_CatchVirus = 48,
  /// Passing!
  Custom_Useful_Passing = 49,
  /// Faking!
  Custom_Useful_Faking = 50,
  /// Demoing!
  Custom_Useful_Demoing = 51,
  /// BOOPING
  Custom_Useful_Bumping = 52,
  /// The chances of that was 47525 to 1*
  Custom_Compliments_TinyChances = 53,
  /// Who upped your skill level?
  Custom_Compliments_SkillLevel = 54,
  /// Your programmer should be proud
  Custom_Compliments_proud = 55,
  /// You're the GC of Bots
  Custom_Compliments_GC = 56,
  /// Are you <Insert Pro>Bot? *
  Custom_Compliments_Pro = 57,
  /// Lag
  Custom_Excuses_Lag = 58,
  /// Ghost inputs
  Custom_Excuses_GhostInputs = 59,
  /// RIGGED
  Custom_Excuses_Rigged = 60,
  /// Mafia plays!
  Custom_Toxic_MafiaPlays = 61,
  /// Yeet!
  Custom_Exclamation_Yeet = 62,
}

class QuickChat {
  quickChatSelection: QuickChatSelection;
  playerIndex: number;
  teamOnly: boolean;
  messageIndex: number;
  timeStamp: number;
  constructor(flat: any) {
    this.quickChatSelection = flat.quickChatSelection();
    this.playerIndex = flat.playerIndex();
    this.teamOnly = flat.teamOnly();
    this.messageIndex = flat.messageIndex();
    this.timeStamp = flat.timeStamp();
  }
}

export {
  // Vector3,
  // Rotator,
  // Physics,
  Touch,
  BallInfo,
  GameInfo,
  PlayerInfo,
  BoostPadState,
  TeamInfo,
  GameTickPacket,
  BallPrediction,
  BoostPad,
  GoalInfo,
  FieldInfo,
  MatchSettings,
  PlayerConfiguration,
  GameMode,
  GameMap,
  MutatorSettings,
  ExistingMatchBehavior,
  MatchLength,
  MaxScore,
  OvertimeOption,
  SeriesLengthOption,
  GameSpeedOption,
  BallMaxSpeedOption,
  BallTypeOption,
  BallWeightOption,
  BallSizeOption,
  BallBouncinessOption,
  BoostOption,
  RumbleOption,
  BoostStrengthOption,
  GravityOption,
  DemolishOption,
  RespawnTimeOption,
  PlayerClass,
  PlayerLoadout,
  // Color,
  LoadoutPaint,
  QuickChat,
  QuickChatSelection,
};
