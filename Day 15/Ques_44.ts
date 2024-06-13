// Question 44: Sandwiches: Summarize sandwich orders with varying ingredients.

function makeSandwich(...items: string[]) {
    console.log(`Making a sandwich with: ${items.join(', ')}.`);
}

makeSandwich("chiken", "cheese");
makeSandwich("turkey", "lettuce", "tomato");
makeSandwich("avocado", "sprouts", "mustard", "mayo");