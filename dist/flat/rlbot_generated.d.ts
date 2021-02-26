import { flatbuffers } from "flatbuffers";
/**
 * @enum {number}
 */
export declare namespace rlbot.flat {
    enum CollisionShape {
        NONE = 0,
        BoxShape = 1,
        SphereShape = 2,
        CylinderShape = 3
    }
}
/**
 * @enum {number}
 */
export declare namespace rlbot.flat {
    enum TileState {
        Unknown = 0,
        /**
         * The default state of the tiles.
         */
        Filled = 1,
        /**
         * The state when a tile has been damaged.
         */
        Damaged = 2,
        /**
         * The state of a tile when it is open and a goal can be scored.
         */
        Open = 3
    }
}
/**
 * @enum {number}
 */
export declare namespace rlbot.flat {
    enum RenderType {
        DrawLine2D = 1,
        DrawLine3D = 2,
        DrawLine2D_3D = 3,
        DrawRect2D = 4,
        DrawRect3D = 5,
        DrawString2D = 6,
        DrawString3D = 7,
        DrawCenteredRect3D = 8
    }
}
/**
 * @enum {number}
 */
export declare namespace rlbot.flat {
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
        /**
         * Custom text chats made by bot makers
         */
        MaxPysonixQuickChatPresets = 43,
        /**
         * Waste of CPU cycles
         */
        Custom_Toxic_WasteCPU = 44,
        /**
         * Git gud*
         */
        Custom_Toxic_GitGut = 45,
        /**
         * De-Allocate Yourself
         */
        Custom_Toxic_DeAlloc = 46,
        /**
         * 404: Your skill not found
         */
        Custom_Toxic_404NoSkill = 47,
        /**
         * Get a virus
         */
        Custom_Toxic_CatchVirus = 48,
        /**
         * Passing!
         */
        Custom_Useful_Passing = 49,
        /**
         * Faking!
         */
        Custom_Useful_Faking = 50,
        /**
         * Demoing!
         */
        Custom_Useful_Demoing = 51,
        /**
         * BOOPING
         */
        Custom_Useful_Bumping = 52,
        /**
         * The chances of that was 47525 to 1*
         */
        Custom_Compliments_TinyChances = 53,
        /**
         * Who upped your skill level?
         */
        Custom_Compliments_SkillLevel = 54,
        /**
         * Your programmer should be proud
         */
        Custom_Compliments_proud = 55,
        /**
         * You're the GC of Bots
         */
        Custom_Compliments_GC = 56,
        /**
         * Are you <Insert Pro>Bot? *
         */
        Custom_Compliments_Pro = 57,
        /**
         * Lag
         */
        Custom_Excuses_Lag = 58,
        /**
         * Ghost inputs
         */
        Custom_Excuses_GhostInputs = 59,
        /**
         * RIGGED
         */
        Custom_Excuses_Rigged = 60,
        /**
         * Mafia plays!
         */
        Custom_Toxic_MafiaPlays = 61,
        /**
         * Yeet!
         */
        Custom_Exclamation_Yeet = 62
    }
}
/**
 * @enum {number}
 */
export declare namespace rlbot.flat {
    enum PlayerClass {
        NONE = 0,
        RLBotPlayer = 1,
        HumanPlayer = 2,
        PsyonixBotPlayer = 3,
        PartyMemberBotPlayer = 4
    }
}
/**
 * @enum {number}
 */
export declare namespace rlbot.flat {
    enum GameMode {
        Soccer = 0,
        Hoops = 1,
        Dropshot = 2,
        Hockey = 3,
        Rumble = 4,
        Heatseeker = 5
    }
}
/**
 * @enum {number}
 */
