// Question 29: Favorite Fruit: Create an array for your favorite fruits and check if certain fruits are included.


let favoriteFruit:string [] = ["Apples", "Bananas", "Strawberrys", "Cherrys"];

if (favoriteFruit.includes ("Apples")) {
    console.log('You really like Apples');
}
else if (favoriteFruit.includes ("Bananas")) {
    console.log('You really like Bananas');
}
else if (favoriteFruit.includes ("Strawberrys")) {
    console.log('You really like Strawberrys');
}
else {
    console.log('You really like Cherrys');
}