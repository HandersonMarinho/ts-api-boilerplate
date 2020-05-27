import { Person } from "../Model/Person";

export interface IPersonRepository {
    getAll(): Array<Person>;
    getById(id: number): Person;
    create(p: Person): Boolean;
}