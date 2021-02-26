import { BotClient } from "./BotClient";
import { GameState } from "./GameState";
declare class GameStateManager {
    client: BotClient;
    private gameState;
    constructor(client: BotClient);
    get(): GameState | null;
    set(newGameState: GameState): void;
}
export { GameStateManager };
//# sourceMappingURL=GameStateManager.d.ts.map