// Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.
// This function filters an array, keeping only numbers greater than 10
function filterGreaterThanTen(numbers) {
    return numbers.filter(numbers => numbers > 10);
}
// Example: Filtering an array of numbers
const numbers = [5, 10, 12, 18, 23];
console.log(filterGreaterThanTen(numbers)); // Outputs: [15, 20, 25]
export {};
// The new array contains only the numbers that are greater than 10.
