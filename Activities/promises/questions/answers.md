//Q0
// (After a 2-second delay) Promise resolved!

Question 1: What is a Promise in JavaScript, and what problem do they solve?

A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises are used to solve the problem of callback hell or pyramid of doom, which occurs when you have multiple nested callbacks for asynchronous operations. Promises make it easier to handle and reason about asynchronous code by providing a more structured way to manage callbacks and handle errors.

Question 2: How do you create a new Promise in JavaScript?

You can create a new Promise using the Promise constructor. The constructor takes a function as an argument, which has two parameters: resolve and reject. Inside this function, you perform your asynchronous operation and call resolve when it succeeds or reject when it fails. Here's an example:

```const myPromise = new Promise((resolve, reject) => {
  // Perform asynchronous operation
  if (/* operation is successful */) {
    resolve(result);
  } else {
    reject(error);
  }
});
```

Question 3: What are the three states of a Promise, and what do they represent?

Promises can be in one of three states:

Pending: The initial state when the Promise is created, and neither resolved nor rejected.
Fulfilled: The state when the Promise successfully completes its operation, resulting in a resolved value.
Rejected: The state when the Promise encounters an error or fails to complete, resulting in a rejected value.
Question 4: How do you handle a successful Promise using .then()?

You can handle a successful Promise using the .then() method. It takes a function as an argument, which will be executed when the Promise is fulfilled (resolved). Here's an example:

```myPromise.then((result) => {
  // Handle the successful result here
}).catch((error) => {
  // Handle errors if the Promise is rejected
});
```

Question 5: What is the purpose of the .catch() method in Promise handling?

The .catch() method is used to handle errors that occur during the execution of a Promise. It allows you to specify a function that will be called if the Promise is rejected. This is helpful for centralized error handling in Promise chains.

Question 6: Explain the difference between Promise.resolve() and Promise.reject().

Promise.resolve(value) creates a Promise that is immediately resolved with the specified value.
Promise.reject(reason) creates a Promise that is immediately rejected with the specified reason. These methods are often used when you want to create Promises without asynchronous operations.
Question 7: How do you chain multiple .then() handlers together?

You can chain multiple .then() handlers together by returning a new Promise from each .then() handler. This allows you to sequence asynchronous operations one after the other.

```myPromise.then((result1) => {
  // Do something with result1
  return someAsyncOperation(result1);
}).then((result2) => {
  // Do something with result2
}).catch((error) => {
  // Handle errors in the chain
});
```

Question 8: What is Promise.all() used for, and how does it work?

Promise.all(iterable) is used to wait for all Promises in an iterable (e.g., an array) to resolve successfully. It returns a single Promise that resolves with an array of the resolved values from all the input Promises. If any of the input Promises is rejected, the resulting Promise is also rejected.

Question 9: How does Promise.race() differ from Promise.all()?

Promise.race(iterable) is used to wait for the first Promise in an iterable to resolve or reject. It returns a Promise that resolves or rejects as soon as any of the input Promises in the iterable resolves or rejects. In contrast, Promise.all() waits for all input Promises to resolve successfully.

Question 10: What is the purpose of the .finally() method in Promises?

The .finally() method allows you to specify a function that will be called regardless of whether the Promise is resolved or rejected. It is often used for cleanup tasks or actions that need to be performed after the Promise settles.

Question 11: How do you handle errors in a Promise chain using .catch()?

You can handle errors in a Promise chain by appending a .catch() block at the end of the chain. This block will catch and handle any errors that occur in the preceding .then() handlers.

Question 12: Explain what happens if an error is thrown inside a .then() handler.

If an error is thrown inside a .then() handler, it will be caught by the nearest .catch() block in the Promise chain, allowing you to handle and recover from the error.

Question 13: How can you create a Promise that resolves after a specific timeout?

You can create a Promise that resolves after a specific timeout using setTimeout and the Promise constructor. Here's an example:

```function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// Usage
delay(2000).then(() => {
  // This code will run after a 2-second delay
});
```

Question 14: What is asynchronous behavior, and how does it relate to Promises?

Asynchronous behavior refers to code execution that doesn't happen sequentially and can run independently of the main program flow. Promises are a mechanism in JavaScript for managing asynchronous operations, allowing you to write code that handles asynchronous tasks more cleanly and predictably.

Question 15: Can you use Promises for parallel asynchronous operations? If so, how?

Yes, you can use Promises for parallel asynchronous operations by creating multiple Promises and then using Promise.all() to wait for all of them to resolve. This allows you to run multiple asynchronous tasks concurrently and handle their results when they are all completed successfully.

```const promise1 = someAsyncOperation1();
const promise2 = someAsyncOperation2();

Promise.all([promise1, promise2])
  .then(([result1, result2]) => {
    // Both promises have resolved successfully
    // Handle the results here
  })
  .catch((error) => {
    // Handle errors if any promise is rejected
  });
```
