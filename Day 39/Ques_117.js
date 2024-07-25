// Question 117: Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.
// Explain & TIP: The default case in a switch statement provides a way to execute a block of code when none of the other case 
// labels match the expression's value.
function logDefault(str) {
    switch (str) {
        case "A":
            console.log("A Grade");
            break;
        case "B":
            console.log("B Grade");
            break;
        case "C":
            console.log("C Grade");
            break;
        case "D":
            console.log("D Grade");
            break;
        default:
            console.log("Fail");
            break;
    }
}
logDefault("F"); // Outputs: Spring
export {};
// Multiple cases share the same code block to represent each season.
