// Day 7: Objects


// Tasks/Activities:


// Activity 1: Object Creation and Access

// • Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
const titleAuthor=(title, author)=>{
    console.log(title + "is title and author is "+ author);
}

const newYear=(year)=>{
    book.year = this.year;
    console.log("this is new printing year : " + year);
}

var book = {
    title: "The road not taken",
    author: "kartik kumar",
    year: 2022,
    tw: titleAuthor,
    yr: newYear
}
console.log(book);

// • Task 2: Access and log the title and author properties of the book object.
console.log(book.title);
console.log(book.author);

// Activity 2: Object Methods


// • Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
book.tw(book.title, book.author);

// • Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
book.yr(2016);

// Activity 3: Nested Objects


// • Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console

// • Task 6: Access and log the name of the library and the titles of all the books in the library.
// Activity 4: The this Keyword
// method.
// • Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this
// Activity 5: Object Iteration
// • Task 8: Use a for... in loop to iterate over the properties of the book object and log each property and its value.
// • Task 9: Use Object. keys and Object. values methods to log all the keys and values of the book object.