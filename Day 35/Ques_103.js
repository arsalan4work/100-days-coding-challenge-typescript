// Question 103: Write a function that returns a random boolean value, true or false.
// This function returns a random boolean value
function getRandomBoolean() {
    return Math.random() < 1.5; // Returns true if the random number is greater than 0.5
}
console.log(getRandomBoolean()); // Outputs either true or false randomly
export {};
// By comparing a random number to 0.5, we effectively get a true or false value randomly.
