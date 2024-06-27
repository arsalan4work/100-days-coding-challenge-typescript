// Question 62: Making a Student Template: Create a blueprint for student information, 
// including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.

// Creating a blueprint (interface) for student information
interface Student {
    name: string;
    age: number;
    courses: string[];
}

// Filling in the blueprint with an example student
let student1: Student = {
    name: "Arsalan",
    age: 19,
    courses: ["Math", "JavaScript", "DSA"]
};
let student2: Student = {
    name: "Mujtaba",
    age: 18,
    courses: ["Digital Marketing", "SEO", "SMM"]
};
let student3: Student = {
    name: "Ahmed",
    age: 20,
    courses: ["Web Designing", "CSS", "HTML", "JavaScript"]
};

// Showing the student's information
console.log(student1);
console.log(student2);
console.log(student3);
// We're using the blueprint to make sure our student has a name, age, and list of courses.