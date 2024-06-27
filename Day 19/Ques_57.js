// Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.
// A list of grades
let grades = [288, 394, 472, 599, 253, 377];
// Calculates the average grade
let averageGrade = grades.reduce((total, grade) => total + grade, 0) / grades.length;
// Shows the average grade
console.log(averageGrade);
export {};
// First, we add up all the grades. Then, we divide by how many grades there are to get the average.
