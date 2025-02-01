class Animal {
    constructor(name, species, description) {
        this.name = name;
        this.species = species;
        this.description = description;
    }

    getInfo() {
        return `<div class='item'>
        <div class='item-name'>name: ${this.name}</div>
        <div class='item-species'>species: ${this.species}</div>
        <div class='item-description'>description: ${this.description}</div>
        </div>`;
    }
}

class Mammal extends Animal {
    constructor(name, species, description, isWarmBlooded) {
        super(name, species, description);
        this.isWarmBlooded = isWarmBlooded;
    }

    getInfo() {
        return `<div class='item'>
        <div class='item-name'>name: ${this.name}</div>
        <div class='item-species'>species: ${this.species}</div>
        <div class='item-description'>description: ${this.description}</div>
        <div class='item-isWarmBlooded'>isWarmBlooded: ${this.isWarmBlooded}</div>
        </div>`;
    }
}

class Bird extends Animal {
    constructor(name, species, description, canFly) {
        super(name, species, description);
        this.canFly = canFly;
    }

    getInfo() {
        return `<div class='item'>
        <div class='item-name'>name: ${this.name}</div>
        <div class='item-species'>species: ${this.species}</div>
        <div class='item-description'>description: ${this.description}</div>
        <div class='item-canFly'>canFly: ${this.canFly}</div>
        </div>`;
    }
}

class Fish extends Animal {
    constructor(name, species, description, waterType) {
        super(name, species, description);
        this.waterType = waterType;
    }

    getInfo() {
        return `<div class='item'>
        <div class='item-name'>name: ${this.name}</div>
        <div class='item-species'>species: ${this.species}</div>
        <div class='item-description'>description: ${this.description}</div>
        <div class='item-waterType'>waterType: ${this.waterType}</div>
        </div>`;
    }
}

class AnimalWiki {
    constructor(arr) {
        this.animals = arr;
    }

    render() {
        let main = document.getElementById("item-list");
        this.animals.forEach(item => {
            main.innerHTML += item.getInfo();
        });
    }
}

const animals = [
    new Mammal("Lion", "Panthera leo", "The lion is a species in the family Felidae.", true),
    new Bird("Eagle", "Aquila chrysaetos", "The eagle is a bird of prey.", true),
    new Fish("Shark", "Carcharodon carcharias", "The shark is a large predatory fish.", "Saltwater")
];

new AnimalWiki(animals).render();