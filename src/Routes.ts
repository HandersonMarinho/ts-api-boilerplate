import { injectable, inject } from "tsyringe";
import { Request, Response } from "express";
import { IPersonService } from "./Abstraction/IPersonService";
import { Person } from "./Model/Person";
import { IRoutes } from "./Abstraction/IRoutes";

@injectable()
export class Routes implements IRoutes {

  //
  // Person service reference.
  //
  private personService: IPersonService = null;

  constructor(
    @inject("PersonService") ps: IPersonService
  ) {
    this.personService = ps;
  }

  //
  // Sign all api routes.
  //
  mount(app: any): void {

    app.route("/user/all").get((req: Request, res: Response) => {
      res.json(this.personService.getAll());
    });

    app.route("/user/:id").get((req: Request, res: Response) => {
      res.json(this.personService.getById(parseInt(req.params.id)));
    });

    app.route("/user").post((req: Request, res: Response) => {
      let { firstName, lastName, age } = req.body;
      let person = new Person({ firstName, lastName, age });
      res.status(this.personService.create(person) ? 201 : 400);
      res.json({});
    });

  }

}