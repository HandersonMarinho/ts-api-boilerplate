import "reflect-metadata";
import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./Routes";
import container from "./Common/IocInstaller";

class Startup {

  //
  // Express server instance.
  //
  public app: express.Application;

  constructor() {
    
    // Express server configuration.
    this.app = express();
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));

    // Mount all routes for HTTP interaction.
    container.resolve(Routes).mount(this.app);
  }

}

export default new Startup().app;