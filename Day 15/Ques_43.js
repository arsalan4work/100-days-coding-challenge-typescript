// Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.
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
