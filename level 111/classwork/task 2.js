class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    makeSound() {
        return `${this.name} makes a sound.`;
    }
}

class Mammal extends Animal {
    constructor(name, species, WarmBlooded) {
        super(name, species);
        this.WarmBlooded = WarmBlooded;
    }

    makeSound() {
        return `${this.name} is a warm-blooded ${this.species}.`;
    }
}

class Dog extends Mammal {
    constructor(name, breed) {
        super(name, "Dog", true);
        this.breed = breed;
    }

    makeSound() {
        return `${this.name} the ${this.breed} barks.`;
    }
}

const animal = new Animal("Generic Animal", "Unknown Species");
const mammal = new Mammal("Generic Mammal", "Unknown Mammal", true);
const dog = new Dog("Buddy", "Golden Retriever");

console.log(animal.makeSound());
console.log(mammal.makeSound());
console.log(dog.makeSound());