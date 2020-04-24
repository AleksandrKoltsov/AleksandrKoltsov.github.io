export class Employee {
    constructor({name,dob, cell,email}) {
        this.name = `${name.first} ${name.last}`;
        this.age = dob.age;
        this.cell = cell;
        this.email = email;
    }
}