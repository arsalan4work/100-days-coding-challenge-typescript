// Question 84: Replacing Text in a String: Write a function that takes a sentence and 
// replaces all instances of the word "JavaScript" with "TypeScript".

// This function swaps "JavaScript" with "TypeScript" in a sentence
function replacingWords(sentence: string): string {
    return sentence.replace(/JavaScript/g, "TypeScript");
    // Uses a regular expression with the 'g' flag for a global replacement
}

// Example: Changing a programming language name in a sentence
console.log(replacingWords("I love JavaScript and JavaScript is awesome!"));
// Outputs: "I love TypeScript and TypeScript is awesome!"
// Every "JavaScript" in the sentence is changed to "TypeScript".