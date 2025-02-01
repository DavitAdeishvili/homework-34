class Book {
    constructor(title, author, genre, pages) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.pages = pages;
        this.describe = `<div class="item">
            <p>title: ${this.title}</p>
            <p>author: ${this.author}</p>
            <p>genre: ${this.genre}</p>
            <p>pages: ${this.pages}</p>
        </div>`
    }

    get describe() {
        return `<div class="item">
            <p>title: ${this.title}</p>
            <p>author: ${this.author}</p>
            <p>genre: ${this.genre}</p>
            <p>pages: ${this.pages}</p>
        </div>`;
    }
}

class Books{
    constructor(items){
        this.items = items;
    };
    render(){
        this.items.forEach(item => {
            document.querySelector('.books').innerHTML += item.describe;
        });
    }
}
let book = new Book("daviti", "sulxan saba orbaliani", "adventure", 210)
let books = [
    book,
    new Book("vinme", "akaki wereteli", "fantasy", 200)
];
new Books(books).render();