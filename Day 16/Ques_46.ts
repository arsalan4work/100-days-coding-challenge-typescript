// Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, 
// and a method describe() that logs a sentence about the laptop.

import { describe } from "node:test";

let myLaptop = {
    make: "DELL",
    model: "LATITUDE E5440",
    year: 2014,
    cpu: "Core i5 4th generation",
    ram: "8gb RAM",
    rom: "256gb SSD and 256gb Hard Disk",
        describe: function() {
        console.log(`This laptop is a ${this.year} ${this.make} ${this.model} and it has ${this.cpu}, ${this.ram}, ${this.rom}.`);
    }
};
myLaptop.describe();