import * as flatbuffers from 'flatbuffers';
import { HumanPlayerT } from '../../rlbot/flat/human-player';
import { PartyMemberBotPlayerT } from '../../rlbot/flat/party-member-bot-player';
import { PlayerClass } from '../../rlbot/flat/player-class';
import { PlayerLoadout, PlayerLoadoutT } from '../../rlbot/flat/player-loadout';
import { PsyonixBotPlayerT } from '../../rlbot/flat/psyonix-bot-player';
import { RLBotPlayerT } from '../../rlbot/flat/rlbot-player';
export declare class PlayerConfiguration {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PlayerConfiguration;
    static getRootAsPlayerConfiguration(bb: flatbuffers.ByteBuffer, obj?: PlayerConfiguration): PlayerConfiguration;
    static getSizePrefixedRootAsPlayerConfiguration(bb: flatbuffers.ByteBuffer, obj?: PlayerConfiguration): PlayerConfiguration;
    varietyType(): PlayerClass;
    variety<T extends flatbuffers.Table>(obj: any): any | null;
    name(): string | null;
    name(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    team(): number;
    loadout(obj?: PlayerLoadout): PlayerLoadout | null;
    /**
     * In the case where the requested player index is not available, spawnId will help
     * the framework figure out what index was actually assigned to this player instead.
     */
    spawnId(): number;
    static startPlayerConfiguration(builder: flatbuffers.Builder): void;
    static addVarietyType(builder: flatbuffers.Builder, varietyType: PlayerClass): void;
    static addVariety(builder: flatbuffers.Builder, varietyOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, nameOffset: flatbuffers.Offset): void;
    static addTeam(builder: flatbuffers.Builder, team: number): void;
    static addLoadout(builder: flatbuffers.Builder, loadoutOffset: flatbuffers.Offset): void;
    static addSpawnId(builder: flatbuffers.Builder, spawnId: number): void;
    static endPlayerConfiguration(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): PlayerConfigurationT;
    unpackTo(_o: PlayerConfigurationT): void;
}
export declare class PlayerConfigurationT {
    varietyType: PlayerClass;
    variety: HumanPlayerT | PartyMemberBotPlayerT | PsyonixBotPlayerT | RLBotPlayerT | null;
    name: string | Uint8Array | null;
    team: number;
    loadout: PlayerLoadoutT | null;
    spawnId: number;
    constructor(varietyType?: PlayerClass, variety?: HumanPlayerT | PartyMemberBotPlayerT | PsyonixBotPlayerT | RLBotPlayerT | null, name?: string | Uint8Array | null, team?: number, loadout?: PlayerLoadoutT | null, spawnId?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
