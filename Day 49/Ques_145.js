// Question 145: Create a function that accepts a callback and invokes it with some arguments.
// This function accepts a callback function and invokes it with given arguments
function executeCallback(callback, arg1, arg2) {
    callback(arg1, arg2); // Invokes the callback with the specified arguments
}
// Example callback function that adds two numbers
const add = (a, b) => {
    console.log(a + b); // Outputs the sum of a and b
};
executeCallback(add, 15, 14); // Outputs: 29
export {};
// Demonstrates invoking a callback function with arguments to perform an addition.
