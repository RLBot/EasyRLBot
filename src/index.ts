import { BotClient as Client } from "./BotClient";
import { BotManager as Manager } from "./BotManager";
import { flatstructs } from "./utils";
import quickChats from "./QuickChats";
import * as renderStuff from "./RenderManager";
import * as controllerStuff from "./ControllerManager";
import * as gameStateStuff from "./GameState";

module.exports = {
  Client,
  Manager,
  quickChats,
  ...flatstructs,
  ...controllerStuff,
  ...renderStuff,
  ...gameStateStuff,
};
