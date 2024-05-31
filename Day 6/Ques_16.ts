// Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.

let newGuestList:string [] = ["Ali", "Mujtaba", "John", "Alice"];

// Adding new Guest
newGuestList.unshift("Haris");
newGuestList.splice(newGuestList.length / 2, 0, "Bob");
newGuestList.push("Nick");

newGuestList.forEach(guest => {
    console.log(`Dear ${guest}, We found a bigger dinner table and room so ou can stay as long as you want till the party!`);
    
});