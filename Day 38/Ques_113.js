// Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.
// Creates a new Map to store countries and their capitals
const countries = new Map();
countries.set("Pakistan", "Islamabad"); // Adds Pakistan to the Map
countries.set("Germany", "Berlin"); // Adds Germany to the Map
countries.set("Japan", "Tokyo"); // Adds Japan to the Map
console.log(countries);
// Logs the Map with the countries and their capitals.
// This function checks for "Germany" in the Map and logs its capital
function logCapitalOfGermany(countries) {
    if (countries.has("Germany")) {
        console.log(`The capital of Germany is ${countries.get("Germany")}`);
    }
    else {
        console.log("Germany is not in the Map.");
    }
}
logCapitalOfGermany(countries);
export {};
// Checks if Germany is in our Map and logs the capital if it exists.
