import { Person } from "../Model/Person";
import { IPersonRepository } from "../Abstraction/IPersonRepository";
import { injectable } from "tsyringe";

@injectable()
export class PersonRepository implements IPersonRepository {

    private list: Array<Person> = null;

    constructor() {
        this.list = [
            new Person({ id: 1, firstName: "Handerson", lastName: "Marinho", age: 35 }),
            new Person({ id: 2, firstName: "Marcio", lastName: "Lourenco", age: 50 }),
            new Person({ id: 3, firstName: "Wesley", lastName: "Oliveira", age: 23 }),
            new Person({ id: 4, firstName: "Dimas", lastName: "Budie", age: 48 }),
        ];
    }

    getById(id: number): Person {
        return this.list.find(a => a.id == id);
    }

    getAll(): Person[] {
        return this.list;
    }

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