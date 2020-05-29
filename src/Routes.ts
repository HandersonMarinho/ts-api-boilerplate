import { injectable, inject } from "tsyringe";
import { IRoutes } from "./Abstraction/IRoutes";
import { PersonController } from "./Controller/PersonController";

@injectable()
export class Routes implements IRoutes {

  //
  // Person service reference.
  //
  private personController: PersonController = null;

  constructor(
    @inject("PersonController") personController: PersonController
  ) {
    this.personController = personController;
  }

  //
  // Initializes all application routes.
  //
  init(app: any): void {
    this.personController.mountRoutes(app);
  }

}