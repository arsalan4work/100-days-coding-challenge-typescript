// Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
// This function calculates the sum of all numbers in an array
function calculateSum(numbers) {
    return numbers.reduce((accumulator, current) => accumulator + current, 0);
}
// Example: Calculating the sum of an array of numbers
const numbers = [5, 7, 13, 14, 51];
console.log(calculateSum(numbers)); // Outputs: 15
export {};
// It adds up all the numbers in the array, resulting in a single sum value.
