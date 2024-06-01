// Question 21: Think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

// Explain & TIP: Objects in TypeScript can store various related data about a single entity. 
// Think of an object as a container for characteristics of something, like a book or a car.

let book: { title: string; author: string; yearPublished: number } = {
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    yearPublished: 1997
};
console.log(`Book Info: ${book.title} by ${book.author}, published in ${book.yearPublished}`);