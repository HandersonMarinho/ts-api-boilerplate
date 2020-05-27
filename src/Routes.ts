import { Request, Response } from "express";
import { IPersonService } from "./Abstraction/IPersonService";
import { Person } from "./Model/Person";

export class Routes {

  private personService: IPersonService = null;

  constructor(pService: IPersonService) {
    this.personService = pService;
  }

  mount(app): void {

    app.route("/user/all").get((req: Request, res: Response) => {
      res.json(this.personService.getAll());
    });

    app.route("/user/:id").get((req: Request, res: Response) => {
      res.json(this.personService.getById(parseInt(req.params.id)));
    });

    app.route("/user").post((req: Request, res: Response) => {
      let { firstName, lastName, age } = req.body;
      let person = new Person({firstName, lastName, age});
      res.status(this.personService.create(person) ? 201 : 400);
      res.json({});
    });

  }
}