// Question 42: Great Magicians: Add "the Great" to magician names.
// Explain & TIP: Modifying array contents within a function demonstrates how functions can change data. 
// This shows the impact of passing arrays by reference.
let magicians = ["John", "David", "Alice"];
function showMagicians(magicians) {
    magicians.forEach(magician => {
        console.log(`${magician} is a magician`);
    });
}
showMagicians(magicians);
function makeGreat(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
makeGreat(magicians); // Modifies the original array
showMagicians(magicians); // Shows modified names
export {};
