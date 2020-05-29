import { injectable, inject } from "tsyringe";
import { Person } from "../Model/Person";
import { IPersonService } from "../Abstraction/IPersonService";
import { IPersonRepository } from "../Abstraction/IPersonRepository";

@injectable()
export class PersonService implements IPersonService {

  //
  // Person repository reference.
  //
  private personRepository: IPersonRepository = null;

  constructor(@inject("PersonRepository") pr: IPersonRepository) {
    this.personRepository = pr;
  }

  //
  // Find a person given it's id.
  //
  getById(id: number): Person {
    if (!id) throw `mandatory field not informed: id`;

    let data = this.personRepository.getById(id);

    if(!data) throw `person id ${id} not found`;

    return data;
  }

  //
  // Fetch all persons.
  //
  getAll(): Array<Person> {
    return this.personRepository.getAll();
  }

  //
  // Creates a new person.
  //
  create(p: Person): Boolean {
    return this.personRepository.create(p);
  }
}