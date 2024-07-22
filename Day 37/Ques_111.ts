// Question 111: Use an if-else-if chain to categorize a person's age group (child, teenager, adult).

function ageCategory(age: number): string {
   if (age >= 50) {
     return "Old";
   } else if (age >= 25) {
     return "Adult";
   } else if (age >= 13) {
     return "Teenager";
   } 
    else {
     return "Child";
   }
};
 
 console.log(ageCategory(34)); // Outputs: Adult
 console.log(ageCategory(12)); // Outputs: Child
