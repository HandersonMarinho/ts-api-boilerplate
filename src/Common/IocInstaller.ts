import "reflect-metadata";
import { container } from "tsyringe";
import { IPersonRepository } from "../Abstraction/IPersonRepository";
import { IPersonService } from "../Abstraction/IPersonService";
import { PersonRepository } from "../Repository/PersonRepository";
import { PersonService } from "../Service/PersonService";

container.register<IPersonRepository>("PersonRepository", PersonRepository);
container.register<IPersonService>("PersonService", PersonService);

export default container;

