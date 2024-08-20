console.log(Math.floor(11.3));

let person = {
   name: "Arsalan",
   age: 20,
   gender: "Male",
   birthdate: "14-6-2004",
   zipcode:75850,
   city: "Karachi",
   province: "Sindh",
   language: "Urdu",
   height: 5.11,
   phoneNo: "03123456789",
   address: "Street 2, House no 34, Precint 3, Bharia Auditorium, Bharia Town Karachi"
}
// Ways to execute code
console.log(person.name);
console.log(person.age);
console.log(person.address);
// Using Template Literal
console.log(`The person name is: ${person.name}, Age: ${person.age}, Gender: ${person.gender}, Birth Date: ${person.birthdate}, City: ${person.city}, State: ${person.province},
 Zip code: ${person.zipcode}, Language: ${person.language}, Height: ${person.height}, Phone NO: ${person.phoneNo}, Address: ${person.address}`);