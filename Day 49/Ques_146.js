// Question 146: Show an example of a callback function used to filter an array of numbers.
// This array of numbers will be filtered
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Uses .filter() with a callback function to filter out numbers greater than 5
const filteredNumbers = numbers.filter((number) => number > 5);
console.log(filteredNumbers); // Outputs: [6, 7, 8, 9, 10]
export {};
// The callback function here checks each number, and .filter() creates a new array with numbers that meet the criteria.
