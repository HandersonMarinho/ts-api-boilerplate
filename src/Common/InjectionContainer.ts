import "reflect-metadata";
import { container } from "tsyringe";
import { IRoutes } from "../Abstraction/IRoutes";
import { Routes } from "../Routes"
import { IPersonRepository } from "../Abstraction/IPersonRepository";
import { PersonRepository } from "../Repository/PersonRepository";
import { IPersonService } from "../Abstraction/IPersonService";
import { PersonService } from "../Service/PersonService";
import { PersonController } from "../Controller/PersonController";

//
// Dependency injection installers.
//
container.register<IPersonRepository>("IPersonRepository", PersonRepository);
container.register<IPersonService>("IPersonService", PersonService);
container.register<IRoutes>("IRoutes", Routes);
container.register("PersonController", PersonController);

export default container;

