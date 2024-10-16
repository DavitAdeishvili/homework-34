function Library(books) {
    this.books = books;
    this.listBooks = function() {
        this.books.forEach(function(book) {
            console.log('Title: ' + book.title + ', Author: ' + book.author);
        });
    };
}