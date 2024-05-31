// Question 18: Seeing the World: Think of at least five places you’d like to visit.

let favoritePlaces:string[] = ["Pakistan", "New York", "Switzerland", "Abu Dhabi", "Germany", "America"];

console.log("Original order:", favoritePlaces);

console.log("Alphabetical order:", [...favoritePlaces].sort());

console.log("Original order:", favoritePlaces);

console.log("Reverse alphabetical order:", [...favoritePlaces].sort().reverse());

console.log("Original order:", favoritePlaces);

favoritePlaces.reverse();
console.log("Reversed order:", favoritePlaces);

favoritePlaces.reverse();
console.log("Original order:", favoritePlaces);

favoritePlaces.sort();
console.log("Alphabetical order:", favoritePlaces);

favoritePlaces.reverse();
console.log("Reverse alphabetical order:", favoritePlaces);