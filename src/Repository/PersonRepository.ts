import { injectable } from "tsyringe";
import { Person } from "../Model/Person";
import { IPersonRepository } from "../Abstraction/IPersonRepository";

@injectable()
export class PersonRepository implements IPersonRepository {

    private list: Array<Person> = null;

    constructor() {
        // TODO: This is a fake list just to simulate a database.
        this.list = [
            new Person({ id: 1, firstName: "Handerson", lastName: "Marinho", age: 35 }),
            new Person({ id: 2, firstName: "Marcio", lastName: "Lourenco", age: 50 }),
            new Person({ id: 3, firstName: "Wesley", lastName: "Oliveira", age: 23 }),
            new Person({ id: 4, firstName: "Dimas", lastName: "Budie", age: 48 }),
        ];
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
        try {
            p.id = this.list.length + 1;
            this.list.push(p);
            return true;
        } catch (error) {
            return false;
        }
    }
}