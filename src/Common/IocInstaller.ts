import "reflect-metadata";
import { container } from "tsyringe";
import { IPersonRepository } from "../Abstraction/IPersonRepository";
import { IPersonService } from "../Abstraction/IPersonService";
import { IRoutes } from "../Abstraction/IRoutes";
import { PersonRepository } from "../Repository/PersonRepository";
import { PersonService } from "../Service/PersonService";
import { Routes } from "../Routes"

//
// Dependency injection initializations.
//
container.register<IPersonRepository>("PersonRepository", PersonRepository);
container.register<IPersonService>("PersonService", PersonService);
container.register<IRoutes>("Routes", Routes);

export default container;

