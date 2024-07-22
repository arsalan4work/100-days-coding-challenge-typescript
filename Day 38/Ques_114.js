// Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.
// Creates a Map to store student IDs (keys) and names (values)
const students = new Map();
students.set(101, "Alice");
students.set(232, "Bob");
students.set(323, "Charlie");
// Iterates over the Map and logs each student ID and name
students.forEach((name, id) => {
    console.log(`Student ID: ${id}, Name: ${name}`);
});
export {};
// This loop goes through each student and logs their ID and name.
