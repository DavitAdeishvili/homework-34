class Animal {
    constructor(name, species, age) {
        this.name = name;
        this.species = species;
        this.age = age;
    }

    makeSound() {
        return `${this.name} says: Hello World!`;
    }
}

class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    startEngine() {
        return `${this.brand} ${this.model} ${this.year} engine started!`;
    }
}

class Human {
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }

    introduce() {
        return `Hello, my name is ${this.name} and I am a ${this.job}.`;
    }
}

const animal1 = new Animal("Leo", "Lion", 5);
const animal2 = new Animal("Milo", "Cat", 3);
const animal3 = new Animal("Bella", "Dog", 4);

const car1 = new Car("Toyota", "Corolla", 2020);
const car2 = new Car("Honda", "Civic", 2019);
const car3 = new Car("Ford", "Mustang", 2021);

const human1 = new Human("Alice", 30, "Engineer");
const human2 = new Human("Bob", 25, "Doctor");
const human3 = new Human("Charlie", 35, "Teacher");


console.log(animal1.makeSound());
console.log(animal2.makeSound());
console.log(animal3.makeSound());

console.log(car1.startEngine());
console.log(car2.startEngine());
console.log(car3.startEngine());

console.log(human1.introduce());
console.log(human2.introduce());
console.log(human3.introduce());