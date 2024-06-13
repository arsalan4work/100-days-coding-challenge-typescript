// Question 45: Cars: Create detailed car objects with flexible properties.


function makeCar(manufacturer: string, model: string, ...options: [string, any][]): Object {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}

console.log(makeCar("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(makeCar("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));