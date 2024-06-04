// Question 26: Alien Colors #2: Choose a color for an alien, then write an if-else chain.

let alien_color = "Green";
if (alien_color === "Blue") {
    console.log(`Congrats, you discover correct alien color. Now you earned 5 points!`);
}
else if (alien_color === "Red") {
    console.log(`Congrats, you discover correct alien color. Now you earned 10 points!`);
}
else if (alien_color === "Green") {
    console.log(`Congrats, you discover correct alien color. Now you earned 15 points!`);
}
else if (alien_color === "Yellow") {
    console.log(`Congrats, you discover correct alien color. Now you earned 20 points!`);
}
else if (alien_color === "Black") {
    console.log(`Congrats, you discover correct alien color. Now you earned 25 points!`);
}
else if (alien_color === "White") {
    console.log(`Congrats, you discover correct alien color. Now you earned 30 points!`);
}
else {
    console.log(`You earned nothing!`);
}