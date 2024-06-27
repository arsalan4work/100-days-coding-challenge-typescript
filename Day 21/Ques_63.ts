// Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, 
// including properties unique to each shape.

// Creating a custom type (type alias) for shapes that could be circles or rectangles
type shape = {
    kind: "Circle" | "Rectangle";
    radius?: number;
    width?: number;
    height?: number;
};

// Describing a circle using our Shape type
let circle:shape = {
    kind: "Circle",
    radius: 7
};

// Describing a rectangle using our Shape type
let rectangle: shape ={
    kind: "Rectangle",
    width: 12,
    height: 20
};

// Showing what we described
console.log(circle); // Here's the circle
console.log(rectangle); // And here's the rectangle
// We made a flexible program that can describe different shapes in detail.

