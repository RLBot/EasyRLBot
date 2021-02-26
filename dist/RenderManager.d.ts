import { flatbuffers } from "flatbuffers";
import { BotClient } from "./BotClient";
import { Vector3 } from "./GameState";
declare class Color {
    alpha: number;
    red: number;
    green: number;
    blue: number;
    constructor(alpha: number, red: number, green: number, blue: number);
    convertToFlat(builder: flatbuffers.Builder): number;
}
declare class RenderManager {
    client: BotClient;
    builder: flatbuffers.Builder | null;
    index: number;
    Color: typeof Color;
    renderList: flatbuffers.Offset[];
    groupID: string;
    constructor(botClient: BotClient);
    beginRendering(groupID: string): void;
    endRendering(): void;
    drawString2D(x: number, y: number, scaleX: number, scaleY: number, text: string, color: Color): void;
    drawString3D(vector: Vector3, scaleX: number, scaleY: number, text: string, color: Color): void;
    drawLine2D_3D(x: number, y: number, end: Vector3, color: Vector3): void;
    drawLine3D(start: Vector3, end: Vector3, color: Color): void;
    drawRect2D(x: number, y: number, width: number, height: number, filled: boolean, color: Color): void;
    drawRect3D(vector: Vector3, width: number, height: number, filled: boolean, color: Color, centered: Boolean): void;
    black(): Color;
    white(): Color;
    gray(): Color;
    blue(): Color;
    red(): Color;
    green(): Color;
    lime(): Color;
    yellow(): Color;
    orange(): Color;
    cyan(): Color;
    pink(): Color;
    purple(): Color;
    teal(): Color;
}
export { RenderManager, Color };
//# sourceMappingURL=RenderManager.d.ts.map