export declare namespace rlbot.flat {
    enum GameMap {
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
}
/**
 * @enum {number}
 */
export declare namespace rlbot.flat {
    enum MatchLength {
        Five_Minutes = 0,
        Ten_Minutes = 1,
        Twenty_Minutes = 2,
        Unlimited = 3
    }
}
/**
 * @enum {number}
 */
export declare namespace rlbot.flat {
    enum MaxScore {
        Unlimited = 0,
        One_Goal = 1,
        Three_Goals = 2,
        Five_Goals = 3
    }
}
/**
 * @enum {number}
 */
export declare namespace rlbot.flat {
    enum OvertimeOption {
        Unlimited = 0,
        Five_Max_First_Score = 1,
        Five_Max_Random_Team = 2
    }
}
/**
 * @enum {number}
 */
export declare namespace rlbot.flat {
    enum SeriesLengthOption {
        Unlimited = 0,
        Three_Games = 1,
        Five_Games = 2,
        Seven_Games = 3
    }
}
/**
 * @enum {number}
 */
export declare namespace rlbot.flat {
    enum GameSpeedOption {
        Default = 0,
        Slo_Mo = 1,
        Time_Warp = 2
    }
}
/**
 * @enum {number}
 */
export declare namespace rlbot.flat {
    enum BallMaxSpeedOption {
        Default = 0,
        Slow = 1,
        Fast = 2,
        Super_Fast = 3
    }
}
/**
 * @enum {number}
 */
export declare namespace rlbot.flat {
    enum BallTypeOption {
        Default = 0,
        Cube = 1,
        Puck = 2,
        Basketball = 3
    }
}
/**
 * @enum {number}
 */
export declare namespace rlbot.flat {
    enum BallWeightOption {
        Default = 0,
        Light = 1,
        Heavy = 2,
        Super_Light = 3
    }
}
/**
 * @enum {number}
 */
export declare namespace rlbot.flat {
    enum BallSizeOption {
        Default = 0,
        Small = 1,
        Large = 2,
        Gigantic = 3
    }
}
/**
 * @enum {number}
 */
export declare namespace rlbot.flat {
    enum BallBouncinessOption {
        Default = 0,
        Low = 1,
        High = 2,
        Super_High = 3
    }
}
/**
 * @enum {number}
 */
export declare namespace rlbot.flat {
    enum BoostOption {
        Normal_Boost = 0,
        Unlimited_Boost = 1,
        Slow_Recharge = 2,
        Rapid_Recharge = 3,
        No_Boost = 4
    }
}
/**
 * @enum {number}
 */
export declare namespace rlbot.flat {
    enum RumbleOption {
        No_Rumble = 0,
        Default = 1,
        Slow = 2,
        Civilized = 3,
        Destruction_Derby = 4,
        Spring_Loaded = 5,
        Spikes_Only = 6,
        Spike_Rush = 7
    }
}
/**
 * @enum {number}
 */
export declare namespace rlbot.flat {
    enum BoostStrengthOption {
        One = 0,
        OneAndAHalf = 1,
        Two = 2,
        Ten = 3
    }
}
/**
 * @enum {number}
 */
export declare namespace rlbot.flat {
    enum GravityOption {
        Default = 0,
        Low = 1,
        High = 2,
        Super_High = 3
    }
}
/**
 * @enum {number}
 */
export declare namespace rlbot.flat {
    enum DemolishOption {
        Default = 0,
        Disabled = 1,
        Friendly_Fire = 2,
        On_Contact = 3,
        On_Contact_FF = 4
    }
}
/**
 * @enum {number}
 */
export declare namespace rlbot.flat {
    enum RespawnTimeOption {
        Three_Seconds = 0,
        Two_Seconds = 1,
        One_Seconds = 2,
        Disable_Goal_Reset = 3
    }
}
/**
 * @enum {number}
 */
export declare namespace rlbot.flat {
    enum ExistingMatchBehavior {
        /**
         * Restart the match if any match settings differ. This is the default because old RLBot always worked this way.
         */
        Restart_If_Different = 0,
        /**
         * Always restart the match, even if config is identical
         */
        Restart = 1,
        /**
         * Never restart an existing match, just try to remove or spawn cars to match the configuration.
         * If we are not in the middle of a match, a match will be started. Handy for LAN matches.
         */
        Continue_And_Spawn = 2
    }
}
/**
 * @enum {number}
 */
export declare namespace rlbot.flat {
    enum GameMessage {
        NONE = 0,
        PlayerStatEvent = 1,
        PlayerSpectate = 2,
        PlayerInputChange = 3
    }
}
/**
 * @constructor
 */
export declare namespace rlbot.flat {
    class ControllerState {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns ControllerState
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): ControllerState;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param ControllerState= obj
         * @returns ControllerState
         */
        static getRootAsControllerState(bb: flatbuffers.ByteBuffer, obj?: ControllerState): ControllerState;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param ControllerState= obj
         * @returns ControllerState
         */
        static getSizePrefixedRootAsControllerState(bb: flatbuffers.ByteBuffer, obj?: ControllerState): ControllerState;
        /**
         * -1 for full reverse, 1 for full forward
         *
         * @returns number
         */
        throttle(): number;
        /**
         * -1 for full left, 1 for full right
         *
         * @returns number
         */
        steer(): number;
        /**
         * -1 for nose down, 1 for nose up
         *
         * @returns number
         */
        pitch(): number;
        /**
         * -1 for full left, 1 for full right
         *
         * @returns number
         */
        yaw(): number;
        /**
         * -1 for roll left, 1 for roll right
         *
         * @returns number
         */
        roll(): number;
        /**
         * true if you want to press the jump button
         *
         * @returns boolean
         */
        jump(): boolean;
        /**
         * true if you want to press the boost button
         *
         * @returns boolean
         */
        boost(): boolean;
        /**
         * true if you want to press the handbrake button
         *
         * @returns boolean
         */
        handbrake(): boolean;
        /**
         * true if you want to press the 'use item' button, used in rumble etc.
         *
         * @returns boolean
         */
        useItem(): boolean;
        /**
         * @param flatbuffers.Builder builder
         */
        static startControllerState(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number throttle
         */
        static addThrottle(builder: flatbuffers.Builder, throttle: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number steer
         */
        static addSteer(builder: flatbuffers.Builder, steer: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number pitch
         */
        static addPitch(builder: flatbuffers.Builder, pitch: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number yaw
         */
        static addYaw(builder: flatbuffers.Builder, yaw: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number roll
         */
        static addRoll(builder: flatbuffers.Builder, roll: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param boolean jump
         */
        static addJump(builder: flatbuffers.Builder, jump: boolean): void;
        /**
         * @param flatbuffers.Builder builder
         * @param boolean boost
         */
        static addBoost(builder: flatbuffers.Builder, boost: boolean): void;
        /**
         * @param flatbuffers.Builder builder
         * @param boolean handbrake
         */
        static addHandbrake(builder: flatbuffers.Builder, handbrake: boolean): void;
        /**
         * @param flatbuffers.Builder builder
         * @param boolean useItem
         */
        static addUseItem(builder: flatbuffers.Builder, useItem: boolean): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endControllerState(builder: flatbuffers.Builder): flatbuffers.Offset;
        static createControllerState(builder: flatbuffers.Builder, throttle: number, steer: number, pitch: number, yaw: number, roll: number, jump: boolean, boost: boolean, handbrake: boolean, useItem: boolean): flatbuffers.Offset;
    }
}
/**
 * @constructor
 */
export declare namespace rlbot.flat {
    class PlayerInput {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns PlayerInput
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): PlayerInput;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param PlayerInput= obj
         * @returns PlayerInput
         */
        static getRootAsPlayerInput(bb: flatbuffers.ByteBuffer, obj?: PlayerInput): PlayerInput;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param PlayerInput= obj
         * @returns PlayerInput
         */
        static getSizePrefixedRootAsPlayerInput(bb: flatbuffers.ByteBuffer, obj?: PlayerInput): PlayerInput;
        /**
         * @returns number
         */
        playerIndex(): number;
        /**
         * @param rlbot.flat.ControllerState= obj
         * @returns rlbot.flat.ControllerState|null
         */
        controllerState(obj?: rlbot.flat.ControllerState): rlbot.flat.ControllerState | null;
        /**
         * @param flatbuffers.Builder builder
         */
        static startPlayerInput(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number playerIndex
         */
        static addPlayerIndex(builder: flatbuffers.Builder, playerIndex: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset controllerStateOffset
         */
        static addControllerState(builder: flatbuffers.Builder, controllerStateOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endPlayerInput(builder: flatbuffers.Builder): flatbuffers.Offset;
        static createPlayerInput(builder: flatbuffers.Builder, playerIndex: number, controllerStateOffset: flatbuffers.Offset): flatbuffers.Offset;
    }
}
/**
 * @constructor
 */
export declare namespace rlbot.flat {
    class Vector3 {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns Vector3
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): Vector3;
        /**
         * @returns number
         */
        x(): number;
        /**
         * @returns number
         */
        y(): number;
        /**
         * @returns number
         */
        z(): number;
        /**
         * @param flatbuffers.Builder builder
         * @param number x
         * @param number y
         * @param number z
         * @returns flatbuffers.Offset
         */
        static createVector3(builder: flatbuffers.Builder, x: number, y: number, z: number): flatbuffers.Offset;
    }
}
/**
 * Expresses the rotation state of an object in Euler angles, with values in radians.
 *
 * @constructor
 */
export declare namespace rlbot.flat {
    class Rotator {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns Rotator
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): Rotator;
        /**
         * @returns number
         */
        pitch(): number;
        /**
         * @returns number
         */
        yaw(): number;
        /**
         * @returns number
         */
        roll(): number;
        /**
         * @param flatbuffers.Builder builder
         * @param number pitch
         * @param number yaw
         * @param number roll
         * @returns flatbuffers.Offset
         */
        static createRotator(builder: flatbuffers.Builder, pitch: number, yaw: number, roll: number): flatbuffers.Offset;
    }
}
/**
 * Expresses the rotation state of an object.
 * Learn about quaternions here: https://en.wikipedia.org/wiki/Quaternions_and_spatial_rotation
 * You can tinker with them here to build an intuition: https://quaternions.online/
 *
 * @constructor
 */
export declare namespace rlbot.flat {
    class Quaternion {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns Quaternion
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): Quaternion;
        /**
         * @returns number
         */
        x(): number;
        /**
         * @returns number
         */
        y(): number;
        /**
         * @returns number
         */
        z(): number;
        /**
         * @returns number
         */
        w(): number;
        /**
         * @param flatbuffers.Builder builder
         * @param number x
         * @param number y
         * @param number z
         * @param number w
         * @returns flatbuffers.Offset
         */
        static createQuaternion(builder: flatbuffers.Builder, x: number, y: number, z: number, w: number): flatbuffers.Offset;
    }
}
/**
 * @constructor
 */
export declare namespace rlbot.flat {
    class BoxShape {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns BoxShape
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): BoxShape;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param BoxShape= obj
         * @returns BoxShape
         */
        static getRootAsBoxShape(bb: flatbuffers.ByteBuffer, obj?: BoxShape): BoxShape;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param BoxShape= obj
         * @returns BoxShape
         */
        static getSizePrefixedRootAsBoxShape(bb: flatbuffers.ByteBuffer, obj?: BoxShape): BoxShape;
        /**
         * @returns number
         */
        length(): number;
        /**
         * @returns number
         */
        width(): number;
        /**
         * @returns number
         */
        height(): number;
        /**
         * @param flatbuffers.Builder builder
         */
        static startBoxShape(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number length
         */
        static addLength(builder: flatbuffers.Builder, length: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number width
         */
        static addWidth(builder: flatbuffers.Builder, width: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number height
         */
        static addHeight(builder: flatbuffers.Builder, height: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endBoxShape(builder: flatbuffers.Builder): flatbuffers.Offset;
        static createBoxShape(builder: flatbuffers.Builder, length: number, width: number, height: number): flatbuffers.Offset;
    }
}
/**
 * @constructor
 */
export declare namespace rlbot.flat {
    class SphereShape {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns SphereShape
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): SphereShape;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param SphereShape= obj
         * @returns SphereShape
         */
        static getRootAsSphereShape(bb: flatbuffers.ByteBuffer, obj?: SphereShape): SphereShape;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param SphereShape= obj
         * @returns SphereShape
         */
        static getSizePrefixedRootAsSphereShape(bb: flatbuffers.ByteBuffer, obj?: SphereShape): SphereShape;
        /**
         * @returns number
         */
        diameter(): number;
        /**
         * @param flatbuffers.Builder builder
         */
        static startSphereShape(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number diameter
         */
        static addDiameter(builder: flatbuffers.Builder, diameter: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endSphereShape(builder: flatbuffers.Builder): flatbuffers.Offset;
        static createSphereShape(builder: flatbuffers.Builder, diameter: number): flatbuffers.Offset;
    }
}
/**
 * @constructor
 */
export declare namespace rlbot.flat {
    class CylinderShape {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns CylinderShape
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): CylinderShape;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param CylinderShape= obj
         * @returns CylinderShape
         */
        static getRootAsCylinderShape(bb: flatbuffers.ByteBuffer, obj?: CylinderShape): CylinderShape;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param CylinderShape= obj
         * @returns CylinderShape
         */
        static getSizePrefixedRootAsCylinderShape(bb: flatbuffers.ByteBuffer, obj?: CylinderShape): CylinderShape;
        /**
         * @returns number
         */
        diameter(): number;
        /**
         * @returns number
         */
        height(): number;
        /**
         * @param flatbuffers.Builder builder
         */
        static startCylinderShape(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number diameter
         */
        static addDiameter(builder: flatbuffers.Builder, diameter: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number height
         */
        static addHeight(builder: flatbuffers.Builder, height: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endCylinderShape(builder: flatbuffers.Builder): flatbuffers.Offset;
        static createCylinderShape(builder: flatbuffers.Builder, diameter: number, height: number): flatbuffers.Offset;
    }
}
/**
 * @constructor
 */
export declare namespace rlbot.flat {
    class Touch {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns Touch
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): Touch;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param Touch= obj
         * @returns Touch
         */
        static getRootAsTouch(bb: flatbuffers.ByteBuffer, obj?: Touch): Touch;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param Touch= obj
         * @returns Touch
         */
        static getSizePrefixedRootAsTouch(bb: flatbuffers.ByteBuffer, obj?: Touch): Touch;
        /**
         * The name of the player involved with the touch.
         *
         * @param flatbuffers.Encoding= optionalEncoding
         * @returns string|Uint8Array|null
         */
        playerName(): string | null;
        playerName(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
        /**
         * Seconds that had elapsed in the game when the touch occurred.
         *
         * @returns number
         */
        gameSeconds(): number;
        /**
         * The point of contact for the touch.
         *
         * @param rlbot.flat.Vector3= obj
         * @returns rlbot.flat.Vector3|null
         */
        location(obj?: rlbot.flat.Vector3): rlbot.flat.Vector3 | null;
        /**
         * The direction of the touch.
         *
         * @param rlbot.flat.Vector3= obj
         * @returns rlbot.flat.Vector3|null
         */
        normal(obj?: rlbot.flat.Vector3): rlbot.flat.Vector3 | null;
        /**
         * The Team which the touch belongs to, 0 for blue 1 for orange.
         *
         * @returns number
         */
        team(): number;
        /**
         * The index of the player involved with the touch.
         *
         * @returns number
         */
        playerIndex(): number;
        /**
         * @param flatbuffers.Builder builder
         */
        static startTouch(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset playerNameOffset
         */
        static addPlayerName(builder: flatbuffers.Builder, playerNameOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number gameSeconds
         */
        static addGameSeconds(builder: flatbuffers.Builder, gameSeconds: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset locationOffset
         */
        static addLocation(builder: flatbuffers.Builder, locationOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset normalOffset
         */
        static addNormal(builder: flatbuffers.Builder, normalOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number team
         */
        static addTeam(builder: flatbuffers.Builder, team: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number playerIndex
         */
        static addPlayerIndex(builder: flatbuffers.Builder, playerIndex: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endTouch(builder: flatbuffers.Builder): flatbuffers.Offset;
        static createTouch(builder: flatbuffers.Builder, playerNameOffset: flatbuffers.Offset, gameSeconds: number, locationOffset: flatbuffers.Offset, normalOffset: flatbuffers.Offset, team: number, playerIndex: number): flatbuffers.Offset;
    }
}
/**
 * @constructor
 */
export declare namespace rlbot.flat {
    class ScoreInfo {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns ScoreInfo
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): ScoreInfo;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param ScoreInfo= obj
         * @returns ScoreInfo
         */
        static getRootAsScoreInfo(bb: flatbuffers.ByteBuffer, obj?: ScoreInfo): ScoreInfo;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param ScoreInfo= obj
         * @returns ScoreInfo
         */
        static getSizePrefixedRootAsScoreInfo(bb: flatbuffers.ByteBuffer, obj?: ScoreInfo): ScoreInfo;
        /**
         * @returns number
         */
        score(): number;
        /**
         * @returns number
         */
        goals(): number;
        /**
         * @returns number
         */
        ownGoals(): number;
        /**
         * @returns number
         */
        assists(): number;
        /**
         * @returns number
         */
        saves(): number;
        /**
         * @returns number
         */
        shots(): number;
        /**
         * @returns number
         */
        demolitions(): number;
        /**
         * @param flatbuffers.Builder builder
         */
        static startScoreInfo(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number score
         */
        static addScore(builder: flatbuffers.Builder, score: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number goals
         */
        static addGoals(builder: flatbuffers.Builder, goals: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number ownGoals
         */
        static addOwnGoals(builder: flatbuffers.Builder, ownGoals: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number assists
         */
        static addAssists(builder: flatbuffers.Builder, assists: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number saves
         */
        static addSaves(builder: flatbuffers.Builder, saves: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number shots
         */
        static addShots(builder: flatbuffers.Builder, shots: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number demolitions
         */
        static addDemolitions(builder: flatbuffers.Builder, demolitions: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endScoreInfo(builder: flatbuffers.Builder): flatbuffers.Offset;
        static createScoreInfo(builder: flatbuffers.Builder, score: number, goals: number, ownGoals: number, assists: number, saves: number, shots: number, demolitions: number): flatbuffers.Offset;
    }
}
/**
 * @constructor
 */
export declare namespace rlbot.flat {
    class Physics {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns Physics
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): Physics;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param Physics= obj
         * @returns Physics
         */
        static getRootAsPhysics(bb: flatbuffers.ByteBuffer, obj?: Physics): Physics;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param Physics= obj
         * @returns Physics
         */
        static getSizePrefixedRootAsPhysics(bb: flatbuffers.ByteBuffer, obj?: Physics): Physics;
        /**
         * @param rlbot.flat.Vector3= obj
         * @returns rlbot.flat.Vector3|null
         */
        location(obj?: rlbot.flat.Vector3): rlbot.flat.Vector3 | null;
        /**
         * @param rlbot.flat.Rotator= obj
         * @returns rlbot.flat.Rotator|null
         */
        rotation(obj?: rlbot.flat.Rotator): rlbot.flat.Rotator | null;
        /**
         * @param rlbot.flat.Vector3= obj
         * @returns rlbot.flat.Vector3|null
         */
        velocity(obj?: rlbot.flat.Vector3): rlbot.flat.Vector3 | null;
        /**
         * @param rlbot.flat.Vector3= obj
         * @returns rlbot.flat.Vector3|null
         */
        angularVelocity(obj?: rlbot.flat.Vector3): rlbot.flat.Vector3 | null;
        /**
         * @param flatbuffers.Builder builder
         */
        static startPhysics(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset locationOffset
         */
        static addLocation(builder: flatbuffers.Builder, locationOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset rotationOffset
         */
        static addRotation(builder: flatbuffers.Builder, rotationOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset velocityOffset
         */
        static addVelocity(builder: flatbuffers.Builder, velocityOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset angularVelocityOffset
         */
        static addAngularVelocity(builder: flatbuffers.Builder, angularVelocityOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endPhysics(builder: flatbuffers.Builder): flatbuffers.Offset;
        static createPhysics(builder: flatbuffers.Builder, locationOffset: flatbuffers.Offset, rotationOffset: flatbuffers.Offset, velocityOffset: flatbuffers.Offset, angularVelocityOffset: flatbuffers.Offset): flatbuffers.Offset;
    }
}
/**
 * @constructor
 */
export declare namespace rlbot.flat {
    class PlayerInfo {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns PlayerInfo
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): PlayerInfo;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param PlayerInfo= obj
         * @returns PlayerInfo
         */
        static getRootAsPlayerInfo(bb: flatbuffers.ByteBuffer, obj?: PlayerInfo): PlayerInfo;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param PlayerInfo= obj
         * @returns PlayerInfo
         */
        static getSizePrefixedRootAsPlayerInfo(bb: flatbuffers.ByteBuffer, obj?: PlayerInfo): PlayerInfo;
        /**
         * @param rlbot.flat.Physics= obj
         * @returns rlbot.flat.Physics|null
         */
        physics(obj?: rlbot.flat.Physics): rlbot.flat.Physics | null;
        /**
         * @param rlbot.flat.ScoreInfo= obj
         * @returns rlbot.flat.ScoreInfo|null
         */
        scoreInfo(obj?: rlbot.flat.ScoreInfo): rlbot.flat.ScoreInfo | null;
        /**
         * @returns boolean
         */
        isDemolished(): boolean;
        /**
         * True if your wheels are on the ground, the wall, or the ceiling. False if you're midair or turtling.
         *
         * @returns boolean
         */
        hasWheelContact(): boolean;
        /**
         * @returns boolean
         */
        isSupersonic(): boolean;
        /**
         * @returns boolean
         */
        isBot(): boolean;
        /**
         * True if the player has jumped. Falling off the ceiling / driving off the goal post does not count.
         *
         * @returns boolean
         */
        jumped(): boolean;
        /**
         *  True if player has double jumped. False does not mean you have a jump remaining, because the
         *  aerial timer can run out, and that doesn't affect this flag.
         *
         * @returns boolean
         */
        doubleJumped(): boolean;
        /**
         * @param flatbuffers.Encoding= optionalEncoding
         * @returns string|Uint8Array|null
         */
        name(): string | null;
        name(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
        /**
         * @returns number
         */
        team(): number;
        /**
         * @returns number
         */
        boost(): number;
        /**
         * @param rlbot.flat.BoxShape= obj
         * @returns rlbot.flat.BoxShape|null
         */
        hitbox(obj?: rlbot.flat.BoxShape): rlbot.flat.BoxShape | null;
        /**
         * @param rlbot.flat.Vector3= obj
         * @returns rlbot.flat.Vector3|null
         */
        hitboxOffset(obj?: rlbot.flat.Vector3): rlbot.flat.Vector3 | null;
        /**
         * In the case where the requested player index is not available, spawnId will help
         * the framework figure out what index was actually assigned to this player instead.
         *
         * @returns number
         */
        spawnId(): number;
        /**
         * @param flatbuffers.Builder builder
         */
        static startPlayerInfo(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset physicsOffset
         */
        static addPhysics(builder: flatbuffers.Builder, physicsOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset scoreInfoOffset
         */
        static addScoreInfo(builder: flatbuffers.Builder, scoreInfoOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param boolean isDemolished
         */
        static addIsDemolished(builder: flatbuffers.Builder, isDemolished: boolean): void;
        /**
         * @param flatbuffers.Builder builder
         * @param boolean hasWheelContact
         */
        static addHasWheelContact(builder: flatbuffers.Builder, hasWheelContact: boolean): void;
        /**
         * @param flatbuffers.Builder builder
         * @param boolean isSupersonic
         */
        static addIsSupersonic(builder: flatbuffers.Builder, isSupersonic: boolean): void;
        /**
         * @param flatbuffers.Builder builder
         * @param boolean isBot
         */
        static addIsBot(builder: flatbuffers.Builder, isBot: boolean): void;
        /**
         * @param flatbuffers.Builder builder
         * @param boolean jumped
         */
        static addJumped(builder: flatbuffers.Builder, jumped: boolean): void;
        /**
         * @param flatbuffers.Builder builder
         * @param boolean doubleJumped
         */
        static addDoubleJumped(builder: flatbuffers.Builder, doubleJumped: boolean): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset nameOffset
         */
        static addName(builder: flatbuffers.Builder, nameOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number team
         */
        static addTeam(builder: flatbuffers.Builder, team: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number boost
         */
        static addBoost(builder: flatbuffers.Builder, boost: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset hitboxOffset
         */
        static addHitbox(builder: flatbuffers.Builder, hitboxOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset hitboxOffsetOffset
         */
        static addHitboxOffset(builder: flatbuffers.Builder, hitboxOffsetOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number spawnId
         */
        static addSpawnId(builder: flatbuffers.Builder, spawnId: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endPlayerInfo(builder: flatbuffers.Builder): flatbuffers.Offset;
        static createPlayerInfo(builder: flatbuffers.Builder, physicsOffset: flatbuffers.Offset, scoreInfoOffset: flatbuffers.Offset, isDemolished: boolean, hasWheelContact: boolean, isSupersonic: boolean, isBot: boolean, jumped: boolean, doubleJumped: boolean, nameOffset: flatbuffers.Offset, team: number, boost: number, hitboxOffset: flatbuffers.Offset, hitboxOffsetOffset: flatbuffers.Offset, spawnId: number): flatbuffers.Offset;
    }
}
/**
 * @constructor
 */
export declare namespace rlbot.flat {
    class DropShotBallInfo {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns DropShotBallInfo
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): DropShotBallInfo;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param DropShotBallInfo= obj
         * @returns DropShotBallInfo
         */
        static getRootAsDropShotBallInfo(bb: flatbuffers.ByteBuffer, obj?: DropShotBallInfo): DropShotBallInfo;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param DropShotBallInfo= obj
         * @returns DropShotBallInfo
         */
        static getSizePrefixedRootAsDropShotBallInfo(bb: flatbuffers.ByteBuffer, obj?: DropShotBallInfo): DropShotBallInfo;
        /**
         * @returns number
         */
        absorbedForce(): number;
        /**
         * @returns number
         */
        damageIndex(): number;
        /**
         * @returns number
         */
        forceAccumRecent(): number;
        /**
         * @param flatbuffers.Builder builder
         */
        static startDropShotBallInfo(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number absorbedForce
         */
        static addAbsorbedForce(builder: flatbuffers.Builder, absorbedForce: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number damageIndex
         */
        static addDamageIndex(builder: flatbuffers.Builder, damageIndex: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number forceAccumRecent
         */
        static addForceAccumRecent(builder: flatbuffers.Builder, forceAccumRecent: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endDropShotBallInfo(builder: flatbuffers.Builder): flatbuffers.Offset;
        static createDropShotBallInfo(builder: flatbuffers.Builder, absorbedForce: number, damageIndex: number, forceAccumRecent: number): flatbuffers.Offset;
    }
}
/**
 * @constructor
 */
export declare namespace rlbot.flat {
    class BallInfo {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns BallInfo
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): BallInfo;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param BallInfo= obj
         * @returns BallInfo
         */
        static getRootAsBallInfo(bb: flatbuffers.ByteBuffer, obj?: BallInfo): BallInfo;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param BallInfo= obj
         * @returns BallInfo
         */
        static getSizePrefixedRootAsBallInfo(bb: flatbuffers.ByteBuffer, obj?: BallInfo): BallInfo;
        /**
         * @param rlbot.flat.Physics= obj
         * @returns rlbot.flat.Physics|null
         */
        physics(obj?: rlbot.flat.Physics): rlbot.flat.Physics | null;
        /**
         * @param rlbot.flat.Touch= obj
         * @returns rlbot.flat.Touch|null
         */
        latestTouch(obj?: rlbot.flat.Touch): rlbot.flat.Touch | null;
        /**
         * @param rlbot.flat.DropShotBallInfo= obj
         * @returns rlbot.flat.DropShotBallInfo|null
         */
        dropShotInfo(obj?: rlbot.flat.DropShotBallInfo): rlbot.flat.DropShotBallInfo | null;
        /**
         * @returns rlbot.flat.CollisionShape
         */
        shapeType(): rlbot.flat.CollisionShape;
        /**
         * @param flatbuffers.Table obj
         * @returns ?flatbuffers.Table
         */
        shape<T extends flatbuffers.Table>(obj: T): T | null;
        /**
         * @param flatbuffers.Builder builder
         */
        static startBallInfo(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset physicsOffset
         */
        static addPhysics(builder: flatbuffers.Builder, physicsOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset latestTouchOffset
         */
        static addLatestTouch(builder: flatbuffers.Builder, latestTouchOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset dropShotInfoOffset
         */
        static addDropShotInfo(builder: flatbuffers.Builder, dropShotInfoOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param rlbot.flat.CollisionShape shapeType
         */
        static addShapeType(builder: flatbuffers.Builder, shapeType: rlbot.flat.CollisionShape): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset shapeOffset
         */
        static addShape(builder: flatbuffers.Builder, shapeOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endBallInfo(builder: flatbuffers.Builder): flatbuffers.Offset;
        static createBallInfo(builder: flatbuffers.Builder, physicsOffset: flatbuffers.Offset, latestTouchOffset: flatbuffers.Offset, dropShotInfoOffset: flatbuffers.Offset, shapeType: rlbot.flat.CollisionShape, shapeOffset: flatbuffers.Offset): flatbuffers.Offset;
    }
}
/**
 * @constructor
 */
export declare namespace rlbot.flat {
    class BoostPadState {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns BoostPadState
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): BoostPadState;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param BoostPadState= obj
         * @returns BoostPadState
         */
        static getRootAsBoostPadState(bb: flatbuffers.ByteBuffer, obj?: BoostPadState): BoostPadState;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param BoostPadState= obj
         * @returns BoostPadState
         */
        static getSizePrefixedRootAsBoostPadState(bb: flatbuffers.ByteBuffer, obj?: BoostPadState): BoostPadState;
        /**
         * True if the boost can be picked up
         *
         * @returns boolean
         */
        isActive(): boolean;
        /**
         * The number of seconds since the boost has been picked up, or 0.0 if the boost is active.
         *
         * @returns number
         */
        timer(): number;
        /**
         * @param flatbuffers.Builder builder
         */
        static startBoostPadState(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @param boolean isActive
         */
        static addIsActive(builder: flatbuffers.Builder, isActive: boolean): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number timer
         */
        static addTimer(builder: flatbuffers.Builder, timer: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endBoostPadState(builder: flatbuffers.Builder): flatbuffers.Offset;
        static createBoostPadState(builder: flatbuffers.Builder, isActive: boolean, timer: number): flatbuffers.Offset;
    }
}
/**
 * @constructor
 */
export declare namespace rlbot.flat {
    class DropshotTile {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns DropshotTile
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): DropshotTile;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param DropshotTile= obj
         * @returns DropshotTile
         */
        static getRootAsDropshotTile(bb: flatbuffers.ByteBuffer, obj?: DropshotTile): DropshotTile;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param DropshotTile= obj
         * @returns DropshotTile
         */
        static getSizePrefixedRootAsDropshotTile(bb: flatbuffers.ByteBuffer, obj?: DropshotTile): DropshotTile;
        /**
         * The amount of damage the tile has sustained.
         *
         * @returns rlbot.flat.TileState
         */
        tileState(): rlbot.flat.TileState;
        /**
         * @param flatbuffers.Builder builder
         */
        static startDropshotTile(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @param rlbot.flat.TileState tileState
         */
        static addTileState(builder: flatbuffers.Builder, tileState: rlbot.flat.TileState): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endDropshotTile(builder: flatbuffers.Builder): flatbuffers.Offset;
        static createDropshotTile(builder: flatbuffers.Builder, tileState: rlbot.flat.TileState): flatbuffers.Offset;
    }
}
/**
 * @constructor
 */
export declare namespace rlbot.flat {
    class GameInfo {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns GameInfo
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): GameInfo;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param GameInfo= obj
         * @returns GameInfo
         */
        static getRootAsGameInfo(bb: flatbuffers.ByteBuffer, obj?: GameInfo): GameInfo;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param GameInfo= obj
         * @returns GameInfo
         */
        static getSizePrefixedRootAsGameInfo(bb: flatbuffers.ByteBuffer, obj?: GameInfo): GameInfo;
        /**
         * @returns number
         */
        secondsElapsed(): number;
        /**
         * @returns number
         */
        gameTimeRemaining(): number;
        /**
         * @returns boolean
         */
        isOvertime(): boolean;
        /**
         * @returns boolean
         */
        isUnlimitedTime(): boolean;
        /**
         * True when cars are allowed to move, and during the pause menu. False during replays.
         *
         * @returns boolean
         */
        isRoundActive(): boolean;
        /**
         * True when the clock is paused due to kickoff, but false during kickoff countdown. In other words, it is true
         * while cars can move during kickoff. Note that if both players sit still, game clock start and this will become false.
         *
         * @returns boolean
         */
        isKickoffPause(): boolean;
        /**
         * Turns true after final replay, the moment the 'winner' screen appears. Remains true during next match
         * countdown. Turns false again the moment the 'choose team' screen appears.
         *
         * @returns boolean
         */
        isMatchEnded(): boolean;
        /**
         * @returns number
         */
        worldGravityZ(): number;
        /**
         * Game speed multiplier, 1.0 is regular game speed.
         *
         * @returns number
         */
        gameSpeed(): number;
        /**
         * Tracks the number of physics frames the game has computed.
         * May increase by more than one across consecutive packets.
         * Data type will roll over after 207 days at 120Hz.
         *
         * @returns number
         */
        frameNum(): number;
        /**
         * @param flatbuffers.Builder builder
         */
        static startGameInfo(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number secondsElapsed
         */
        static addSecondsElapsed(builder: flatbuffers.Builder, secondsElapsed: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number gameTimeRemaining
         */
        static addGameTimeRemaining(builder: flatbuffers.Builder, gameTimeRemaining: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param boolean isOvertime
         */
        static addIsOvertime(builder: flatbuffers.Builder, isOvertime: boolean): void;
        /**
         * @param flatbuffers.Builder builder
         * @param boolean isUnlimitedTime
         */
        static addIsUnlimitedTime(builder: flatbuffers.Builder, isUnlimitedTime: boolean): void;
        /**
         * @param flatbuffers.Builder builder
         * @param boolean isRoundActive
         */
        static addIsRoundActive(builder: flatbuffers.Builder, isRoundActive: boolean): void;
        /**
         * @param flatbuffers.Builder builder
         * @param boolean isKickoffPause
         */
        static addIsKickoffPause(builder: flatbuffers.Builder, isKickoffPause: boolean): void;
        /**
         * @param flatbuffers.Builder builder
         * @param boolean isMatchEnded
         */
        static addIsMatchEnded(builder: flatbuffers.Builder, isMatchEnded: boolean): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number worldGravityZ
         */
        static addWorldGravityZ(builder: flatbuffers.Builder, worldGravityZ: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number gameSpeed
         */
        static addGameSpeed(builder: flatbuffers.Builder, gameSpeed: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number frameNum
         */
        static addFrameNum(builder: flatbuffers.Builder, frameNum: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endGameInfo(builder: flatbuffers.Builder): flatbuffers.Offset;
        static createGameInfo(builder: flatbuffers.Builder, secondsElapsed: number, gameTimeRemaining: number, isOvertime: boolean, isUnlimitedTime: boolean, isRoundActive: boolean, isKickoffPause: boolean, isMatchEnded: boolean, worldGravityZ: number, gameSpeed: number, frameNum: number): flatbuffers.Offset;
    }
}
/**
 * @constructor
 */
export declare namespace rlbot.flat {
    class TeamInfo {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns TeamInfo
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): TeamInfo;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param TeamInfo= obj
         * @returns TeamInfo
         */
        static getRootAsTeamInfo(bb: flatbuffers.ByteBuffer, obj?: TeamInfo): TeamInfo;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param TeamInfo= obj
         * @returns TeamInfo
         */
        static getSizePrefixedRootAsTeamInfo(bb: flatbuffers.ByteBuffer, obj?: TeamInfo): TeamInfo;
        /**
         * @returns number
         */
        teamIndex(): number;
        /**
         * number of goals scored.
         *
         * @returns number
         */
        score(): number;
        /**
         * @param flatbuffers.Builder builder
         */
        static startTeamInfo(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number teamIndex
         */
        static addTeamIndex(builder: flatbuffers.Builder, teamIndex: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number score
         */
        static addScore(builder: flatbuffers.Builder, score: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endTeamInfo(builder: flatbuffers.Builder): flatbuffers.Offset;
        static createTeamInfo(builder: flatbuffers.Builder, teamIndex: number, score: number): flatbuffers.Offset;
    }
}
/**
 * @constructor
 */
export declare namespace rlbot.flat {
    class GameTickPacket {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns GameTickPacket
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): GameTickPacket;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param GameTickPacket= obj
         * @returns GameTickPacket
         */
        static getRootAsGameTickPacket(bb: flatbuffers.ByteBuffer, obj?: GameTickPacket): GameTickPacket;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param GameTickPacket= obj
         * @returns GameTickPacket
         */
        static getSizePrefixedRootAsGameTickPacket(bb: flatbuffers.ByteBuffer, obj?: GameTickPacket): GameTickPacket;
        /**
         * @param number index
         * @param rlbot.flat.PlayerInfo= obj
         * @returns rlbot.flat.PlayerInfo
         */
        players(index: number, obj?: rlbot.flat.PlayerInfo): rlbot.flat.PlayerInfo | null;
        /**
         * @returns number
         */
        playersLength(): number;
        /**
         * @param number index
         * @param rlbot.flat.BoostPadState= obj
         * @returns rlbot.flat.BoostPadState
         */
        boostPadStates(index: number, obj?: rlbot.flat.BoostPadState): rlbot.flat.BoostPadState | null;
        /**
         * @returns number
         */
        boostPadStatesLength(): number;
        /**
         * @param rlbot.flat.BallInfo= obj
         * @returns rlbot.flat.BallInfo|null
         */
        ball(obj?: rlbot.flat.BallInfo): rlbot.flat.BallInfo | null;
        /**
         * @param rlbot.flat.GameInfo= obj
         * @returns rlbot.flat.GameInfo|null
         */
        gameInfo(obj?: rlbot.flat.GameInfo): rlbot.flat.GameInfo | null;
        /**
         * @param number index
         * @param rlbot.flat.DropshotTile= obj
         * @returns rlbot.flat.DropshotTile
         */
        tileInformation(index: number, obj?: rlbot.flat.DropshotTile): rlbot.flat.DropshotTile | null;
        /**
         * @returns number
         */
        tileInformationLength(): number;
        /**
         * @param number index
         * @param rlbot.flat.TeamInfo= obj
         * @returns rlbot.flat.TeamInfo
         */
        teams(index: number, obj?: rlbot.flat.TeamInfo): rlbot.flat.TeamInfo | null;
        /**
         * @returns number
         */
        teamsLength(): number;
        /**
         * @param flatbuffers.Builder builder
         */
        static startGameTickPacket(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset playersOffset
         */
        static addPlayers(builder: flatbuffers.Builder, playersOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param Array.<flatbuffers.Offset> data
         * @returns flatbuffers.Offset
         */
        static createPlayersVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
        /**
         * @param flatbuffers.Builder builder
         * @param number numElems
         */
        static startPlayersVector(builder: flatbuffers.Builder, numElems: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset boostPadStatesOffset
         */
        static addBoostPadStates(builder: flatbuffers.Builder, boostPadStatesOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param Array.<flatbuffers.Offset> data
         * @returns flatbuffers.Offset
         */
        static createBoostPadStatesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
        /**
         * @param flatbuffers.Builder builder
         * @param number numElems
         */
        static startBoostPadStatesVector(builder: flatbuffers.Builder, numElems: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset ballOffset
         */
        static addBall(builder: flatbuffers.Builder, ballOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset gameInfoOffset
         */
        static addGameInfo(builder: flatbuffers.Builder, gameInfoOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset tileInformationOffset
         */
        static addTileInformation(builder: flatbuffers.Builder, tileInformationOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param Array.<flatbuffers.Offset> data
         * @returns flatbuffers.Offset
         */
        static createTileInformationVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
        /**
         * @param flatbuffers.Builder builder
         * @param number numElems
         */
        static startTileInformationVector(builder: flatbuffers.Builder, numElems: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset teamsOffset
         */
        static addTeams(builder: flatbuffers.Builder, teamsOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param Array.<flatbuffers.Offset> data
         * @returns flatbuffers.Offset
         */
        static createTeamsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
        /**
         * @param flatbuffers.Builder builder
         * @param number numElems
         */
        static startTeamsVector(builder: flatbuffers.Builder, numElems: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endGameTickPacket(builder: flatbuffers.Builder): flatbuffers.Offset;
        static createGameTickPacket(builder: flatbuffers.Builder, playersOffset: flatbuffers.Offset, boostPadStatesOffset: flatbuffers.Offset, ballOffset: flatbuffers.Offset, gameInfoOffset: flatbuffers.Offset, tileInformationOffset: flatbuffers.Offset, teamsOffset: flatbuffers.Offset): flatbuffers.Offset;
    }
}
/**
 * The state of a rigid body in Rocket League's physics engine.
 * This gets updated in time with the physics tick, not the rendering framerate.
 * The frame field will be incremented every time the physics engine ticks.
 *
 * @constructor
 */
export declare namespace rlbot.flat {
    class RigidBodyState {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns RigidBodyState
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): RigidBodyState;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param RigidBodyState= obj
         * @returns RigidBodyState
         */
        static getRootAsRigidBodyState(bb: flatbuffers.ByteBuffer, obj?: RigidBodyState): RigidBodyState;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param RigidBodyState= obj
         * @returns RigidBodyState
         */
        static getSizePrefixedRootAsRigidBodyState(bb: flatbuffers.ByteBuffer, obj?: RigidBodyState): RigidBodyState;
        /**
         * @returns number
         */
        frame(): number;
        /**
         * @param rlbot.flat.Vector3= obj
         * @returns rlbot.flat.Vector3|null
         */
        location(obj?: rlbot.flat.Vector3): rlbot.flat.Vector3 | null;
        /**
         * @param rlbot.flat.Quaternion= obj
         * @returns rlbot.flat.Quaternion|null
         */
        rotation(obj?: rlbot.flat.Quaternion): rlbot.flat.Quaternion | null;
        /**
         * @param rlbot.flat.Vector3= obj
         * @returns rlbot.flat.Vector3|null
         */
        velocity(obj?: rlbot.flat.Vector3): rlbot.flat.Vector3 | null;
        /**
         * @param rlbot.flat.Vector3= obj
         * @returns rlbot.flat.Vector3|null
         */
        angularVelocity(obj?: rlbot.flat.Vector3): rlbot.flat.Vector3 | null;
        /**
         * @param flatbuffers.Builder builder
         */
        static startRigidBodyState(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number frame
         */
        static addFrame(builder: flatbuffers.Builder, frame: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset locationOffset
         */
        static addLocation(builder: flatbuffers.Builder, locationOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset rotationOffset
         */
        static addRotation(builder: flatbuffers.Builder, rotationOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset velocityOffset
         */
        static addVelocity(builder: flatbuffers.Builder, velocityOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset angularVelocityOffset
         */
        static addAngularVelocity(builder: flatbuffers.Builder, angularVelocityOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endRigidBodyState(builder: flatbuffers.Builder): flatbuffers.Offset;
        static createRigidBodyState(builder: flatbuffers.Builder, frame: number, locationOffset: flatbuffers.Offset, rotationOffset: flatbuffers.Offset, velocityOffset: flatbuffers.Offset, angularVelocityOffset: flatbuffers.Offset): flatbuffers.Offset;
    }
}
/**
 * Rigid body state for a player / car in the game. Includes the latest
 * controller input, which is otherwise difficult to correlate with consequences.
 *
 * @constructor
 */
export declare namespace rlbot.flat {
    class PlayerRigidBodyState {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns PlayerRigidBodyState
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): PlayerRigidBodyState;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param PlayerRigidBodyState= obj
         * @returns PlayerRigidBodyState
         */
        static getRootAsPlayerRigidBodyState(bb: flatbuffers.ByteBuffer, obj?: PlayerRigidBodyState): PlayerRigidBodyState;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param PlayerRigidBodyState= obj
         * @returns PlayerRigidBodyState
         */
        static getSizePrefixedRootAsPlayerRigidBodyState(bb: flatbuffers.ByteBuffer, obj?: PlayerRigidBodyState): PlayerRigidBodyState;
        /**
         * @param rlbot.flat.RigidBodyState= obj
         * @returns rlbot.flat.RigidBodyState|null
         */
        state(obj?: rlbot.flat.RigidBodyState): rlbot.flat.RigidBodyState | null;
        /**
         * @param rlbot.flat.ControllerState= obj
         * @returns rlbot.flat.ControllerState|null
         */
        input(obj?: rlbot.flat.ControllerState): rlbot.flat.ControllerState | null;
        /**
         * @param flatbuffers.Builder builder
         */
        static startPlayerRigidBodyState(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset stateOffset
         */
        static addState(builder: flatbuffers.Builder, stateOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset inputOffset
         */
        static addInput(builder: flatbuffers.Builder, inputOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endPlayerRigidBodyState(builder: flatbuffers.Builder): flatbuffers.Offset;
        static createPlayerRigidBodyState(builder: flatbuffers.Builder, stateOffset: flatbuffers.Offset, inputOffset: flatbuffers.Offset): flatbuffers.Offset;
    }
}
/**
 * Rigid body state for the ball.
 *
 * @constructor
 */
export declare namespace rlbot.flat {
    class BallRigidBodyState {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns BallRigidBodyState
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): BallRigidBodyState;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param BallRigidBodyState= obj
         * @returns BallRigidBodyState
         */
        static getRootAsBallRigidBodyState(bb: flatbuffers.ByteBuffer, obj?: BallRigidBodyState): BallRigidBodyState;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param BallRigidBodyState= obj
         * @returns BallRigidBodyState
         */
        static getSizePrefixedRootAsBallRigidBodyState(bb: flatbuffers.ByteBuffer, obj?: BallRigidBodyState): BallRigidBodyState;
        /**
         * @param rlbot.flat.RigidBodyState= obj
         * @returns rlbot.flat.RigidBodyState|null
         */
        state(obj?: rlbot.flat.RigidBodyState): rlbot.flat.RigidBodyState | null;
        /**
         * @param flatbuffers.Builder builder
         */
        static startBallRigidBodyState(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset stateOffset
         */
        static addState(builder: flatbuffers.Builder, stateOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endBallRigidBodyState(builder: flatbuffers.Builder): flatbuffers.Offset;
        static createBallRigidBodyState(builder: flatbuffers.Builder, stateOffset: flatbuffers.Offset): flatbuffers.Offset;
    }
}
/**
 * Contains all rigid body state information.
 *
 * @constructor
 */
export declare namespace rlbot.flat {
    class RigidBodyTick {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns RigidBodyTick
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): RigidBodyTick;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param RigidBodyTick= obj
         * @returns RigidBodyTick
         */
        static getRootAsRigidBodyTick(bb: flatbuffers.ByteBuffer, obj?: RigidBodyTick): RigidBodyTick;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param RigidBodyTick= obj
         * @returns RigidBodyTick
         */
        static getSizePrefixedRootAsRigidBodyTick(bb: flatbuffers.ByteBuffer, obj?: RigidBodyTick): RigidBodyTick;
        /**
         * @param rlbot.flat.BallRigidBodyState= obj
         * @returns rlbot.flat.BallRigidBodyState|null
         */
        ball(obj?: rlbot.flat.BallRigidBodyState): rlbot.flat.BallRigidBodyState | null;
        /**
         * @param number index
         * @param rlbot.flat.PlayerRigidBodyState= obj
         * @returns rlbot.flat.PlayerRigidBodyState
         */
        players(index: number, obj?: rlbot.flat.PlayerRigidBodyState): rlbot.flat.PlayerRigidBodyState | null;
        /**
         * @returns number
         */
        playersLength(): number;
        /**
         * @param flatbuffers.Builder builder
         */
        static startRigidBodyTick(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset ballOffset
         */
        static addBall(builder: flatbuffers.Builder, ballOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset playersOffset
         */
        static addPlayers(builder: flatbuffers.Builder, playersOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param Array.<flatbuffers.Offset> data
         * @returns flatbuffers.Offset
         */
        static createPlayersVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
        /**
         * @param flatbuffers.Builder builder
         * @param number numElems
         */
        static startPlayersVector(builder: flatbuffers.Builder, numElems: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endRigidBodyTick(builder: flatbuffers.Builder): flatbuffers.Offset;
        static createRigidBodyTick(builder: flatbuffers.Builder, ballOffset: flatbuffers.Offset, playersOffset: flatbuffers.Offset): flatbuffers.Offset;
    }
}
/**
 * @constructor
 */
export declare namespace rlbot.flat {
    class GoalInfo {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns GoalInfo
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): GoalInfo;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param GoalInfo= obj
         * @returns GoalInfo
         */
        static getRootAsGoalInfo(bb: flatbuffers.ByteBuffer, obj?: GoalInfo): GoalInfo;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param GoalInfo= obj
         * @returns GoalInfo
         */
        static getSizePrefixedRootAsGoalInfo(bb: flatbuffers.ByteBuffer, obj?: GoalInfo): GoalInfo;
        /**
         * @returns number
         */
        teamNum(): number;
        /**
         * @param rlbot.flat.Vector3= obj
         * @returns rlbot.flat.Vector3|null
         */
        location(obj?: rlbot.flat.Vector3): rlbot.flat.Vector3 | null;
        /**
         * @param rlbot.flat.Vector3= obj
         * @returns rlbot.flat.Vector3|null
         */
        direction(obj?: rlbot.flat.Vector3): rlbot.flat.Vector3 | null;
        /**
         * @returns number
         */
        width(): number;
        /**
         * @returns number
         */
        height(): number;
        /**
         * @param flatbuffers.Builder builder
         */
        static startGoalInfo(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number teamNum
         */
        static addTeamNum(builder: flatbuffers.Builder, teamNum: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset locationOffset
         */
        static addLocation(builder: flatbuffers.Builder, locationOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset directionOffset
         */
        static addDirection(builder: flatbuffers.Builder, directionOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number width
         */
        static addWidth(builder: flatbuffers.Builder, width: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number height
         */
        static addHeight(builder: flatbuffers.Builder, height: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endGoalInfo(builder: flatbuffers.Builder): flatbuffers.Offset;
        static createGoalInfo(builder: flatbuffers.Builder, teamNum: number, locationOffset: flatbuffers.Offset, directionOffset: flatbuffers.Offset, width: number, height: number): flatbuffers.Offset;
    }
}
/**
 * @constructor
 */
export declare namespace rlbot.flat {
    class BoostPad {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns BoostPad
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): BoostPad;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param BoostPad= obj
         * @returns BoostPad
         */
        static getRootAsBoostPad(bb: flatbuffers.ByteBuffer, obj?: BoostPad): BoostPad;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param BoostPad= obj
         * @returns BoostPad
         */
        static getSizePrefixedRootAsBoostPad(bb: flatbuffers.ByteBuffer, obj?: BoostPad): BoostPad;
        /**
         * @param rlbot.flat.Vector3= obj
         * @returns rlbot.flat.Vector3|null
         */
        location(obj?: rlbot.flat.Vector3): rlbot.flat.Vector3 | null;
        /**
         * @returns boolean
         */
        isFullBoost(): boolean;
        /**
         * @param flatbuffers.Builder builder
         */
        static startBoostPad(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset locationOffset
         */
        static addLocation(builder: flatbuffers.Builder, locationOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param boolean isFullBoost
         */
        static addIsFullBoost(builder: flatbuffers.Builder, isFullBoost: boolean): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endBoostPad(builder: flatbuffers.Builder): flatbuffers.Offset;
        static createBoostPad(builder: flatbuffers.Builder, locationOffset: flatbuffers.Offset, isFullBoost: boolean): flatbuffers.Offset;
    }
}
/**
 * @constructor
 */
export declare namespace rlbot.flat {
    class FieldInfo {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns FieldInfo
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): FieldInfo;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param FieldInfo= obj
         * @returns FieldInfo
         */
        static getRootAsFieldInfo(bb: flatbuffers.ByteBuffer, obj?: FieldInfo): FieldInfo;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param FieldInfo= obj
         * @returns FieldInfo
         */
        static getSizePrefixedRootAsFieldInfo(bb: flatbuffers.ByteBuffer, obj?: FieldInfo): FieldInfo;
        /**
         * @param number index
         * @param rlbot.flat.BoostPad= obj
         * @returns rlbot.flat.BoostPad
         */
        boostPads(index: number, obj?: rlbot.flat.BoostPad): rlbot.flat.BoostPad | null;
        /**
         * @returns number
         */
        boostPadsLength(): number;
        /**
         * @param number index
         * @param rlbot.flat.GoalInfo= obj
         * @returns rlbot.flat.GoalInfo
         */
        goals(index: number, obj?: rlbot.flat.GoalInfo): rlbot.flat.GoalInfo | null;
        /**
         * @returns number
         */
        goalsLength(): number;
        /**
         * @param flatbuffers.Builder builder
         */
        static startFieldInfo(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset boostPadsOffset
         */
        static addBoostPads(builder: flatbuffers.Builder, boostPadsOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param Array.<flatbuffers.Offset> data
         * @returns flatbuffers.Offset
         */
        static createBoostPadsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
        /**
         * @param flatbuffers.Builder builder
         * @param number numElems
         */
        static startBoostPadsVector(builder: flatbuffers.Builder, numElems: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset goalsOffset
         */
        static addGoals(builder: flatbuffers.Builder, goalsOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param Array.<flatbuffers.Offset> data
         * @returns flatbuffers.Offset
         */
        static createGoalsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
        /**
         * @param flatbuffers.Builder builder
         * @param number numElems
         */
        static startGoalsVector(builder: flatbuffers.Builder, numElems: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endFieldInfo(builder: flatbuffers.Builder): flatbuffers.Offset;
        static createFieldInfo(builder: flatbuffers.Builder, boostPadsOffset: flatbuffers.Offset, goalsOffset: flatbuffers.Offset): flatbuffers.Offset;
    }
}
/**
 * @constructor
 */
export declare namespace rlbot.flat {
    class Float {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns Float
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): Float;
        /**
         * @returns number
         */
        val(): number;
        /**
         * @param flatbuffers.Builder builder
         * @param number val
         * @returns flatbuffers.Offset
         */
        static createFloat(builder: flatbuffers.Builder, val: number): flatbuffers.Offset;
    }
}
/**
 * @constructor
 */
export declare namespace rlbot.flat {
    class Bool {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns Bool
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): Bool;
        /**
         * @returns boolean
         */
        val(): boolean;
        /**
         * @param flatbuffers.Builder builder
         * @param boolean val
         * @returns flatbuffers.Offset
         */
        static createBool(builder: flatbuffers.Builder, val: boolean): flatbuffers.Offset;
    }
}
/**
 * @constructor
 */
export declare namespace rlbot.flat {
    class Vector3Partial {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns Vector3Partial
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): Vector3Partial;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param Vector3Partial= obj
         * @returns Vector3Partial
         */
        static getRootAsVector3Partial(bb: flatbuffers.ByteBuffer, obj?: Vector3Partial): Vector3Partial;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param Vector3Partial= obj
         * @returns Vector3Partial
         */
        static getSizePrefixedRootAsVector3Partial(bb: flatbuffers.ByteBuffer, obj?: Vector3Partial): Vector3Partial;
        /**
         * @param rlbot.flat.Float= obj
         * @returns rlbot.flat.Float|null
         */
        x(obj?: rlbot.flat.Float): rlbot.flat.Float | null;
        /**
         * @param rlbot.flat.Float= obj
         * @returns rlbot.flat.Float|null
         */
        y(obj?: rlbot.flat.Float): rlbot.flat.Float | null;
        /**
         * @param rlbot.flat.Float= obj
         * @returns rlbot.flat.Float|null
         */
        z(obj?: rlbot.flat.Float): rlbot.flat.Float | null;
        /**
         * @param flatbuffers.Builder builder
         */
        static startVector3Partial(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset xOffset
         */
        static addX(builder: flatbuffers.Builder, xOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset yOffset
         */
        static addY(builder: flatbuffers.Builder, yOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset zOffset
         */
        static addZ(builder: flatbuffers.Builder, zOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endVector3Partial(builder: flatbuffers.Builder): flatbuffers.Offset;
        static createVector3Partial(builder: flatbuffers.Builder, xOffset: flatbuffers.Offset, yOffset: flatbuffers.Offset, zOffset: flatbuffers.Offset): flatbuffers.Offset;
    }
}
/**
 * @constructor
 */
export declare namespace rlbot.flat {
    class RotatorPartial {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns RotatorPartial
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): RotatorPartial;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param RotatorPartial= obj
         * @returns RotatorPartial
         */
        static getRootAsRotatorPartial(bb: flatbuffers.ByteBuffer, obj?: RotatorPartial): RotatorPartial;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param RotatorPartial= obj
         * @returns RotatorPartial
         */
        static getSizePrefixedRootAsRotatorPartial(bb: flatbuffers.ByteBuffer, obj?: RotatorPartial): RotatorPartial;
        /**
         * @param rlbot.flat.Float= obj
         * @returns rlbot.flat.Float|null
         */
        pitch(obj?: rlbot.flat.Float): rlbot.flat.Float | null;
        /**
         * @param rlbot.flat.Float= obj
         * @returns rlbot.flat.Float|null
         */
        yaw(obj?: rlbot.flat.Float): rlbot.flat.Float | null;
        /**
         * @param rlbot.flat.Float= obj
         * @returns rlbot.flat.Float|null
         */
        roll(obj?: rlbot.flat.Float): rlbot.flat.Float | null;
        /**
         * @param flatbuffers.Builder builder
         */
        static startRotatorPartial(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset pitchOffset
         */
        static addPitch(builder: flatbuffers.Builder, pitchOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset yawOffset
         */
        static addYaw(builder: flatbuffers.Builder, yawOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset rollOffset
         */
        static addRoll(builder: flatbuffers.Builder, rollOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endRotatorPartial(builder: flatbuffers.Builder): flatbuffers.Offset;
        static createRotatorPartial(builder: flatbuffers.Builder, pitchOffset: flatbuffers.Offset, yawOffset: flatbuffers.Offset, rollOffset: flatbuffers.Offset): flatbuffers.Offset;
    }
}
/**
 * @constructor
 */
export declare namespace rlbot.flat {
    class DesiredPhysics {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns DesiredPhysics
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): DesiredPhysics;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param DesiredPhysics= obj
         * @returns DesiredPhysics
         */
        static getRootAsDesiredPhysics(bb: flatbuffers.ByteBuffer, obj?: DesiredPhysics): DesiredPhysics;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param DesiredPhysics= obj
         * @returns DesiredPhysics
         */
        static getSizePrefixedRootAsDesiredPhysics(bb: flatbuffers.ByteBuffer, obj?: DesiredPhysics): DesiredPhysics;
        /**
         * @param rlbot.flat.Vector3Partial= obj
         * @returns rlbot.flat.Vector3Partial|null
         */
        location(obj?: rlbot.flat.Vector3Partial): rlbot.flat.Vector3Partial | null;
        /**
         * @param rlbot.flat.RotatorPartial= obj
         * @returns rlbot.flat.RotatorPartial|null
         */
        rotation(obj?: rlbot.flat.RotatorPartial): rlbot.flat.RotatorPartial | null;
        /**
         * @param rlbot.flat.Vector3Partial= obj
         * @returns rlbot.flat.Vector3Partial|null
         */
        velocity(obj?: rlbot.flat.Vector3Partial): rlbot.flat.Vector3Partial | null;
        /**
         * @param rlbot.flat.Vector3Partial= obj
         * @returns rlbot.flat.Vector3Partial|null
         */
        angularVelocity(obj?: rlbot.flat.Vector3Partial): rlbot.flat.Vector3Partial | null;
        /**
         * @param flatbuffers.Builder builder
         */
        static startDesiredPhysics(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset locationOffset
         */
        static addLocation(builder: flatbuffers.Builder, locationOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset rotationOffset
         */
        static addRotation(builder: flatbuffers.Builder, rotationOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset velocityOffset
         */
        static addVelocity(builder: flatbuffers.Builder, velocityOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset angularVelocityOffset
         */
        static addAngularVelocity(builder: flatbuffers.Builder, angularVelocityOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endDesiredPhysics(builder: flatbuffers.Builder): flatbuffers.Offset;
        static createDesiredPhysics(builder: flatbuffers.Builder, locationOffset: flatbuffers.Offset, rotationOffset: flatbuffers.Offset, velocityOffset: flatbuffers.Offset, angularVelocityOffset: flatbuffers.Offset): flatbuffers.Offset;
    }
}
/**
 * @constructor
 */
export declare namespace rlbot.flat {
    class DesiredBallState {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns DesiredBallState
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): DesiredBallState;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param DesiredBallState= obj
         * @returns DesiredBallState
         */
        static getRootAsDesiredBallState(bb: flatbuffers.ByteBuffer, obj?: DesiredBallState): DesiredBallState;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param DesiredBallState= obj
         * @returns DesiredBallState
         */
        static getSizePrefixedRootAsDesiredBallState(bb: flatbuffers.ByteBuffer, obj?: DesiredBallState): DesiredBallState;
        /**
         * @param rlbot.flat.DesiredPhysics= obj
         * @returns rlbot.flat.DesiredPhysics|null
         */
        physics(obj?: rlbot.flat.DesiredPhysics): rlbot.flat.DesiredPhysics | null;
        /**
         * @param flatbuffers.Builder builder
         */
        static startDesiredBallState(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset physicsOffset
         */
        static addPhysics(builder: flatbuffers.Builder, physicsOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endDesiredBallState(builder: flatbuffers.Builder): flatbuffers.Offset;
        static createDesiredBallState(builder: flatbuffers.Builder, physicsOffset: flatbuffers.Offset): flatbuffers.Offset;
    }
}
/**
 * @constructor
 */
export declare namespace rlbot.flat {
    class DesiredCarState {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns DesiredCarState
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): DesiredCarState;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param DesiredCarState= obj
         * @returns DesiredCarState
         */
        static getRootAsDesiredCarState(bb: flatbuffers.ByteBuffer, obj?: DesiredCarState): DesiredCarState;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param DesiredCarState= obj
         * @returns DesiredCarState
         */
        static getSizePrefixedRootAsDesiredCarState(bb: flatbuffers.ByteBuffer, obj?: DesiredCarState): DesiredCarState;
        /**
         * @param rlbot.flat.DesiredPhysics= obj
         * @returns rlbot.flat.DesiredPhysics|null
         */
        physics(obj?: rlbot.flat.DesiredPhysics): rlbot.flat.DesiredPhysics | null;
        /**
         * @param rlbot.flat.Float= obj
         * @returns rlbot.flat.Float|null
         */
        boostAmount(obj?: rlbot.flat.Float): rlbot.flat.Float | null;
        /**
         * @param rlbot.flat.Bool= obj
         * @returns rlbot.flat.Bool|null
         */
        jumped(obj?: rlbot.flat.Bool): rlbot.flat.Bool | null;
        /**
         * @param rlbot.flat.Bool= obj
         * @returns rlbot.flat.Bool|null
         */
        doubleJumped(obj?: rlbot.flat.Bool): rlbot.flat.Bool | null;
        /**
         * @param flatbuffers.Builder builder
         */
        static startDesiredCarState(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset physicsOffset
         */
        static addPhysics(builder: flatbuffers.Builder, physicsOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset boostAmountOffset
         */
        static addBoostAmount(builder: flatbuffers.Builder, boostAmountOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset jumpedOffset
         */
        static addJumped(builder: flatbuffers.Builder, jumpedOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset doubleJumpedOffset
         */
        static addDoubleJumped(builder: flatbuffers.Builder, doubleJumpedOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endDesiredCarState(builder: flatbuffers.Builder): flatbuffers.Offset;
        static createDesiredCarState(builder: flatbuffers.Builder, physicsOffset: flatbuffers.Offset, boostAmountOffset: flatbuffers.Offset, jumpedOffset: flatbuffers.Offset, doubleJumpedOffset: flatbuffers.Offset): flatbuffers.Offset;
    }
}
/**
 * @constructor
 */
export declare namespace rlbot.flat {
    class DesiredBoostState {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns DesiredBoostState
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): DesiredBoostState;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param DesiredBoostState= obj
         * @returns DesiredBoostState
         */
        static getRootAsDesiredBoostState(bb: flatbuffers.ByteBuffer, obj?: DesiredBoostState): DesiredBoostState;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param DesiredBoostState= obj
         * @returns DesiredBoostState
         */
        static getSizePrefixedRootAsDesiredBoostState(bb: flatbuffers.ByteBuffer, obj?: DesiredBoostState): DesiredBoostState;
        /**
         * @param rlbot.flat.Float= obj
         * @returns rlbot.flat.Float|null
         */
        respawnTime(obj?: rlbot.flat.Float): rlbot.flat.Float | null;
        /**
         * @param flatbuffers.Builder builder
         */
        static startDesiredBoostState(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset respawnTimeOffset
         */
        static addRespawnTime(builder: flatbuffers.Builder, respawnTimeOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endDesiredBoostState(builder: flatbuffers.Builder): flatbuffers.Offset;
        static createDesiredBoostState(builder: flatbuffers.Builder, respawnTimeOffset: flatbuffers.Offset): flatbuffers.Offset;
    }
}
/**
 * @constructor
 */
export declare namespace rlbot.flat {
    class DesiredGameInfoState {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns DesiredGameInfoState
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): DesiredGameInfoState;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param DesiredGameInfoState= obj
         * @returns DesiredGameInfoState
         */
        static getRootAsDesiredGameInfoState(bb: flatbuffers.ByteBuffer, obj?: DesiredGameInfoState): DesiredGameInfoState;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param DesiredGameInfoState= obj
         * @returns DesiredGameInfoState
         */
        static getSizePrefixedRootAsDesiredGameInfoState(bb: flatbuffers.ByteBuffer, obj?: DesiredGameInfoState): DesiredGameInfoState;
        /**
         * @param rlbot.flat.Float= obj
         * @returns rlbot.flat.Float|null
         */
        worldGravityZ(obj?: rlbot.flat.Float): rlbot.flat.Float | null;
        /**
         * @param rlbot.flat.Float= obj
         * @returns rlbot.flat.Float|null
         */
        gameSpeed(obj?: rlbot.flat.Float): rlbot.flat.Float | null;
        /**
         * @param rlbot.flat.Bool= obj
         * @returns rlbot.flat.Bool|null
         */
        paused(obj?: rlbot.flat.Bool): rlbot.flat.Bool | null;
        /**
         * @param rlbot.flat.Bool= obj
         * @returns rlbot.flat.Bool|null
         */
        endMatch(obj?: rlbot.flat.Bool): rlbot.flat.Bool | null;
        /**
         * @param flatbuffers.Builder builder
         */
        static startDesiredGameInfoState(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset worldGravityZOffset
         */
        static addWorldGravityZ(builder: flatbuffers.Builder, worldGravityZOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset gameSpeedOffset
         */
        static addGameSpeed(builder: flatbuffers.Builder, gameSpeedOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset pausedOffset
         */
        static addPaused(builder: flatbuffers.Builder, pausedOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset endMatchOffset
         */
        static addEndMatch(builder: flatbuffers.Builder, endMatchOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endDesiredGameInfoState(builder: flatbuffers.Builder): flatbuffers.Offset;
        static createDesiredGameInfoState(builder: flatbuffers.Builder, worldGravityZOffset: flatbuffers.Offset, gameSpeedOffset: flatbuffers.Offset, pausedOffset: flatbuffers.Offset, endMatchOffset: flatbuffers.Offset): flatbuffers.Offset;
    }
}
/**
 * A console command which we will try to execute inside Rocket League.
 * See https://github.com/RLBot/RLBot/wiki/Console-Commands for a list of known commands.
 *
 * @constructor
 */
export declare namespace rlbot.flat {
    class ConsoleCommand {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns ConsoleCommand
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): ConsoleCommand;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param ConsoleCommand= obj
         * @returns ConsoleCommand
         */
        static getRootAsConsoleCommand(bb: flatbuffers.ByteBuffer, obj?: ConsoleCommand): ConsoleCommand;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param ConsoleCommand= obj
         * @returns ConsoleCommand
         */
        static getSizePrefixedRootAsConsoleCommand(bb: flatbuffers.ByteBuffer, obj?: ConsoleCommand): ConsoleCommand;
        /**
         * @param flatbuffers.Encoding= optionalEncoding
         * @returns string|Uint8Array|null
         */
        command(): string | null;
        command(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
        /**
         * @param flatbuffers.Builder builder
         */
        static startConsoleCommand(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset commandOffset
         */
        static addCommand(builder: flatbuffers.Builder, commandOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endConsoleCommand(builder: flatbuffers.Builder): flatbuffers.Offset;
        static createConsoleCommand(builder: flatbuffers.Builder, commandOffset: flatbuffers.Offset): flatbuffers.Offset;
    }
}
/**
 * @constructor
 */
export declare namespace rlbot.flat {
    class DesiredGameState {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns DesiredGameState
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): DesiredGameState;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param DesiredGameState= obj
         * @returns DesiredGameState
         */
        static getRootAsDesiredGameState(bb: flatbuffers.ByteBuffer, obj?: DesiredGameState): DesiredGameState;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param DesiredGameState= obj
         * @returns DesiredGameState
         */
        static getSizePrefixedRootAsDesiredGameState(bb: flatbuffers.ByteBuffer, obj?: DesiredGameState): DesiredGameState;
        /**
         * @param rlbot.flat.DesiredBallState= obj
         * @returns rlbot.flat.DesiredBallState|null
         */
        ballState(obj?: rlbot.flat.DesiredBallState): rlbot.flat.DesiredBallState | null;
        /**
         * @param number index
         * @param rlbot.flat.DesiredCarState= obj
         * @returns rlbot.flat.DesiredCarState
         */
        carStates(index: number, obj?: rlbot.flat.DesiredCarState): rlbot.flat.DesiredCarState | null;
        /**
         * @returns number
         */
        carStatesLength(): number;
        /**
         * @param number index
         * @param rlbot.flat.DesiredBoostState= obj
         * @returns rlbot.flat.DesiredBoostState
         */
        boostStates(index: number, obj?: rlbot.flat.DesiredBoostState): rlbot.flat.DesiredBoostState | null;
        /**
         * @returns number
         */
        boostStatesLength(): number;
        /**
         * @param rlbot.flat.DesiredGameInfoState= obj
         * @returns rlbot.flat.DesiredGameInfoState|null
         */
        gameInfoState(obj?: rlbot.flat.DesiredGameInfoState): rlbot.flat.DesiredGameInfoState | null;
        /**
         * @param number index
         * @param rlbot.flat.ConsoleCommand= obj
         * @returns rlbot.flat.ConsoleCommand
         */
        consoleCommands(index: number, obj?: rlbot.flat.ConsoleCommand): rlbot.flat.ConsoleCommand | null;
        /**
         * @returns number
         */
        consoleCommandsLength(): number;
        /**
         * @param flatbuffers.Builder builder
         */
        static startDesiredGameState(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset ballStateOffset
         */
        static addBallState(builder: flatbuffers.Builder, ballStateOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset carStatesOffset
         */
        static addCarStates(builder: flatbuffers.Builder, carStatesOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param Array.<flatbuffers.Offset> data
         * @returns flatbuffers.Offset
         */
        static createCarStatesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
        /**
         * @param flatbuffers.Builder builder
         * @param number numElems
         */
        static startCarStatesVector(builder: flatbuffers.Builder, numElems: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset boostStatesOffset
         */
        static addBoostStates(builder: flatbuffers.Builder, boostStatesOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param Array.<flatbuffers.Offset> data
         * @returns flatbuffers.Offset
         */
        static createBoostStatesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
        /**
         * @param flatbuffers.Builder builder
         * @param number numElems
         */
        static startBoostStatesVector(builder: flatbuffers.Builder, numElems: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset gameInfoStateOffset
         */
        static addGameInfoState(builder: flatbuffers.Builder, gameInfoStateOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset consoleCommandsOffset
         */
        static addConsoleCommands(builder: flatbuffers.Builder, consoleCommandsOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param Array.<flatbuffers.Offset> data
         * @returns flatbuffers.Offset
         */
        static createConsoleCommandsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
        /**
         * @param flatbuffers.Builder builder
         * @param number numElems
         */
        static startConsoleCommandsVector(builder: flatbuffers.Builder, numElems: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endDesiredGameState(builder: flatbuffers.Builder): flatbuffers.Offset;
        static createDesiredGameState(builder: flatbuffers.Builder, ballStateOffset: flatbuffers.Offset, carStatesOffset: flatbuffers.Offset, boostStatesOffset: flatbuffers.Offset, gameInfoStateOffset: flatbuffers.Offset, consoleCommandsOffset: flatbuffers.Offset): flatbuffers.Offset;
    }
}
/**
 * @constructor
 */
export declare namespace rlbot.flat {
    class Color {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns Color
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): Color;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param Color= obj
         * @returns Color
         */
        static getRootAsColor(bb: flatbuffers.ByteBuffer, obj?: Color): Color;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param Color= obj
         * @returns Color
         */
        static getSizePrefixedRootAsColor(bb: flatbuffers.ByteBuffer, obj?: Color): Color;
        /**
         * @returns number
         */
        a(): number;
        /**
         * @returns number
         */
        r(): number;
        /**
         * @returns number
         */
        g(): number;
        /**
         * @returns number
         */
        b(): number;
        /**
         * @param flatbuffers.Builder builder
         */
        static startColor(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number a
         */
        static addA(builder: flatbuffers.Builder, a: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number r
         */
        static addR(builder: flatbuffers.Builder, r: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number g
         */
        static addG(builder: flatbuffers.Builder, g: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number b
         */
        static addB(builder: flatbuffers.Builder, b: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endColor(builder: flatbuffers.Builder): flatbuffers.Offset;
        static createColor(builder: flatbuffers.Builder, a: number, r: number, g: number, b: number): flatbuffers.Offset;
    }
}
/**
 * @constructor
 */
export declare namespace rlbot.flat {
    class RenderMessage {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns RenderMessage
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): RenderMessage;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param RenderMessage= obj
         * @returns RenderMessage
         */
        static getRootAsRenderMessage(bb: flatbuffers.ByteBuffer, obj?: RenderMessage): RenderMessage;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param RenderMessage= obj
         * @returns RenderMessage
         */
        static getSizePrefixedRootAsRenderMessage(bb: flatbuffers.ByteBuffer, obj?: RenderMessage): RenderMessage;
        /**
         * @returns rlbot.flat.RenderType
         */
        renderType(): rlbot.flat.RenderType;
        /**
         * @param rlbot.flat.Color= obj
         * @returns rlbot.flat.Color|null
         */
        color(obj?: rlbot.flat.Color): rlbot.flat.Color | null;
        /**
         * For 2d renders this only grabs x and y
         *
         * @param rlbot.flat.Vector3= obj
         * @returns rlbot.flat.Vector3|null
         */
        start(obj?: rlbot.flat.Vector3): rlbot.flat.Vector3 | null;
        /**
         * For 2d renders this only grabs x and y
         *
         * @param rlbot.flat.Vector3= obj
         * @returns rlbot.flat.Vector3|null
         */
        end(obj?: rlbot.flat.Vector3): rlbot.flat.Vector3 | null;
        /**
         * Scales the x size of the text/rectangle, is used for rectangles assuming an initial value of 1
         *
         * @returns number
         */
        scaleX(): number;
        /**
         * Scales the y size of the text/rectangle, is used for rectangles assuming an initial value of 1
         *
         * @returns number
         */
        scaleY(): number;
        /**
         * @param flatbuffers.Encoding= optionalEncoding
         * @returns string|Uint8Array|null
         */
        text(): string | null;
        text(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
        /**
         * Rectangles can be filled or just outlines.
         *
         * @returns boolean
         */
        isFilled(): boolean;
        /**
         * @param flatbuffers.Builder builder
         */
        static startRenderMessage(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @param rlbot.flat.RenderType renderType
         */
        static addRenderType(builder: flatbuffers.Builder, renderType: rlbot.flat.RenderType): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset colorOffset
         */
        static addColor(builder: flatbuffers.Builder, colorOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset startOffset
         */
        static addStart(builder: flatbuffers.Builder, startOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset endOffset
         */
        static addEnd(builder: flatbuffers.Builder, endOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number scaleX
         */
        static addScaleX(builder: flatbuffers.Builder, scaleX: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number scaleY
         */
        static addScaleY(builder: flatbuffers.Builder, scaleY: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset textOffset
         */
        static addText(builder: flatbuffers.Builder, textOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param boolean isFilled
         */
        static addIsFilled(builder: flatbuffers.Builder, isFilled: boolean): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endRenderMessage(builder: flatbuffers.Builder): flatbuffers.Offset;
        static createRenderMessage(builder: flatbuffers.Builder, renderType: rlbot.flat.RenderType, colorOffset: flatbuffers.Offset, startOffset: flatbuffers.Offset, endOffset: flatbuffers.Offset, scaleX: number, scaleY: number, textOffset: flatbuffers.Offset, isFilled: boolean): flatbuffers.Offset;
    }
}
/**
 * @constructor
 */
export declare namespace rlbot.flat {
    class RenderGroup {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns RenderGroup
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): RenderGroup;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param RenderGroup= obj
         * @returns RenderGroup
         */
        static getRootAsRenderGroup(bb: flatbuffers.ByteBuffer, obj?: RenderGroup): RenderGroup;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param RenderGroup= obj
         * @returns RenderGroup
         */
        static getSizePrefixedRootAsRenderGroup(bb: flatbuffers.ByteBuffer, obj?: RenderGroup): RenderGroup;
        /**
         * @param number index
         * @param rlbot.flat.RenderMessage= obj
         * @returns rlbot.flat.RenderMessage
         */
        renderMessages(index: number, obj?: rlbot.flat.RenderMessage): rlbot.flat.RenderMessage | null;
        /**
         * @returns number
         */
        renderMessagesLength(): number;
        /**
         * The id of the render group
         *
         * @returns number
         */
        id(): number;
        /**
         * @param flatbuffers.Builder builder
         */
        static startRenderGroup(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset renderMessagesOffset
         */
        static addRenderMessages(builder: flatbuffers.Builder, renderMessagesOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param Array.<flatbuffers.Offset> data
         * @returns flatbuffers.Offset
         */
        static createRenderMessagesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
        /**
         * @param flatbuffers.Builder builder
         * @param number numElems
         */
        static startRenderMessagesVector(builder: flatbuffers.Builder, numElems: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number id
         */
        static addId(builder: flatbuffers.Builder, id: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endRenderGroup(builder: flatbuffers.Builder): flatbuffers.Offset;
        static createRenderGroup(builder: flatbuffers.Builder, renderMessagesOffset: flatbuffers.Offset, id: number): flatbuffers.Offset;
    }
}
/**
 * @constructor
 */
export declare namespace rlbot.flat {
    class QuickChat {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns QuickChat
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): QuickChat;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param QuickChat= obj
         * @returns QuickChat
         */
        static getRootAsQuickChat(bb: flatbuffers.ByteBuffer, obj?: QuickChat): QuickChat;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param QuickChat= obj
         * @returns QuickChat
         */
        static getSizePrefixedRootAsQuickChat(bb: flatbuffers.ByteBuffer, obj?: QuickChat): QuickChat;
        /**
         * @returns rlbot.flat.QuickChatSelection
         */
        quickChatSelection(): rlbot.flat.QuickChatSelection;
        /**
         * The index of the player that sent the quick chat
         *
         * @returns number
         */
        playerIndex(): number;
        /**
         * True if the chat is team only false if everyone can see it.
         *
         * @returns boolean
         */
        teamOnly(): boolean;
        /**
         * @returns number
         */
        messageIndex(): number;
        /**
         * @returns number
         */
        timeStamp(): number;
        /**
         * @param flatbuffers.Builder builder
         */
        static startQuickChat(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @param rlbot.flat.QuickChatSelection quickChatSelection
         */
        static addQuickChatSelection(builder: flatbuffers.Builder, quickChatSelection: rlbot.flat.QuickChatSelection): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number playerIndex
         */
        static addPlayerIndex(builder: flatbuffers.Builder, playerIndex: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param boolean teamOnly
         */
        static addTeamOnly(builder: flatbuffers.Builder, teamOnly: boolean): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number messageIndex
         */
        static addMessageIndex(builder: flatbuffers.Builder, messageIndex: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number timeStamp
         */
        static addTimeStamp(builder: flatbuffers.Builder, timeStamp: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endQuickChat(builder: flatbuffers.Builder): flatbuffers.Offset;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset offset
         */
        static finishQuickChatBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset offset
         */
        static finishSizePrefixedQuickChatBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
        static createQuickChat(builder: flatbuffers.Builder, quickChatSelection: rlbot.flat.QuickChatSelection, playerIndex: number, teamOnly: boolean, messageIndex: number, timeStamp: number): flatbuffers.Offset;
    }
}
/**
 * A minimal version of player data, useful when bandwidth needs to be conserved.
 *
 * @constructor
 */
export declare namespace rlbot.flat {
    class TinyPlayer {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns TinyPlayer
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): TinyPlayer;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param TinyPlayer= obj
         * @returns TinyPlayer
         */
        static getRootAsTinyPlayer(bb: flatbuffers.ByteBuffer, obj?: TinyPlayer): TinyPlayer;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param TinyPlayer= obj
         * @returns TinyPlayer
         */
        static getSizePrefixedRootAsTinyPlayer(bb: flatbuffers.ByteBuffer, obj?: TinyPlayer): TinyPlayer;
        /**
         * @param rlbot.flat.Vector3= obj
         * @returns rlbot.flat.Vector3|null
         */
        location(obj?: rlbot.flat.Vector3): rlbot.flat.Vector3 | null;
        /**
         * @param rlbot.flat.Rotator= obj
         * @returns rlbot.flat.Rotator|null
         */
        rotation(obj?: rlbot.flat.Rotator): rlbot.flat.Rotator | null;
        /**
         * @param rlbot.flat.Vector3= obj
         * @returns rlbot.flat.Vector3|null
         */
        velocity(obj?: rlbot.flat.Vector3): rlbot.flat.Vector3 | null;
        /**
         * @returns boolean
         */
        hasWheelContact(): boolean;
        /**
         * @returns boolean
         */
        isSupersonic(): boolean;
        /**
         * @returns number
         */
        team(): number;
        /**
         * @returns number
         */
        boost(): number;
        /**
         * @param flatbuffers.Builder builder
         */
        static startTinyPlayer(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset locationOffset
         */
        static addLocation(builder: flatbuffers.Builder, locationOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset rotationOffset
         */
        static addRotation(builder: flatbuffers.Builder, rotationOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset velocityOffset
         */
        static addVelocity(builder: flatbuffers.Builder, velocityOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param boolean hasWheelContact
         */
        static addHasWheelContact(builder: flatbuffers.Builder, hasWheelContact: boolean): void;
        /**
         * @param flatbuffers.Builder builder
         * @param boolean isSupersonic
         */
        static addIsSupersonic(builder: flatbuffers.Builder, isSupersonic: boolean): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number team
         */
        static addTeam(builder: flatbuffers.Builder, team: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number boost
         */
        static addBoost(builder: flatbuffers.Builder, boost: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endTinyPlayer(builder: flatbuffers.Builder): flatbuffers.Offset;
        static createTinyPlayer(builder: flatbuffers.Builder, locationOffset: flatbuffers.Offset, rotationOffset: flatbuffers.Offset, velocityOffset: flatbuffers.Offset, hasWheelContact: boolean, isSupersonic: boolean, team: number, boost: number): flatbuffers.Offset;
    }
}
/**
 * A minimal version of the ball, useful when bandwidth needs to be conserved.
 *
 * @constructor
 */
export declare namespace rlbot.flat {
    class TinyBall {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns TinyBall
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): TinyBall;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param TinyBall= obj
         * @returns TinyBall
         */
        static getRootAsTinyBall(bb: flatbuffers.ByteBuffer, obj?: TinyBall): TinyBall;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param TinyBall= obj
         * @returns TinyBall
         */
        static getSizePrefixedRootAsTinyBall(bb: flatbuffers.ByteBuffer, obj?: TinyBall): TinyBall;
        /**
         * @param rlbot.flat.Vector3= obj
         * @returns rlbot.flat.Vector3|null
         */
        location(obj?: rlbot.flat.Vector3): rlbot.flat.Vector3 | null;
        /**
         * @param rlbot.flat.Vector3= obj
         * @returns rlbot.flat.Vector3|null
         */
        velocity(obj?: rlbot.flat.Vector3): rlbot.flat.Vector3 | null;
        /**
         * @param flatbuffers.Builder builder
         */
        static startTinyBall(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset locationOffset
         */
        static addLocation(builder: flatbuffers.Builder, locationOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset velocityOffset
         */
        static addVelocity(builder: flatbuffers.Builder, velocityOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endTinyBall(builder: flatbuffers.Builder): flatbuffers.Offset;
        static createTinyBall(builder: flatbuffers.Builder, locationOffset: flatbuffers.Offset, velocityOffset: flatbuffers.Offset): flatbuffers.Offset;
    }
}
/**
 * A minimal version of the game tick packet, useful when bandwidth needs to be conserved.
 *
 * @constructor
 */
export declare namespace rlbot.flat {
    class TinyPacket {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns TinyPacket
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): TinyPacket;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param TinyPacket= obj
         * @returns TinyPacket
         */
        static getRootAsTinyPacket(bb: flatbuffers.ByteBuffer, obj?: TinyPacket): TinyPacket;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param TinyPacket= obj
         * @returns TinyPacket
         */
        static getSizePrefixedRootAsTinyPacket(bb: flatbuffers.ByteBuffer, obj?: TinyPacket): TinyPacket;
        /**
         * @param number index
         * @param rlbot.flat.TinyPlayer= obj
         * @returns rlbot.flat.TinyPlayer
         */
        players(index: number, obj?: rlbot.flat.TinyPlayer): rlbot.flat.TinyPlayer | null;
        /**
         * @returns number
         */
        playersLength(): number;
        /**
         * @param rlbot.flat.TinyBall= obj
         * @returns rlbot.flat.TinyBall|null
         */
        ball(obj?: rlbot.flat.TinyBall): rlbot.flat.TinyBall | null;
        /**
         * @param flatbuffers.Builder builder
         */
        static startTinyPacket(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset playersOffset
         */
        static addPlayers(builder: flatbuffers.Builder, playersOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param Array.<flatbuffers.Offset> data
         * @returns flatbuffers.Offset
         */
        static createPlayersVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
        /**
         * @param flatbuffers.Builder builder
         * @param number numElems
         */
        static startPlayersVector(builder: flatbuffers.Builder, numElems: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset ballOffset
         */
        static addBall(builder: flatbuffers.Builder, ballOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endTinyPacket(builder: flatbuffers.Builder): flatbuffers.Offset;
        static createTinyPacket(builder: flatbuffers.Builder, playersOffset: flatbuffers.Offset, ballOffset: flatbuffers.Offset): flatbuffers.Offset;
    }
}
/**
 * @constructor
 */
export declare namespace rlbot.flat {
    class PredictionSlice {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns PredictionSlice
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): PredictionSlice;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param PredictionSlice= obj
         * @returns PredictionSlice
         */
        static getRootAsPredictionSlice(bb: flatbuffers.ByteBuffer, obj?: PredictionSlice): PredictionSlice;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param PredictionSlice= obj
         * @returns PredictionSlice
         */
        static getSizePrefixedRootAsPredictionSlice(bb: flatbuffers.ByteBuffer, obj?: PredictionSlice): PredictionSlice;
        /**
         * The moment in game time that this prediction corresponds to.
         * This corresponds to 'secondsElapsed' in the GameInfo table.
         *
         * @returns number
         */
        gameSeconds(): number;
        /**
         * The predicted location and motion of the object.
         *
         * @param rlbot.flat.Physics= obj
         * @returns rlbot.flat.Physics|null
         */
        physics(obj?: rlbot.flat.Physics): rlbot.flat.Physics | null;
        /**
         * @param flatbuffers.Builder builder
         */
        static startPredictionSlice(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number gameSeconds
         */
        static addGameSeconds(builder: flatbuffers.Builder, gameSeconds: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset physicsOffset
         */
        static addPhysics(builder: flatbuffers.Builder, physicsOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endPredictionSlice(builder: flatbuffers.Builder): flatbuffers.Offset;
        static createPredictionSlice(builder: flatbuffers.Builder, gameSeconds: number, physicsOffset: flatbuffers.Offset): flatbuffers.Offset;
    }
}
/**
 * @constructor
 */
export declare namespace rlbot.flat {
    class BallPrediction {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns BallPrediction
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): BallPrediction;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param BallPrediction= obj
         * @returns BallPrediction
         */
        static getRootAsBallPrediction(bb: flatbuffers.ByteBuffer, obj?: BallPrediction): BallPrediction;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param BallPrediction= obj
         * @returns BallPrediction
         */
        static getSizePrefixedRootAsBallPrediction(bb: flatbuffers.ByteBuffer, obj?: BallPrediction): BallPrediction;
        /**
         * A list of places the ball will be at specific times in the future.
         * It is guaranteed to sorted so that time increases with each slice.
         * It is NOT guaranteed to have a consistent amount of time between slices.
         *
         * @param number index
         * @param rlbot.flat.PredictionSlice= obj
         * @returns rlbot.flat.PredictionSlice
         */
        slices(index: number, obj?: rlbot.flat.PredictionSlice): rlbot.flat.PredictionSlice | null;
        /**
         * @returns number
         */
        slicesLength(): number;
        /**
         * @param flatbuffers.Builder builder
         */
        static startBallPrediction(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset slicesOffset
         */
        static addSlices(builder: flatbuffers.Builder, slicesOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param Array.<flatbuffers.Offset> data
         * @returns flatbuffers.Offset
         */
        static createSlicesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
        /**
         * @param flatbuffers.Builder builder
         * @param number numElems
         */
        static startSlicesVector(builder: flatbuffers.Builder, numElems: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endBallPrediction(builder: flatbuffers.Builder): flatbuffers.Offset;
        static createBallPrediction(builder: flatbuffers.Builder, slicesOffset: flatbuffers.Offset): flatbuffers.Offset;
    }
}
/**
 * A bot controlled by the RLBot framework
 *
 * @constructor
 */
export declare namespace rlbot.flat {
    class RLBotPlayer {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns RLBotPlayer
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): RLBotPlayer;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param RLBotPlayer= obj
         * @returns RLBotPlayer
         */
        static getRootAsRLBotPlayer(bb: flatbuffers.ByteBuffer, obj?: RLBotPlayer): RLBotPlayer;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param RLBotPlayer= obj
         * @returns RLBotPlayer
         */
        static getSizePrefixedRootAsRLBotPlayer(bb: flatbuffers.ByteBuffer, obj?: RLBotPlayer): RLBotPlayer;
        /**
         * @param flatbuffers.Builder builder
         */
        static startRLBotPlayer(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endRLBotPlayer(builder: flatbuffers.Builder): flatbuffers.Offset;
        static createRLBotPlayer(builder: flatbuffers.Builder): flatbuffers.Offset;
    }
}
/**
 * A normal human player
 *
 * @constructor
 */
export declare namespace rlbot.flat {
    class HumanPlayer {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns HumanPlayer
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): HumanPlayer;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param HumanPlayer= obj
         * @returns HumanPlayer
         */
        static getRootAsHumanPlayer(bb: flatbuffers.ByteBuffer, obj?: HumanPlayer): HumanPlayer;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param HumanPlayer= obj
         * @returns HumanPlayer
         */
        static getSizePrefixedRootAsHumanPlayer(bb: flatbuffers.ByteBuffer, obj?: HumanPlayer): HumanPlayer;
        /**
         * @param flatbuffers.Builder builder
         */
        static startHumanPlayer(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endHumanPlayer(builder: flatbuffers.Builder): flatbuffers.Offset;
        static createHumanPlayer(builder: flatbuffers.Builder): flatbuffers.Offset;
    }
}
/**
 * A psyonix bot, e.g. All Star bot
 *
 * @constructor
 */
export declare namespace rlbot.flat {
    class PsyonixBotPlayer {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns PsyonixBotPlayer
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): PsyonixBotPlayer;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param PsyonixBotPlayer= obj
         * @returns PsyonixBotPlayer
         */
        static getRootAsPsyonixBotPlayer(bb: flatbuffers.ByteBuffer, obj?: PsyonixBotPlayer): PsyonixBotPlayer;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param PsyonixBotPlayer= obj
         * @returns PsyonixBotPlayer
         */
        static getSizePrefixedRootAsPsyonixBotPlayer(bb: flatbuffers.ByteBuffer, obj?: PsyonixBotPlayer): PsyonixBotPlayer;
        /**
         * @returns number
         */
        botSkill(): number;
        /**
         * @param flatbuffers.Builder builder
         */
        static startPsyonixBotPlayer(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number botSkill
         */
        static addBotSkill(builder: flatbuffers.Builder, botSkill: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endPsyonixBotPlayer(builder: flatbuffers.Builder): flatbuffers.Offset;
        static createPsyonixBotPlayer(builder: flatbuffers.Builder, botSkill: number): flatbuffers.Offset;
    }
}
/**
 * A player that Rocket League treats as human, e.g. has a dedicated camera and can do training mode,
 * but is actually controlled by a bot.
 *
 * @constructor
 */
export declare namespace rlbot.flat {
    class PartyMemberBotPlayer {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns PartyMemberBotPlayer
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): PartyMemberBotPlayer;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param PartyMemberBotPlayer= obj
         * @returns PartyMemberBotPlayer
         */
        static getRootAsPartyMemberBotPlayer(bb: flatbuffers.ByteBuffer, obj?: PartyMemberBotPlayer): PartyMemberBotPlayer;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param PartyMemberBotPlayer= obj
         * @returns PartyMemberBotPlayer
         */
        static getSizePrefixedRootAsPartyMemberBotPlayer(bb: flatbuffers.ByteBuffer, obj?: PartyMemberBotPlayer): PartyMemberBotPlayer;
        /**
         * @param flatbuffers.Builder builder
         */
        static startPartyMemberBotPlayer(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endPartyMemberBotPlayer(builder: flatbuffers.Builder): flatbuffers.Offset;
        static createPartyMemberBotPlayer(builder: flatbuffers.Builder): flatbuffers.Offset;
    }
}
/**
 * The car type, color, and other aspects of the player's appearance.
 * See https://github.com/RLBot/RLBot/wiki/Bot-Customization
 *
 * @constructor
 */
export declare namespace rlbot.flat {
    class PlayerLoadout {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns PlayerLoadout
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): PlayerLoadout;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param PlayerLoadout= obj
         * @returns PlayerLoadout
         */
        static getRootAsPlayerLoadout(bb: flatbuffers.ByteBuffer, obj?: PlayerLoadout): PlayerLoadout;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param PlayerLoadout= obj
         * @returns PlayerLoadout
         */
        static getSizePrefixedRootAsPlayerLoadout(bb: flatbuffers.ByteBuffer, obj?: PlayerLoadout): PlayerLoadout;
        /**
         * @returns number
         */
        teamColorId(): number;
        /**
         * @returns number
         */
        customColorId(): number;
        /**
         * @returns number
         */
        carId(): number;
        /**
         * @returns number
         */
        decalId(): number;
        /**
         * @returns number
         */
        wheelsId(): number;
        /**
         * @returns number
         */
        boostId(): number;
        /**
         * @returns number
         */
        antennaId(): number;
        /**
         * @returns number
         */
        hatId(): number;
        /**
         * @returns number
         */
        paintFinishId(): number;
        /**
         * @returns number
         */
        customFinishId(): number;
        /**
         * @returns number
         */
        engineAudioId(): number;
        /**
         * @returns number
         */
        trailsId(): number;
        /**
         * @returns number
         */
        goalExplosionId(): number;
        /**
         * @param rlbot.flat.LoadoutPaint= obj
         * @returns rlbot.flat.LoadoutPaint|null
         */
        loadoutPaint(obj?: rlbot.flat.LoadoutPaint): rlbot.flat.LoadoutPaint | null;
        /**
         * Sets the primary color of the car to the swatch that most closely matches the provided
         * RGB color value. If set, this overrides teamColorId.
         *
         * @param rlbot.flat.Color= obj
         * @returns rlbot.flat.Color|null
         */
        primaryColorLookup(obj?: rlbot.flat.Color): rlbot.flat.Color | null;
        /**
         * Sets the secondary color of the car to the swatch that most closely matches the provided
         * RGB color value. If set, this overrides customColorId.
         *
         * @param rlbot.flat.Color= obj
         * @returns rlbot.flat.Color|null
         */
        secondaryColorLookup(obj?: rlbot.flat.Color): rlbot.flat.Color | null;
        /**
         * @param flatbuffers.Builder builder
         */
        static startPlayerLoadout(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number teamColorId
         */
        static addTeamColorId(builder: flatbuffers.Builder, teamColorId: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number customColorId
         */
        static addCustomColorId(builder: flatbuffers.Builder, customColorId: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number carId
         */
        static addCarId(builder: flatbuffers.Builder, carId: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number decalId
         */
        static addDecalId(builder: flatbuffers.Builder, decalId: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number wheelsId
         */
        static addWheelsId(builder: flatbuffers.Builder, wheelsId: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number boostId
         */
        static addBoostId(builder: flatbuffers.Builder, boostId: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number antennaId
         */
        static addAntennaId(builder: flatbuffers.Builder, antennaId: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number hatId
         */
        static addHatId(builder: flatbuffers.Builder, hatId: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number paintFinishId
         */
        static addPaintFinishId(builder: flatbuffers.Builder, paintFinishId: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number customFinishId
         */
        static addCustomFinishId(builder: flatbuffers.Builder, customFinishId: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number engineAudioId
         */
        static addEngineAudioId(builder: flatbuffers.Builder, engineAudioId: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number trailsId
         */
        static addTrailsId(builder: flatbuffers.Builder, trailsId: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number goalExplosionId
         */
        static addGoalExplosionId(builder: flatbuffers.Builder, goalExplosionId: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset loadoutPaintOffset
         */
        static addLoadoutPaint(builder: flatbuffers.Builder, loadoutPaintOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset primaryColorLookupOffset
         */
        static addPrimaryColorLookup(builder: flatbuffers.Builder, primaryColorLookupOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset secondaryColorLookupOffset
         */
        static addSecondaryColorLookup(builder: flatbuffers.Builder, secondaryColorLookupOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endPlayerLoadout(builder: flatbuffers.Builder): flatbuffers.Offset;
        static createPlayerLoadout(builder: flatbuffers.Builder, teamColorId: number, customColorId: number, carId: number, decalId: number, wheelsId: number, boostId: number, antennaId: number, hatId: number, paintFinishId: number, customFinishId: number, engineAudioId: number, trailsId: number, goalExplosionId: number, loadoutPaintOffset: flatbuffers.Offset, primaryColorLookupOffset: flatbuffers.Offset, secondaryColorLookupOffset: flatbuffers.Offset): flatbuffers.Offset;
    }
}
/**
 * Specification for 'painted' items. See https://github.com/RLBot/RLBot/wiki/Bot-Customization
 *
 * @constructor
 */
export declare namespace rlbot.flat {
    class LoadoutPaint {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns LoadoutPaint
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): LoadoutPaint;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param LoadoutPaint= obj
         * @returns LoadoutPaint
         */
        static getRootAsLoadoutPaint(bb: flatbuffers.ByteBuffer, obj?: LoadoutPaint): LoadoutPaint;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param LoadoutPaint= obj
         * @returns LoadoutPaint
         */
        static getSizePrefixedRootAsLoadoutPaint(bb: flatbuffers.ByteBuffer, obj?: LoadoutPaint): LoadoutPaint;
        /**
         * @returns number
         */
        carPaintId(): number;
        /**
         * @returns number
         */
        decalPaintId(): number;
        /**
         * @returns number
         */
        wheelsPaintId(): number;
        /**
         * @returns number
         */
        boostPaintId(): number;
        /**
         * @returns number
         */
        antennaPaintId(): number;
        /**
         * @returns number
         */
        hatPaintId(): number;
        /**
         * @returns number
         */
        trailsPaintId(): number;
        /**
         * @returns number
         */
        goalExplosionPaintId(): number;
        /**
         * @param flatbuffers.Builder builder
         */
        static startLoadoutPaint(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number carPaintId
         */
        static addCarPaintId(builder: flatbuffers.Builder, carPaintId: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number decalPaintId
         */
        static addDecalPaintId(builder: flatbuffers.Builder, decalPaintId: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number wheelsPaintId
         */
        static addWheelsPaintId(builder: flatbuffers.Builder, wheelsPaintId: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number boostPaintId
         */
        static addBoostPaintId(builder: flatbuffers.Builder, boostPaintId: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number antennaPaintId
         */
        static addAntennaPaintId(builder: flatbuffers.Builder, antennaPaintId: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number hatPaintId
         */
        static addHatPaintId(builder: flatbuffers.Builder, hatPaintId: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number trailsPaintId
         */
        static addTrailsPaintId(builder: flatbuffers.Builder, trailsPaintId: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number goalExplosionPaintId
         */
        static addGoalExplosionPaintId(builder: flatbuffers.Builder, goalExplosionPaintId: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endLoadoutPaint(builder: flatbuffers.Builder): flatbuffers.Offset;
        static createLoadoutPaint(builder: flatbuffers.Builder, carPaintId: number, decalPaintId: number, wheelsPaintId: number, boostPaintId: number, antennaPaintId: number, hatPaintId: number, trailsPaintId: number, goalExplosionPaintId: number): flatbuffers.Offset;
    }
}
/**
 * @constructor
 */
export declare namespace rlbot.flat {
    class PlayerConfiguration {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns PlayerConfiguration
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): PlayerConfiguration;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param PlayerConfiguration= obj
         * @returns PlayerConfiguration
         */
        static getRootAsPlayerConfiguration(bb: flatbuffers.ByteBuffer, obj?: PlayerConfiguration): PlayerConfiguration;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param PlayerConfiguration= obj
         * @returns PlayerConfiguration
         */
        static getSizePrefixedRootAsPlayerConfiguration(bb: flatbuffers.ByteBuffer, obj?: PlayerConfiguration): PlayerConfiguration;
        /**
         * @returns rlbot.flat.PlayerClass
         */
        varietyType(): rlbot.flat.PlayerClass;
        /**
         * @param flatbuffers.Table obj
         * @returns ?flatbuffers.Table
         */
        variety<T extends flatbuffers.Table>(obj: T): T | null;
        /**
         * @param flatbuffers.Encoding= optionalEncoding
         * @returns string|Uint8Array|null
         */
        name(): string | null;
        name(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
        /**
         * @returns number
         */
        team(): number;
        /**
         * @param rlbot.flat.PlayerLoadout= obj
         * @returns rlbot.flat.PlayerLoadout|null
         */
        loadout(obj?: rlbot.flat.PlayerLoadout): rlbot.flat.PlayerLoadout | null;
        /**
         * In the case where the requested player index is not available, spawnId will help
         * the framework figure out what index was actually assigned to this player instead.
         *
         * @returns number
         */
        spawnId(): number;
        /**
         * @param flatbuffers.Builder builder
         */
        static startPlayerConfiguration(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @param rlbot.flat.PlayerClass varietyType
         */
        static addVarietyType(builder: flatbuffers.Builder, varietyType: rlbot.flat.PlayerClass): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset varietyOffset
         */
        static addVariety(builder: flatbuffers.Builder, varietyOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset nameOffset
         */
        static addName(builder: flatbuffers.Builder, nameOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number team
         */
        static addTeam(builder: flatbuffers.Builder, team: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset loadoutOffset
         */
        static addLoadout(builder: flatbuffers.Builder, loadoutOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number spawnId
         */
        static addSpawnId(builder: flatbuffers.Builder, spawnId: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endPlayerConfiguration(builder: flatbuffers.Builder): flatbuffers.Offset;
        static createPlayerConfiguration(builder: flatbuffers.Builder, varietyType: rlbot.flat.PlayerClass, varietyOffset: flatbuffers.Offset, nameOffset: flatbuffers.Offset, team: number, loadoutOffset: flatbuffers.Offset, spawnId: number): flatbuffers.Offset;
    }
}
/**
 * @constructor
 */
export declare namespace rlbot.flat {
    class MutatorSettings {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns MutatorSettings
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): MutatorSettings;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param MutatorSettings= obj
         * @returns MutatorSettings
         */
        static getRootAsMutatorSettings(bb: flatbuffers.ByteBuffer, obj?: MutatorSettings): MutatorSettings;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param MutatorSettings= obj
         * @returns MutatorSettings
         */
        static getSizePrefixedRootAsMutatorSettings(bb: flatbuffers.ByteBuffer, obj?: MutatorSettings): MutatorSettings;
        /**
         * @returns rlbot.flat.MatchLength
         */
        matchLength(): rlbot.flat.MatchLength;
        /**
         * @returns rlbot.flat.MaxScore
         */
        maxScore(): rlbot.flat.MaxScore;
        /**
         * @returns rlbot.flat.OvertimeOption
         */
        overtimeOption(): rlbot.flat.OvertimeOption;
        /**
         * @returns rlbot.flat.SeriesLengthOption
         */
        seriesLengthOption(): rlbot.flat.SeriesLengthOption;
        /**
         * @returns rlbot.flat.GameSpeedOption
         */
        gameSpeedOption(): rlbot.flat.GameSpeedOption;
        /**
         * @returns rlbot.flat.BallMaxSpeedOption
         */
        ballMaxSpeedOption(): rlbot.flat.BallMaxSpeedOption;
        /**
         * @returns rlbot.flat.BallTypeOption
         */
        ballTypeOption(): rlbot.flat.BallTypeOption;
        /**
         * @returns rlbot.flat.BallWeightOption
         */
        ballWeightOption(): rlbot.flat.BallWeightOption;
        /**
         * @returns rlbot.flat.BallSizeOption
         */
        ballSizeOption(): rlbot.flat.BallSizeOption;
        /**
         * @returns rlbot.flat.BallBouncinessOption
         */
        ballBouncinessOption(): rlbot.flat.BallBouncinessOption;
        /**
         * @returns rlbot.flat.BoostOption
         */
        boostOption(): rlbot.flat.BoostOption;
        /**
         * @returns rlbot.flat.RumbleOption
         */
        rumbleOption(): rlbot.flat.RumbleOption;
        /**
         * @returns rlbot.flat.BoostStrengthOption
         */
        boostStrengthOption(): rlbot.flat.BoostStrengthOption;
        /**
         * @returns rlbot.flat.GravityOption
         */
        gravityOption(): rlbot.flat.GravityOption;
        /**
         * @returns rlbot.flat.DemolishOption
         */
        demolishOption(): rlbot.flat.DemolishOption;
        /**
         * @returns rlbot.flat.RespawnTimeOption
         */
        respawnTimeOption(): rlbot.flat.RespawnTimeOption;
        /**
         * @param flatbuffers.Builder builder
         */
        static startMutatorSettings(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @param rlbot.flat.MatchLength matchLength
         */
        static addMatchLength(builder: flatbuffers.Builder, matchLength: rlbot.flat.MatchLength): void;
        /**
         * @param flatbuffers.Builder builder
         * @param rlbot.flat.MaxScore maxScore
         */
        static addMaxScore(builder: flatbuffers.Builder, maxScore: rlbot.flat.MaxScore): void;
        /**
         * @param flatbuffers.Builder builder
         * @param rlbot.flat.OvertimeOption overtimeOption
         */
        static addOvertimeOption(builder: flatbuffers.Builder, overtimeOption: rlbot.flat.OvertimeOption): void;
        /**
         * @param flatbuffers.Builder builder
         * @param rlbot.flat.SeriesLengthOption seriesLengthOption
         */
        static addSeriesLengthOption(builder: flatbuffers.Builder, seriesLengthOption: rlbot.flat.SeriesLengthOption): void;
        /**
         * @param flatbuffers.Builder builder
         * @param rlbot.flat.GameSpeedOption gameSpeedOption
         */
        static addGameSpeedOption(builder: flatbuffers.Builder, gameSpeedOption: rlbot.flat.GameSpeedOption): void;
        /**
         * @param flatbuffers.Builder builder
         * @param rlbot.flat.BallMaxSpeedOption ballMaxSpeedOption
         */
        static addBallMaxSpeedOption(builder: flatbuffers.Builder, ballMaxSpeedOption: rlbot.flat.BallMaxSpeedOption): void;
        /**
         * @param flatbuffers.Builder builder
         * @param rlbot.flat.BallTypeOption ballTypeOption
         */
        static addBallTypeOption(builder: flatbuffers.Builder, ballTypeOption: rlbot.flat.BallTypeOption): void;
        /**
         * @param flatbuffers.Builder builder
         * @param rlbot.flat.BallWeightOption ballWeightOption
         */
        static addBallWeightOption(builder: flatbuffers.Builder, ballWeightOption: rlbot.flat.BallWeightOption): void;
        /**
         * @param flatbuffers.Builder builder
         * @param rlbot.flat.BallSizeOption ballSizeOption
         */
        static addBallSizeOption(builder: flatbuffers.Builder, ballSizeOption: rlbot.flat.BallSizeOption): void;
        /**
         * @param flatbuffers.Builder builder
         * @param rlbot.flat.BallBouncinessOption ballBouncinessOption
         */
        static addBallBouncinessOption(builder: flatbuffers.Builder, ballBouncinessOption: rlbot.flat.BallBouncinessOption): void;
        /**
         * @param flatbuffers.Builder builder
         * @param rlbot.flat.BoostOption boostOption
         */
        static addBoostOption(builder: flatbuffers.Builder, boostOption: rlbot.flat.BoostOption): void;
        /**
         * @param flatbuffers.Builder builder
         * @param rlbot.flat.RumbleOption rumbleOption
         */
        static addRumbleOption(builder: flatbuffers.Builder, rumbleOption: rlbot.flat.RumbleOption): void;
        /**
         * @param flatbuffers.Builder builder
         * @param rlbot.flat.BoostStrengthOption boostStrengthOption
         */
        static addBoostStrengthOption(builder: flatbuffers.Builder, boostStrengthOption: rlbot.flat.BoostStrengthOption): void;
        /**
         * @param flatbuffers.Builder builder
         * @param rlbot.flat.GravityOption gravityOption
         */
        static addGravityOption(builder: flatbuffers.Builder, gravityOption: rlbot.flat.GravityOption): void;
        /**
         * @param flatbuffers.Builder builder
         * @param rlbot.flat.DemolishOption demolishOption
         */
        static addDemolishOption(builder: flatbuffers.Builder, demolishOption: rlbot.flat.DemolishOption): void;
        /**
         * @param flatbuffers.Builder builder
         * @param rlbot.flat.RespawnTimeOption respawnTimeOption
         */
        static addRespawnTimeOption(builder: flatbuffers.Builder, respawnTimeOption: rlbot.flat.RespawnTimeOption): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endMutatorSettings(builder: flatbuffers.Builder): flatbuffers.Offset;
        static createMutatorSettings(builder: flatbuffers.Builder, matchLength: rlbot.flat.MatchLength, maxScore: rlbot.flat.MaxScore, overtimeOption: rlbot.flat.OvertimeOption, seriesLengthOption: rlbot.flat.SeriesLengthOption, gameSpeedOption: rlbot.flat.GameSpeedOption, ballMaxSpeedOption: rlbot.flat.BallMaxSpeedOption, ballTypeOption: rlbot.flat.BallTypeOption, ballWeightOption: rlbot.flat.BallWeightOption, ballSizeOption: rlbot.flat.BallSizeOption, ballBouncinessOption: rlbot.flat.BallBouncinessOption, boostOption: rlbot.flat.BoostOption, rumbleOption: rlbot.flat.RumbleOption, boostStrengthOption: rlbot.flat.BoostStrengthOption, gravityOption: rlbot.flat.GravityOption, demolishOption: rlbot.flat.DemolishOption, respawnTimeOption: rlbot.flat.RespawnTimeOption): flatbuffers.Offset;
    }
}
/**
 * @constructor
 */
export declare namespace rlbot.flat {
    class MatchSettings {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns MatchSettings
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): MatchSettings;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param MatchSettings= obj
         * @returns MatchSettings
         */
        static getRootAsMatchSettings(bb: flatbuffers.ByteBuffer, obj?: MatchSettings): MatchSettings;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param MatchSettings= obj
         * @returns MatchSettings
         */
        static getSizePrefixedRootAsMatchSettings(bb: flatbuffers.ByteBuffer, obj?: MatchSettings): MatchSettings;
        /**
         * @param number index
         * @param rlbot.flat.PlayerConfiguration= obj
         * @returns rlbot.flat.PlayerConfiguration
         */
        playerConfigurations(index: number, obj?: rlbot.flat.PlayerConfiguration): rlbot.flat.PlayerConfiguration | null;
        /**
         * @returns number
         */
        playerConfigurationsLength(): number;
        /**
         * @returns rlbot.flat.GameMode
         */
        gameMode(): rlbot.flat.GameMode;
        /**
         * @returns rlbot.flat.GameMap
         */
        gameMap(): rlbot.flat.GameMap;
        /**
         * @returns boolean
         */
        skipReplays(): boolean;
        /**
         * @returns boolean
         */
        instantStart(): boolean;
        /**
         * @param rlbot.flat.MutatorSettings= obj
         * @returns rlbot.flat.MutatorSettings|null
         */
        mutatorSettings(obj?: rlbot.flat.MutatorSettings): rlbot.flat.MutatorSettings | null;
        /**
         * @returns rlbot.flat.ExistingMatchBehavior
         */
        existingMatchBehavior(): rlbot.flat.ExistingMatchBehavior;
        /**
         * @returns boolean
         */
        enableLockstep(): boolean;
        /**
         * @returns boolean
         */
        enableRendering(): boolean;
        /**
         * @returns boolean
         */
        enableStateSetting(): boolean;
        /**
         * @returns boolean
         */
        autoSaveReplay(): boolean;
        /**
         * @param flatbuffers.Builder builder
         */
        static startMatchSettings(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset playerConfigurationsOffset
         */
        static addPlayerConfigurations(builder: flatbuffers.Builder, playerConfigurationsOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param Array.<flatbuffers.Offset> data
         * @returns flatbuffers.Offset
         */
        static createPlayerConfigurationsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
        /**
         * @param flatbuffers.Builder builder
         * @param number numElems
         */
        static startPlayerConfigurationsVector(builder: flatbuffers.Builder, numElems: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param rlbot.flat.GameMode gameMode
         */
        static addGameMode(builder: flatbuffers.Builder, gameMode: rlbot.flat.GameMode): void;
        /**
         * @param flatbuffers.Builder builder
         * @param rlbot.flat.GameMap gameMap
         */
        static addGameMap(builder: flatbuffers.Builder, gameMap: rlbot.flat.GameMap): void;
        /**
         * @param flatbuffers.Builder builder
         * @param boolean skipReplays
         */
        static addSkipReplays(builder: flatbuffers.Builder, skipReplays: boolean): void;
        /**
         * @param flatbuffers.Builder builder
         * @param boolean instantStart
         */
        static addInstantStart(builder: flatbuffers.Builder, instantStart: boolean): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset mutatorSettingsOffset
         */
        static addMutatorSettings(builder: flatbuffers.Builder, mutatorSettingsOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param rlbot.flat.ExistingMatchBehavior existingMatchBehavior
         */
        static addExistingMatchBehavior(builder: flatbuffers.Builder, existingMatchBehavior: rlbot.flat.ExistingMatchBehavior): void;
        /**
         * @param flatbuffers.Builder builder
         * @param boolean enableLockstep
         */
        static addEnableLockstep(builder: flatbuffers.Builder, enableLockstep: boolean): void;
        /**
         * @param flatbuffers.Builder builder
         * @param boolean enableRendering
         */
        static addEnableRendering(builder: flatbuffers.Builder, enableRendering: boolean): void;
        /**
         * @param flatbuffers.Builder builder
         * @param boolean enableStateSetting
         */
        static addEnableStateSetting(builder: flatbuffers.Builder, enableStateSetting: boolean): void;
        /**
         * @param flatbuffers.Builder builder
         * @param boolean autoSaveReplay
         */
        static addAutoSaveReplay(builder: flatbuffers.Builder, autoSaveReplay: boolean): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endMatchSettings(builder: flatbuffers.Builder): flatbuffers.Offset;
        static createMatchSettings(builder: flatbuffers.Builder, playerConfigurationsOffset: flatbuffers.Offset, gameMode: rlbot.flat.GameMode, gameMap: rlbot.flat.GameMap, skipReplays: boolean, instantStart: boolean, mutatorSettingsOffset: flatbuffers.Offset, existingMatchBehavior: rlbot.flat.ExistingMatchBehavior, enableLockstep: boolean, enableRendering: boolean, enableStateSetting: boolean, autoSaveReplay: boolean): flatbuffers.Offset;
    }
}
/**
 * @constructor
 */
export declare namespace rlbot.flat {
    class QuickChatMessages {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns QuickChatMessages
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): QuickChatMessages;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param QuickChatMessages= obj
         * @returns QuickChatMessages
         */
        static getRootAsQuickChatMessages(bb: flatbuffers.ByteBuffer, obj?: QuickChatMessages): QuickChatMessages;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param QuickChatMessages= obj
         * @returns QuickChatMessages
         */
        static getSizePrefixedRootAsQuickChatMessages(bb: flatbuffers.ByteBuffer, obj?: QuickChatMessages): QuickChatMessages;
        /**
         * @param number index
         * @param rlbot.flat.QuickChat= obj
         * @returns rlbot.flat.QuickChat
         */
        messages(index: number, obj?: rlbot.flat.QuickChat): rlbot.flat.QuickChat | null;
        /**
         * @returns number
         */
        messagesLength(): number;
        /**
         * @param flatbuffers.Builder builder
         */
        static startQuickChatMessages(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset messagesOffset
         */
        static addMessages(builder: flatbuffers.Builder, messagesOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param Array.<flatbuffers.Offset> data
         * @returns flatbuffers.Offset
         */
        static createMessagesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
        /**
         * @param flatbuffers.Builder builder
         * @param number numElems
         */
        static startMessagesVector(builder: flatbuffers.Builder, numElems: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endQuickChatMessages(builder: flatbuffers.Builder): flatbuffers.Offset;
        static createQuickChatMessages(builder: flatbuffers.Builder, messagesOffset: flatbuffers.Offset): flatbuffers.Offset;
    }
}
/**
 * Sent when connecting to RLBot to indicate what type of messages are desired.
 * This could be sent by a bot, or a bot manager governing several bots, an
 * overlay, or any other utility that connects to the RLBot process.
 *
 * @constructor
 */
export declare namespace rlbot.flat {
    class ReadyMessage {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns ReadyMessage
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): ReadyMessage;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param ReadyMessage= obj
         * @returns ReadyMessage
         */
        static getRootAsReadyMessage(bb: flatbuffers.ByteBuffer, obj?: ReadyMessage): ReadyMessage;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param ReadyMessage= obj
         * @returns ReadyMessage
         */
        static getSizePrefixedRootAsReadyMessage(bb: flatbuffers.ByteBuffer, obj?: ReadyMessage): ReadyMessage;
        /**
         * @returns boolean
         */
        wantsBallPredictions(): boolean;
        /**
         * @returns boolean
         */
        wantsQuickChat(): boolean;
        /**
         * @returns boolean
         */
        wantsGameMessages(): boolean;
        /**
         * @param flatbuffers.Builder builder
         */
        static startReadyMessage(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @param boolean wantsBallPredictions
         */
        static addWantsBallPredictions(builder: flatbuffers.Builder, wantsBallPredictions: boolean): void;
        /**
         * @param flatbuffers.Builder builder
         * @param boolean wantsQuickChat
         */
        static addWantsQuickChat(builder: flatbuffers.Builder, wantsQuickChat: boolean): void;
        /**
         * @param flatbuffers.Builder builder
         * @param boolean wantsGameMessages
         */
        static addWantsGameMessages(builder: flatbuffers.Builder, wantsGameMessages: boolean): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endReadyMessage(builder: flatbuffers.Builder): flatbuffers.Offset;
        static createReadyMessage(builder: flatbuffers.Builder, wantsBallPredictions: boolean, wantsQuickChat: boolean, wantsGameMessages: boolean): flatbuffers.Offset;
    }
}
/**
 * Notification that a player triggers some in-game event, such as:
 *		Win, Loss, TimePlayed;
 *		Shot, Assist, Center, Clear, PoolShot;
 *		Goal, AerialGoal, BicycleGoal, BulletGoal, BackwardsGoal, LongGoal, OvertimeGoal, TurtleGoal;
 *		AerialHit, BicycleHit, BulletHit, !BackwardsHit, JuggleHit, FirstTouch, BallHit;
 *		Save, EpicSave, FreezeSave;
 *		HatTrick, Savior, Playmaker, MVP;
 *		FastestGoal, SlowestGoal, FurthestGoal, OwnGoal;
 *		MostBallTouches, FewestBallTouches, MostBoostPickups, FewestBoostPickups, BoostPickups;
 *		CarTouches, Demolition, Demolish;
 *		LowFive, HighFive;
 *
 * @constructor
 */
export declare namespace rlbot.flat {
    class PlayerStatEvent {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns PlayerStatEvent
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): PlayerStatEvent;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param PlayerStatEvent= obj
         * @returns PlayerStatEvent
         */
        static getRootAsPlayerStatEvent(bb: flatbuffers.ByteBuffer, obj?: PlayerStatEvent): PlayerStatEvent;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param PlayerStatEvent= obj
         * @returns PlayerStatEvent
         */
        static getSizePrefixedRootAsPlayerStatEvent(bb: flatbuffers.ByteBuffer, obj?: PlayerStatEvent): PlayerStatEvent;
        /**
         * index of the player associated with the event
         *
         * @returns number
         */
        playerIndex(): number;
        /**
         * Event type
         *
         * @param flatbuffers.Encoding= optionalEncoding
         * @returns string|Uint8Array|null
         */
        statType(): string | null;
        statType(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
        /**
         * @param flatbuffers.Builder builder
         */
        static startPlayerStatEvent(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number playerIndex
         */
        static addPlayerIndex(builder: flatbuffers.Builder, playerIndex: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset statTypeOffset
         */
        static addStatType(builder: flatbuffers.Builder, statTypeOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endPlayerStatEvent(builder: flatbuffers.Builder): flatbuffers.Offset;
        static createPlayerStatEvent(builder: flatbuffers.Builder, playerIndex: number, statTypeOffset: flatbuffers.Offset): flatbuffers.Offset;
    }
}
/**
 * Notification when the local player is spectating another player.
 *
 * @constructor
 */
export declare namespace rlbot.flat {
    class PlayerSpectate {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns PlayerSpectate
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): PlayerSpectate;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param PlayerSpectate= obj
         * @returns PlayerSpectate
         */
        static getRootAsPlayerSpectate(bb: flatbuffers.ByteBuffer, obj?: PlayerSpectate): PlayerSpectate;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param PlayerSpectate= obj
         * @returns PlayerSpectate
         */
        static getSizePrefixedRootAsPlayerSpectate(bb: flatbuffers.ByteBuffer, obj?: PlayerSpectate): PlayerSpectate;
        /**
         * index of the player that is being spectated. Will be -1 if not spectating anyone.
         *
         * @returns number
         */
        playerIndex(): number;
        /**
         * @param flatbuffers.Builder builder
         */
        static startPlayerSpectate(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number playerIndex
         */
        static addPlayerIndex(builder: flatbuffers.Builder, playerIndex: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endPlayerSpectate(builder: flatbuffers.Builder): flatbuffers.Offset;
        static createPlayerSpectate(builder: flatbuffers.Builder, playerIndex: number): flatbuffers.Offset;
    }
}
/**
 * Rocket League is notifying us that some player has moved their controller. This is an *output*
 *
 * @constructor
 */
export declare namespace rlbot.flat {
    class PlayerInputChange {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns PlayerInputChange
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): PlayerInputChange;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param PlayerInputChange= obj
         * @returns PlayerInputChange
         */
        static getRootAsPlayerInputChange(bb: flatbuffers.ByteBuffer, obj?: PlayerInputChange): PlayerInputChange;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param PlayerInputChange= obj
         * @returns PlayerInputChange
         */
        static getSizePrefixedRootAsPlayerInputChange(bb: flatbuffers.ByteBuffer, obj?: PlayerInputChange): PlayerInputChange;
        /**
         * @returns number
         */
        playerIndex(): number;
        /**
         * @param rlbot.flat.ControllerState= obj
         * @returns rlbot.flat.ControllerState|null
         */
        controllerState(obj?: rlbot.flat.ControllerState): rlbot.flat.ControllerState | null;
        /**
         * @returns number
         */
        dodgeForward(): number;
        /**
         * @returns number
         */
        dodgeRight(): number;
        /**
         * @param flatbuffers.Builder builder
         */
        static startPlayerInputChange(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number playerIndex
         */
        static addPlayerIndex(builder: flatbuffers.Builder, playerIndex: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset controllerStateOffset
         */
        static addControllerState(builder: flatbuffers.Builder, controllerStateOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number dodgeForward
         */
        static addDodgeForward(builder: flatbuffers.Builder, dodgeForward: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number dodgeRight
         */
        static addDodgeRight(builder: flatbuffers.Builder, dodgeRight: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endPlayerInputChange(builder: flatbuffers.Builder): flatbuffers.Offset;
        static createPlayerInputChange(builder: flatbuffers.Builder, playerIndex: number, controllerStateOffset: flatbuffers.Offset, dodgeForward: number, dodgeRight: number): flatbuffers.Offset;
    }
}
/**
 * @constructor
 */
export declare namespace rlbot.flat {
    class GameMessageWrapper {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns GameMessageWrapper
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): GameMessageWrapper;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param GameMessageWrapper= obj
         * @returns GameMessageWrapper
         */
        static getRootAsGameMessageWrapper(bb: flatbuffers.ByteBuffer, obj?: GameMessageWrapper): GameMessageWrapper;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param GameMessageWrapper= obj
         * @returns GameMessageWrapper
         */
        static getSizePrefixedRootAsGameMessageWrapper(bb: flatbuffers.ByteBuffer, obj?: GameMessageWrapper): GameMessageWrapper;
        /**
         * @returns rlbot.flat.GameMessage
         */
        MessageType(): rlbot.flat.GameMessage;
        /**
         * @param flatbuffers.Table obj
         * @returns ?flatbuffers.Table
         */
        Message<T extends flatbuffers.Table>(obj: T): T | null;
        /**
         * @param flatbuffers.Builder builder
         */
        static startGameMessageWrapper(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @param rlbot.flat.GameMessage MessageType
         */
        static addMessageType(builder: flatbuffers.Builder, MessageType: rlbot.flat.GameMessage): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset MessageOffset
         */
        static addMessage(builder: flatbuffers.Builder, MessageOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endGameMessageWrapper(builder: flatbuffers.Builder): flatbuffers.Offset;
        static createGameMessageWrapper(builder: flatbuffers.Builder, MessageType: rlbot.flat.GameMessage, MessageOffset: flatbuffers.Offset): flatbuffers.Offset;
    }
}
/**
 * We have some very small messages that are only a few bytes but potentially sent at high frequency.
 * Bundle them into a packet to reduce the overhead of sending data over TCP.
 *
 * @constructor
 */
export declare namespace rlbot.flat {
    class MessagePacket {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns MessagePacket
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): MessagePacket;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param MessagePacket= obj
         * @returns MessagePacket
         */
        static getRootAsMessagePacket(bb: flatbuffers.ByteBuffer, obj?: MessagePacket): MessagePacket;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param MessagePacket= obj
         * @returns MessagePacket
         */
        static getSizePrefixedRootAsMessagePacket(bb: flatbuffers.ByteBuffer, obj?: MessagePacket): MessagePacket;
        /**
         * @param number index
         * @param rlbot.flat.GameMessageWrapper= obj
         * @returns rlbot.flat.GameMessageWrapper
         */
        messages(index: number, obj?: rlbot.flat.GameMessageWrapper): rlbot.flat.GameMessageWrapper | null;
        /**
         * @returns number
         */
        messagesLength(): number;
        /**
         * @returns number
         */
        gameSeconds(): number;
        /**
         * @returns number
         */
        frameNum(): number;
        /**
         * @param flatbuffers.Builder builder
         */
        static startMessagePacket(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset messagesOffset
         */
        static addMessages(builder: flatbuffers.Builder, messagesOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param Array.<flatbuffers.Offset> data
         * @returns flatbuffers.Offset
         */
        static createMessagesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
        /**
         * @param flatbuffers.Builder builder
         * @param number numElems
         */
        static startMessagesVector(builder: flatbuffers.Builder, numElems: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number gameSeconds
         */
        static addGameSeconds(builder: flatbuffers.Builder, gameSeconds: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number frameNum
         */
        static addFrameNum(builder: flatbuffers.Builder, frameNum: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endMessagePacket(builder: flatbuffers.Builder): flatbuffers.Offset;
        static createMessagePacket(builder: flatbuffers.Builder, messagesOffset: flatbuffers.Offset, gameSeconds: number, frameNum: number): flatbuffers.Offset;
    }
}
//# sourceMappingURL=rlbot_generated.d.ts.map