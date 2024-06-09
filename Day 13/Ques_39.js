// Question 39: City Names: Formatting city-country pairs.
// Explain & TIP: Returning formatted strings from functions can simplify data presentation. 
// This exercise practices string formatting and returning values from functions.
function citiesNames(city = "Karachi", country = "Pakistan") {
    console.log(`${city} is the biggest city of ${country}`);
}
;
citiesNames();
citiesNames("New York", "America");
citiesNames("Tokyo", "Japan");
citiesNames("Mumbai", "India");
citiesNames("London", "United Kingdom");
export {};
