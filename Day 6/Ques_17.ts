// Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.


let newGuestList:string [] = ["Ali", "Mujtaba", "John", "Alice"];

console.log("Unfortunately, I can only invite two people for dinner.");

while (newGuestList.length > 2) {
    let removedGuest = newGuestList.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

newGuestList.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});

newGuestList.splice(0, newGuestList.length);
console.log(newGuestList); // Shows an empty list