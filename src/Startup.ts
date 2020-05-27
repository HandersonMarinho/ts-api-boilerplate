import "reflect-metadata";
import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./Routes";
import { PersonService } from "./Service/PersonService";
import container from "./Common/IocInstaller";

class Startup {

  public app: express.Application;
  private routes: Routes = null;
  public appRoutes: Routes = null;

  constructor() {
    this.app = express();
    this.config();

    let service = container.resolve(PersonService);
    this.routes = new Routes(service);
    this.appRoutes = this.routes;

    this.appRoutes.mount(this.app);
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

}

export default new Startup().app;