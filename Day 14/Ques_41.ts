// Question 41: Magicians: Display magician names from an array.

let magicians: string[] = ["John", "David", "Alice"];

function showMagicians(magicians: string[]) {
    magicians.forEach(magician => {
        console.log(`${magician} is a magician`);
    });
}

showMagicians(magicians);