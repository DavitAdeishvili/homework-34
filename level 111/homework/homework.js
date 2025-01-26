class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    read() {
        return `Reading ${this.title} by ${this.author}.`;
    }

    bookmark(page) {
        return `Bookmarked page ${page} in ${this.title}.`;
    }

    get description() {
        return `${this.title} by ${this.author}, ${this.pages} pages.`;
    }
}

class AdventureBook extends Book {
    constructor(title, author, pages, difficulty, setting) {
        super(title, author, pages);
        this.difficulty = difficulty;
        this.setting = setting;
    }

    read() {
        return `you are currlently reading ${this.title} by ${this.author}.`;
    }

    bookmark(page) {
        return `Bookmarked page ${page} in ${this.title}. Don't get lost in the adventure!`;
    }

    explore() {
        return `Exploring the ${this.setting} in ${this.title}.`;
    }
}

class HorrorBook extends Book {
    constructor(title, author, pages, scareLevel, monster) {
        super(title, author, pages);
        this.scareLevel = scareLevel;
        this.monster = monster;
    }

    read() {
        return `you are reading ${this.title} by ${this.author}.`;
    }

    bookmark(page) {
        return `Bookmarked page ${page} in ${this.title}. Don't get too scared!`;
    }

    scream() {
        return `Screaming at the ${this.monster} in ${this.title}.`;
    }
}

class FantasyBook extends Book {
    constructor(title, author, pages, magicSystem, world) {
        super(title, author, pages);
        this.magicSystem = magicSystem;
        this.world = world;
    }

    read() {
        return `book: ${this.title} by ${this.author}.`;
    }

    bookmark(page) {
        return `Bookmarked page ${page} in ${this.title}. Don't lose your place in the magic!`;
    }

    castSpell() {
        return `Casting spells in the ${this.magicSystem} of ${this.title}.`;
    }
}

const adventureBook = new AdventureBook("Sherlock Holmes", "Arthur Conan Doyle", 320, "Medium", "Hound of the Baskerviles");
const horrorBook = new HorrorBook("Dracula", "Bram Stoker", 418, "High", "Vampire");
const fantasyBook = new FantasyBook("Harry Potter", "J.K. Rowling", 500, "Wand Magic", "Hogwarts");

console.log(adventureBook.read());
console.log(adventureBook.bookmark(100));
console.log(adventureBook.explore());

console.log(horrorBook.read());
console.log(horrorBook.bookmark(50));
console.log(horrorBook.scream());

console.log(fantasyBook.read());
console.log(fantasyBook.bookmark(200));
console.log(fantasyBook.castSpell());