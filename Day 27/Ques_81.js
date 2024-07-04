// // Question 81: Iterating Over Object Properties: Write a function that takes an object as an argument and logs 
// all of its properties and values.
// This function shows every detail about an object
function logObjectProperties(obj) {
    for (let property in obj) {
        // Loops through each property in the object
        console.log(`${property}: ${obj[property]}`);
        // Shows the property name and its value
    }
}
// Using the function with a car object
logObjectProperties({ make: "Toyota", model: "Yaris", year: 2020, color: "White" });
export {};
// It tells us each piece of information stored about the car.
