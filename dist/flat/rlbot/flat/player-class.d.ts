import { HumanPlayer } from '../../rlbot/flat/human-player';
import { PartyMemberBotPlayer } from '../../rlbot/flat/party-member-bot-player';
import { PsyonixBotPlayer } from '../../rlbot/flat/psyonix-bot-player';
import { RLBotPlayer } from '../../rlbot/flat/rlbot-player';
export declare enum PlayerClass {
    NONE = 0,
    RLBotPlayer = 1,
    HumanPlayer = 2,
    PsyonixBotPlayer = 3,
    PartyMemberBotPlayer = 4
}
export declare function unionToPlayerClass(type: PlayerClass, accessor: (obj: HumanPlayer | PartyMemberBotPlayer | PsyonixBotPlayer | RLBotPlayer) => HumanPlayer | PartyMemberBotPlayer | PsyonixBotPlayer | RLBotPlayer | null): HumanPlayer | PartyMemberBotPlayer | PsyonixBotPlayer | RLBotPlayer | null;
export declare function unionListToPlayerClass(type: PlayerClass, accessor: (index: number, obj: HumanPlayer | PartyMemberBotPlayer | PsyonixBotPlayer | RLBotPlayer) => HumanPlayer | PartyMemberBotPlayer | PsyonixBotPlayer | RLBotPlayer | null, index: number): HumanPlayer | PartyMemberBotPlayer | PsyonixBotPlayer | RLBotPlayer | null;
