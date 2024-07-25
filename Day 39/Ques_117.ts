// Question 117: Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.

function logDefault(str: string): void {
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
 // Multiple cases share the same code block to represent each season.
