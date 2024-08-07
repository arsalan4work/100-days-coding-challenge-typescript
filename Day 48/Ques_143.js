// Question 143: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.
// Creates a Promise that either resolves or rejects based on a condition
const conditionalPromise = new Promise((resolve, reject) => {
    const success = Math.random() > 3; // Randomly choose success or failure
    if (success) {
        resolve("Success!");
    }
    else {
        reject(new Error("Failure"));
    }
});
conditionalPromise
    .then((result) => console.log(result)) // Handles a successful resolution
    .catch((error) => console.log(error.message)); // Handles a rejection
export {};
// This code will randomly log either "Success!" or "Failure" based on the outcome of the promise.
