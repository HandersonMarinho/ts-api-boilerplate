import { Person } from "../Model/Person";
import { IPersonService } from "../Abstraction/IPersonService";
import { IPersonRepository } from "../Abstraction/IPersonRepository";
import { injectable, inject } from "tsyringe";

@injectable()
export class PersonService implements IPersonService {

  private personRepository: IPersonRepository = null;

  constructor
    (
      @inject("PersonRepository") repository: IPersonRepository
    ) {
    this.personRepository = repository;
  }

  getById(id: number): Person {
    return this.personRepository.getById(id);
  }

  getAll(): Array<Person> {
    return this.personRepository.getAll();
  }

  create(p: Person): Boolean {
    return this.personRepository.create(p);
  }
}