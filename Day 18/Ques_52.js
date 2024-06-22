// Question 52: Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. 
// Include its brand, model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts.
// Sets up details about a smartphone
let smartphone = {
    make: "Samsung",
    model: "Galaxy S24 ultra",
    specs: {
        storage: "512GB",
        screenSize: "6.6 inches",
        batteryLife: "20 hours"
    }
};
// Shows what we've set up about the smartphone
console.log(`The Brand name is ${smartphone.make}, Model: ${smartphone.model}, Battery life is: ${smartphone.specs.batteryLife}, 
Screen size: ${smartphone.specs.screenSize}, Storage: ${smartphone.specs.storage}`);
export {};
