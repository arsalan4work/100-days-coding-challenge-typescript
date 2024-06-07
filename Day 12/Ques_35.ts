// Question 35: Animals: Highlight animals with a common trait.

let animals: string[] = ["dog", "cat", "rabbit", "snake", "birds", "fishes"];

animals.forEach(animal => {
    if (animal === "dog") {
        console.log(`A ${animal} is a great pet.`);
    } else if (animal === "cat") {
        console.log(`A ${animal} is a great pet.`);
    } else if (animal === "rabbit") {
        console.log(`A ${animal} is a great pet.`);
    } else if (animal === "snake") {
        console.log(`A ${animal} is not a great pet.`);
    } else if (animal === "birds") {
        console.log(`${animal} is a great pet.`);
    }else if (animal === "fishes") {
        console.log(`${animal} is a great pet.`);
    }
    else {
        console.log("I love my pets");
    }
    
});
console.log("Any of these animals would make a great pet!");