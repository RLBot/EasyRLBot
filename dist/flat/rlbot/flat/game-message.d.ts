import { PlayerInputChange } from '../../rlbot/flat/player-input-change';
import { PlayerSpectate } from '../../rlbot/flat/player-spectate';
import { PlayerStatEvent } from '../../rlbot/flat/player-stat-event';
export declare enum GameMessage {
    NONE = 0,
    PlayerStatEvent = 1,
    PlayerSpectate = 2,
    PlayerInputChange = 3
}
export declare function unionToGameMessage(type: GameMessage, accessor: (obj: PlayerInputChange | PlayerSpectate | PlayerStatEvent) => PlayerInputChange | PlayerSpectate | PlayerStatEvent | null): PlayerInputChange | PlayerSpectate | PlayerStatEvent | null;
export declare function unionListToGameMessage(type: GameMessage, accessor: (index: number, obj: PlayerInputChange | PlayerSpectate | PlayerStatEvent) => PlayerInputChange | PlayerSpectate | PlayerStatEvent | null, index: number): PlayerInputChange | PlayerSpectate | PlayerStatEvent | null;
