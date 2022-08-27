import "colors";
import * as Net from "net";
import { BotClient } from "./BotClient";
import * as utils from "./utils";

interface BotContainer {
  [botIndex: string]: any;
}

class BotManager {
  ws: Net.Socket;
  bots: BotContainer;
  Bot: any;
  agentPort: number;
  agentIP: string;
  logger: utils.Logger = new utils.Logger("Manager");

  constructor(BotClass: any, agentPort: number, rlbotPort: number = 23234) {
    this.Bot = BotClass;
    this.bots = {};

    this.agentPort = agentPort;
    this.agentIP = "localhost";

    const port = rlbotPort;
    const host = "localhost";

    this.ws = new Net.Socket();

    this.logger.log("Socket", "Connecting...".yellow);
    this.ws.connect({ port, host }, () => {
      this.logger.log("Socket", "Connected".green);
      this.start();
    });
    this.ws.on("error", () => {
      this.logger.log(
        "Socket",
        "Error when connecting to RLBot, make sure RLBot is running.".red
      );
      process.exit(0);
    });
  }

  private async start() {
    let server = Net.createServer((socket) => {
      socket.setEncoding("ascii");
      socket.on("data", (data) => {
        let message = data.toString().split("\n");
        let type = message[0];
        let index: string = message[1];
        switch (type) {
          case "add":
            if (this.bots[index] != undefined) return;
            this.bots[index] = new this.Bot(Number(index), this.ws);
            this.bots[index].logger.enabled = false;

            this.logger.log(
              "AgentConnection",
              ("Added bot with index " + index).green
            );
            break;

          case "remove":
            if (!this.bots[index]) return;
            this.bots[index].kill();
            delete this.bots[index];
            this.logger.log(
              "AgentConnection",
              ("Removed bot with index " + index).red
            );
            break;

          default:
            break;
        }
      });
    });

    let logger = this.logger;

    server.listen(this.agentPort, this.agentIP, function () {
      logger.log("AgentConnection", "Listening to data from Agent");

      server.on("close", function () {
        logger.log("AgentConnection", "Connection closed");
      });

      server.on("error", function (error) {
        logger.log("AgentConnection", "Error: " + error);
      });
    });

    server.on("error", (e: any) => {
      if (e.code == "EADDRINUSE") {
        this.logger.log(
          "AgentConnection",
          "Connection closed, port already in use"
        );
        throw new Error(`Port is already in use: ${this.agentIP}`);
      }
    });
  }
}
export { BotManager };
