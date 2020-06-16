import "reflect-metadata";
import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./Routes";
import container from "./Common/InjectionContainer";

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

    // Init all routes for HTTP interaction.
    container.resolve(Routes).init(this.app);
  }

}

export default new Startup().app;