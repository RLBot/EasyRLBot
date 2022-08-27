import * as flatbuffers from 'flatbuffers';
import { Color, ColorT } from '../../rlbot/flat/color';
import { LoadoutPaint, LoadoutPaintT } from '../../rlbot/flat/loadout-paint';
/**
 * The car type, color, and other aspects of the player's appearance.
 * See https://github.com/RLBot/RLBot/wiki/Bot-Customization
 */
export declare class PlayerLoadout {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PlayerLoadout;
    static getRootAsPlayerLoadout(bb: flatbuffers.ByteBuffer, obj?: PlayerLoadout): PlayerLoadout;
    static getSizePrefixedRootAsPlayerLoadout(bb: flatbuffers.ByteBuffer, obj?: PlayerLoadout): PlayerLoadout;
    teamColorId(): number;
    customColorId(): number;
    carId(): number;
    decalId(): number;
    wheelsId(): number;
    boostId(): number;
    antennaId(): number;
    hatId(): number;
    paintFinishId(): number;
    customFinishId(): number;
    engineAudioId(): number;
    trailsId(): number;
    goalExplosionId(): number;
    loadoutPaint(obj?: LoadoutPaint): LoadoutPaint | null;
    /**
     * Sets the primary color of the car to the swatch that most closely matches the provided
     * RGB color value. If set, this overrides teamColorId.
     */
    primaryColorLookup(obj?: Color): Color | null;
    /**
     * Sets the secondary color of the car to the swatch that most closely matches the provided
     * RGB color value. If set, this overrides customColorId.
     */
    secondaryColorLookup(obj?: Color): Color | null;
    static startPlayerLoadout(builder: flatbuffers.Builder): void;
    static addTeamColorId(builder: flatbuffers.Builder, teamColorId: number): void;
    static addCustomColorId(builder: flatbuffers.Builder, customColorId: number): void;
    static addCarId(builder: flatbuffers.Builder, carId: number): void;
    static addDecalId(builder: flatbuffers.Builder, decalId: number): void;
    static addWheelsId(builder: flatbuffers.Builder, wheelsId: number): void;
    static addBoostId(builder: flatbuffers.Builder, boostId: number): void;
    static addAntennaId(builder: flatbuffers.Builder, antennaId: number): void;
    static addHatId(builder: flatbuffers.Builder, hatId: number): void;
    static addPaintFinishId(builder: flatbuffers.Builder, paintFinishId: number): void;
    static addCustomFinishId(builder: flatbuffers.Builder, customFinishId: number): void;
    static addEngineAudioId(builder: flatbuffers.Builder, engineAudioId: number): void;
    static addTrailsId(builder: flatbuffers.Builder, trailsId: number): void;
    static addGoalExplosionId(builder: flatbuffers.Builder, goalExplosionId: number): void;
    static addLoadoutPaint(builder: flatbuffers.Builder, loadoutPaintOffset: flatbuffers.Offset): void;
    static addPrimaryColorLookup(builder: flatbuffers.Builder, primaryColorLookupOffset: flatbuffers.Offset): void;
    static addSecondaryColorLookup(builder: flatbuffers.Builder, secondaryColorLookupOffset: flatbuffers.Offset): void;
    static endPlayerLoadout(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): PlayerLoadoutT;
    unpackTo(_o: PlayerLoadoutT): void;
}
export declare class PlayerLoadoutT {
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
    loadoutPaint: LoadoutPaintT | null;
    primaryColorLookup: ColorT | null;
    secondaryColorLookup: ColorT | null;
    constructor(teamColorId?: number, customColorId?: number, carId?: number, decalId?: number, wheelsId?: number, boostId?: number, antennaId?: number, hatId?: number, paintFinishId?: number, customFinishId?: number, engineAudioId?: number, trailsId?: number, goalExplosionId?: number, loadoutPaint?: LoadoutPaintT | null, primaryColorLookup?: ColorT | null, secondaryColorLookup?: ColorT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
