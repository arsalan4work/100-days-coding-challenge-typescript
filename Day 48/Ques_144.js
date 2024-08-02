// Question 144: Explain the use of the Promise.all() method with an example.
// Example using Promise.all to wait for multiple promises to resolve
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve) => {
    setTimeout(resolve, 100, "foo");
});
Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values); // Outputs: [3, 42, "foo"]
});
export {};
// This demonstrates how Promise.all waits for all promises to resolve and then logs the array of their results.
