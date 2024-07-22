// Question 111: Use an if-else-if chain to categorize a person's age group (child, teenager, adult).
// Explain & TIP: Age groups can typically be categorized by specific ranges. For instance, 
// you might consider anyone under 13 a child, between 13 and 19 a teenager, and 20 or older an adult.
function ageCategory(age) {
    if (age >= 50) {
        return "Old";
    }
    else if (age >= 25) {
        return "Adult";
    }
    else if (age >= 13) {
        return "Teenager";
    }
    else {
        return "Child";
    }
}
;
console.log(ageCategory(34)); // Outputs: Adult
console.log(ageCategory(12)); // Outputs: Child
export {};
