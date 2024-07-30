// Question 127: Convert a traditional function expression to an arrow function.

// Traditional function expression
const traditionalFunction = function (a:any, b:any) {
   return a + b;
 };
 
 // Converted to arrow function
 const arrowFunction = (a:any, b:any) => a + b;
 
 console.log(traditionalFunction(5, 3)); // Outputs: 8
 console.log(arrowFunction(5, 3)); // Outputs: 8
 // Demonstrates the conversion of a traditional function expression to an arrow function.
