/// <reference types="node" />
import "colors";
import * as Net from "net";
import * as utils from "./utils";
interface BotContainer {
    [botIndex: string]: any;
}
declare class BotManager {
    ws: Net.Socket;
    bots: BotContainer;
    Bot: any;
    agentPort: number;
    agentIP: string;
    logger: utils.Logger;
    constructor(BotClass: any, agentPort: number);
    private start;
}
export { BotManager };
