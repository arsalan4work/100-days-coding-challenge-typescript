// Question 94: Use the .map() method to create a new array that contains the length of each word from an array of words.
// Defines an array with some words
let words = ["Hello", "TypeScript", "JavaScript"];
// Uses .map() to create a new array with the length of each word
const lengths = words.map(word => word.length);
console.log(lengths); // Outputs: [5, 10, 10]
export {};
// Each number in the new array represents the length of the corresponding word in the original array.
