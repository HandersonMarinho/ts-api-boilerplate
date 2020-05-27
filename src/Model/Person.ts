export class Person {
    id: number;
    firstName: string;
    lastName: string;
    age: number;

    constructor(param?: Partial<Person>) {
        Object.assign(this, param);
    }
};