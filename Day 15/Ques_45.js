// Question 45: Cars: Create detailed car objects with flexible properties.
// Explain & TIP: Functions accepting a mix of fixed and arbitrary parameters let you create detailed and flexible objects. 
// This is ideal for data with a few required fields and many optional fields.
function makeCar(manufacturer, model, ...options) {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}
console.log(makeCar("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(makeCar("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
export {};
