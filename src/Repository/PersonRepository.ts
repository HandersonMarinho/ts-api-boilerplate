import { injectable } from "tsyringe";
import { Person } from "../Model/Person";
import { IPersonRepository } from "../Abstraction/IPersonRepository";

@injectable()
export class PersonRepository implements IPersonRepository {

    private list: Array<Person> = [];

    constructor() {
    }

    //
    // Find a on database a Person that matches the provided id.
    //
    getById(id: number): Person {
        return this.list.find(a => a.id == id);
    }

    //
    // Return all Persons on database.
    //
    getAll(): Array<Person> {
        return this.list;
    }

    //
    // Creates a new Person object on database.
    //
    create(p: Person): Boolean {
        p.id = this.list.length + 1;
        this.list.push(p);
        return p.id >= 0;
    }
}