/**********************************
 * TYPE ANNOTATIONS WITH FUNCTION *
 **********************************/

// Function to calculate the area of a rectangle
function calculateRectangleArea(lengthRectAngle: number, widthOfRectAngle: number): number {
   return lengthRectAngle * widthOfRectAngle;
 }
 
 // Calling the function with valid arguments
 const lengthRectAngle = 7;
 const widthOfRectAngle = 4;
 const area = calculateRectangleArea(lengthRectAngle, widthOfRectAngle);
 console.log(`The area of the rectangle is: ${area}`);