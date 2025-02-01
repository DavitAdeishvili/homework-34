class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get ageInMonths() {
        return this.age * 12;
    }
}

const person = new Person("John", 25);
console.log(`${person.name}'s age in months: ${person.ageInMonths}`);