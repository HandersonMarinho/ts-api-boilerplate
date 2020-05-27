import { Person } from "../Model/Person";
import { IPersonService } from "../Abstraction/IPersonService";
import { IPersonRepository } from "../Abstraction/IPersonRepository";

export class PersonService implements IPersonService {

  private personRepository: IPersonRepository = null;

  constructor(pRepository: IPersonRepository) {
    this.personRepository = pRepository;
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