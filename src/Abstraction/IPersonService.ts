import { Person } from "../Model/Person";

export interface IPersonService {
    getAll(): Array<Person>;
    getById(id: number): Person;
    create(p: Person): Boolean;
}