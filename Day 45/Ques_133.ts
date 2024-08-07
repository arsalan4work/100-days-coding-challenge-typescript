// Question 133: Write a JavaScript object and convert it into a JSON string.

// Defines a JavaScript object
const person = {
   name: "Arsalan",
   age: 20,
   city: "Karachi",
 };
 
 // Converts the object into a JSON string
 const jsonString = JSON.stringify(person);
 
 console.log(jsonString); // Outputs: {"name":"Alice","age":30,"city":"Wonderland"}
 // Demonstrates converting an object to a JSON string, making it easy to store or transmit.