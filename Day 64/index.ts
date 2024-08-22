/*********************************
 * TYPE ANNOTATIONS WITH OBJECTS *
 *********************************/

let personExOne: {
   name: string;
   age: number;
   jobTitle?: string;
   address: {
     street: string;
     city: string;
   };
 };
 
 personExOne = {
   name: "Ali",
   age: 24,
   jobTitle: "Software Engineer",
   address: {
     street: "123 Main St",
     city: "Karachi",
   },
 };
   
 // And there is yet another method
 let personExTwo: {
   name: string;
   age: number;
   jobTitle?: string;
   address: {
     street: string;
     city: string;
   };
 } = {
   name: "Arsalan",
   age: 25,
   jobTitle: "Cloud Native Engineer",
   address: {
     street: "876 Main St",
     city: "Islamabad",
   },
 };

 console.log(personExOne.name);
 console.log(personExTwo.name);
 