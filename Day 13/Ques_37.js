// Question 37: Large Shirts: Default values in make_shirt().
function makeShirt(size = "large", message = "I love TypeScript") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}
makeShirt(); // Default large and message
makeShirt("medium"); // Default message, medium size
makeShirt("small", "Dive into Coding"); // Custom message, small size
export {};
