// Write your code here
class Book {
    title;
    author;
    isbn;
    numCopies;    

    constructor (title, author, isbn, numCopies) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.numCopies = numCopies;
    }

    getAvailability = () => {
        if (this.numCopies === 0) {
            return "out of stock";
        } else if (this.numCopies > 0 && this.numCopies < 10) {
            return "low stock";
        } else {
            return "in stock";
        }
    }

    sell = (numSold = 1) => this.numCopies -= numSold;

    restock = (numCopies = 5) => this.numCopies += numCopies;
}

let bookInStock = new Book(); 
bookInStock.numCopies = 11;

let bookLowStock = new Book(); 
bookLowStock.numCopies = 9;

let bookOutOfStock = new Book(); 
bookOutOfStock.numCopies = 0;

console.log(bookInStock.getAvailability());
console.log(bookLowStock.getAvailability());
console.log(bookOutOfStock.getAvailability());

console.log("Selling books")

console.log(bookInStock.numCopies);
console.log("sold 1..")
bookInStock.sell();
console.log(bookInStock.numCopies);

console.log("sold 2 more..")
bookInStock.sell(2);
console.log(bookInStock.numCopies);


console.log("restock 3..")
bookInStock.restock(3);
console.log(bookInStock.numCopies);

console.log("restock 5..")
bookInStock.restock();
console.log(bookInStock.numCopies);

console.log("constructor..")
let constructorBook = new Book("test book", "author is me", "123abc", 7);
console.log(constructorBook);

