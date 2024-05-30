// // Question 15: Changing Guest List: One of your guests can't make it to the dinner, 
// so you need to send out a new set of invitations with a replacement guest.



let guestList:string[] = ["Mujtaba", "Ali", "Hunain", "Ashir"];

// Mark the guest who aren't comming to make the dinner
let unableAttendent:String = guestList.splice(3)[0];

console.log(`"${unableAttendent}" can't make dinner.`)

// Adding another person in our guest list
guestList.push("Maaz");

// Print message
guestList.forEach(guest => {
    console.log(`Assalam-o-Alaikum ${guest}, We have arrange a dinner party tonight and you are invited as a guest. Please come at sharp 8:30pm`)

});