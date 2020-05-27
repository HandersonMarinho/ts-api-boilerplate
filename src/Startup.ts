import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./Routes";
import { PersonService } from "./Service/PersonService";
import { PersonRepository } from "./Repository/PersonRepository";

class Startup {

  //-----
  private routes: Routes = new Routes(new PersonService(new PersonRepository()));
  //-----

  public app: express.Application;
  public appRoutes: Routes = this.routes;

  constructor() {
    this.app = express();
    this.config();
    this.appRoutes.mount(this.app);
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

}

export default new Startup().app;