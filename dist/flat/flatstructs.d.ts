export * from "../GameState";
import { Vector3, Physics } from "../GameState";
declare class Touch {
    playerName: any;
    gameSeconds: any;
    location: any;
    normal: any;
    team: any;
    playerIndex: any;
    constructor(flat: any);
}
declare class BallInfo {
    physics: any;
    latestTouch: any;
    dropShotInfo: any;
    constructor(flat: any);
}
declare class GameInfo {
    secondsElapsed: any;
    gameTimeRemaining: any;
    isOvertime: any;
    isRoundActive: any;
    isKickoffPause: any;
    isMatchEnded: any;
    worldGravityZ: any;
    gameSpeed: any;
    frameNum: any;
    constructor(flat: any);
}
declare class ScoreInfo {
    score: any;
    goals: any;
    ownGoals: any;
    assists: any;
    saves: any;
    shots: any;
    demolitions: any;
    constructor(flat: any);
}
declare class PlayerInfo {
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
    constructor(flat: any);
}
declare class BoostPadState {
    isActive: any;
    timer: any;
    constructor(flat: any);
}
declare class TeamInfo {
    teamIndex: any;
    score: any;
    constructor(flat: any);
}
declare class DropshotTile {
    tileState: any;
    constructor(flat: any);
}
declare class GameTickPacket {
    players: PlayerInfo[];
    boostPadStates: BoostPadState[];
    ball: BallInfo | null;
    gameInfo: GameInfo | null;
    tileInformation: DropshotTile[];
    teams: TeamInfo[];
    constructor(flat: any);
}
declare class PredictionSlice {
    gameSeconds: any;
    physics: Physics;
    constructor(flat: any);
}
declare class BallPrediction {
    slices: PredictionSlice[];
    constructor(flat: any);
}
declare class BoostPad {
    location: Vector3;
    isFullBoost: any;
    constructor(flat: any);
}
declare class GoalInfo {
    teamNum: any;
    location: Vector3;
    direction: Vector3;
    constructor(flat: any);
}
declare class FieldInfo {
    boostPads: BoostPad[];
    goals: GoalInfo[];
    constructor(flat: any);
}
declare class PsyonixBotPlayer {
    botSkill: number;
    constructor(flat: any);
}
declare class PlayerClass extends PsyonixBotPlayer {
    constructor(flat: any);
}
declare class LoadoutPaint {
    carPaintId: number;
    decalPaintId: number;
    wheelsPaintId: number;
    boostPaintId: number;
    antennaPaintId: number;
    hatPaintId: number;
    trailsPaintId: number;
    goalExplosionPaintId: number;
    constructor(flat: any);
}
declare class Color {
    a: number;
    r: number;
    g: number;
    b: number;
    constructor(flat: any);
}
declare class PlayerLoadout {
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
    constructor(flat: any);
}
declare class PlayerConfiguration {
    variety: PlayerClass;
    name: string;
    team: number;
    loadout: PlayerLoadout;
    spawnId: number;
    constructor(flat: any);
}
declare enum GameMode {
    Soccer = 0,
    Hoops = 1,
    Dropshot = 2,
    Hockey = 3,
    Rumble = 4,
    Heatseeker = 5
}
declare enum GameMap {
    DFHStadium = 0,
    Mannfield = 1,
    ChampionsField = 2,
    UrbanCentral = 3,
    BeckwithPark = 4,
    UtopiaColiseum = 5,
    Wasteland = 6,
    NeoTokyo = 7,
    AquaDome = 8,
    StarbaseArc = 9,
    Farmstead = 10,
    SaltyShores = 11,
    DFHStadium_Stormy = 12,
    DFHStadium_Day = 13,
    Mannfield_Stormy = 14,
    Mannfield_Night = 15,
    ChampionsField_Day = 16,
    BeckwithPark_Stormy = 17,
    BeckwithPark_Midnight = 18,
    UrbanCentral_Night = 19,
    UrbanCentral_Dawn = 20,
    UtopiaColiseum_Dusk = 21,
    DFHStadium_Snowy = 22,
    Mannfield_Snowy = 23,
    UtopiaColiseum_Snowy = 24,
    Badlands = 25,
    Badlands_Night = 26,
    TokyoUnderpass = 27,
    Arctagon = 28,
    Pillars = 29,
    Cosmic = 30,
    DoubleGoal = 31,
    Octagon = 32,
    Underpass = 33,
    UtopiaRetro = 34,
    Hoops_DunkHouse = 35,
    DropShot_Core707 = 36,
    ThrowbackStadium = 37,
    ForbiddenTemple = 38,
    RivalsArena = 39,
    Farmstead_Night = 40,
    SaltyShores_Night = 41
}
declare enum MatchLength {
    Five_Minutes = 0,
    Ten_Minutes = 1,
    Twenty_Minutes = 2,
    Unlimited = 3
}
declare enum MaxScore {
    Unlimited = 0,
    One_Goal = 1,
    Three_Goals = 2,
    Five_Goals = 3
}
declare enum OvertimeOption {
    Unlimited = 0,
    Five_Max_First_Score = 1,
    Five_Max_Random_Team = 2
}
declare enum SeriesLengthOption {
    Unlimited = 0,
    Three_Games = 1,
    Five_Games = 2,
    Seven_Games = 3
}
declare enum GameSpeedOption {
    Default = 0,
    Slo_Mo = 1,
    Time_Warp = 2
}
declare enum BallMaxSpeedOption {
    Default = 0,
    Slow = 1,
    Fast = 2,
    Super_Fast = 3
}
declare enum BallTypeOption {
    Default = 0,
    Cube = 1,
    Puck = 2,
    Basketball = 3
}
declare enum BallWeightOption {
    Default = 0,
    Light = 1,
    Heavy = 2,
    Super_Light = 3
}
declare enum BallSizeOption {
    Default = 0,
    Small = 1,
    Large = 2,
    Gigantic = 3
}
declare enum BallBouncinessOption {
    Default = 0,
    Low = 1,
    High = 2,
    Super_High = 3
}
declare enum BoostOption {
    Normal_Boost = 0,
    Unlimited_Boost = 1,
    Slow_Recharge = 2,
    Rapid_Recharge = 3,
    No_Boost = 4
}
declare enum RumbleOption {
    No_Rumble = 0,
    Default = 1,
    Slow = 2,
    Civilized = 3,
    Destruction_Derby = 4,
    Spring_Loaded = 5,
    Spikes_Only = 6,
    Spike_Rush = 7
}
declare enum BoostStrengthOption {
    One = 0,
    OneAndAHalf = 1,
    Two = 2,
    Ten = 3
}
declare enum GravityOption {
    Default = 0,
    Low = 1,
    High = 2,
    Super_High = 3
}
declare enum DemolishOption {
    Default = 0,
    Disabled = 1,
    Friendly_Fire = 2,
    On_Contact = 3,
    On_Contact_FF = 4
}
declare enum RespawnTimeOption {
    Three_Seconds = 0,
    Two_Seconds = 1,
    One_Seconds = 2,
    Disable_Goal_Reset = 3
}
declare class MutatorSettings {
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
    constructor(flat: any);
}
declare enum ExistingMatchBehavior {
    Restart_If_Different = 0,
    Restart = 1,
    Continue_And_Spawn = 2
}
declare class MatchSettings {
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
    constructor(flat: any);
}
declare enum QuickChatSelection {
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
    MaxPysonixQuickChatPresets = 43,
    Custom_Toxic_WasteCPU = 44,
    Custom_Toxic_GitGut = 45,
    Custom_Toxic_DeAlloc = 46,
    Custom_Toxic_404NoSkill = 47,
    Custom_Toxic_CatchVirus = 48,
    Custom_Useful_Passing = 49,
    Custom_Useful_Faking = 50,
    Custom_Useful_Demoing = 51,
    Custom_Useful_Bumping = 52,
    Custom_Compliments_TinyChances = 53,
    Custom_Compliments_SkillLevel = 54,
    Custom_Compliments_proud = 55,
    Custom_Compliments_GC = 56,
    Custom_Compliments_Pro = 57,
    Custom_Excuses_Lag = 58,
    Custom_Excuses_GhostInputs = 59,
    Custom_Excuses_Rigged = 60,
    Custom_Toxic_MafiaPlays = 61,
    Custom_Exclamation_Yeet = 62
}
declare class QuickChat {
    quickChatSelection: QuickChatSelection;
    playerIndex: number;
    teamOnly: boolean;
    messageIndex: number;
    timeStamp: number;
    constructor(flat: any);
}
export { Touch, BallInfo, GameInfo, PlayerInfo, BoostPadState, TeamInfo, GameTickPacket, BallPrediction, BoostPad, GoalInfo, FieldInfo, MatchSettings, PlayerConfiguration, GameMode, GameMap, MutatorSettings, ExistingMatchBehavior, MatchLength, MaxScore, OvertimeOption, SeriesLengthOption, GameSpeedOption, BallMaxSpeedOption, BallTypeOption, BallWeightOption, BallSizeOption, BallBouncinessOption, BoostOption, RumbleOption, BoostStrengthOption, GravityOption, DemolishOption, RespawnTimeOption, PlayerClass, PlayerLoadout, LoadoutPaint, QuickChat, QuickChatSelection, };
//# sourceMappingURL=flatstructs.d.ts.map