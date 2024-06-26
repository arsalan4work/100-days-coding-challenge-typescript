// Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.
// This program calculates the average of all scores given
function averageScore(...score) {
    // Adds all scores together and divides by the number of scores
    let total = score.reduce((sum, score) => sum + score, 0);
    return total / score.length;
}
// Example: finding the average of four scores
console.log(averageScore(80, 90, 100, 70, 60, 65, 50));
export {};
// We add up all the scores, then divide by how many there are.
