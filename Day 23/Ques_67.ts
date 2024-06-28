// Question 67: Arithmetic with Mixed Types: Write a function that takes two parameters: 
// a number and a string that represents a number (e.g., "5"). Return their sum as a number. 

// This function adds a number and a string that represents a number
function addNumberAndString(num1:number, numberString:string):number {
    return num1 + Number(numberString);
}
// Trying it with 15 and "15"
console.log(addNumberAndString(15, "15")); // shows 30
// The string "5" is turned into the number 5, and then added to 10.