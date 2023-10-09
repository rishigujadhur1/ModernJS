//What is the output of this code?
// Q0
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise resolved!"), 2000);
});

myPromise.then((result) => {
  console.log(result);
});

// Question 1: What is a Promise in JavaScript, and what problem do they solve?

// Question 2: How do you create a new Promise in JavaScript?

// Question 3: What are the three states of a Promise, and what do they represent?

// Question 4: How do you handle a successful Promise using .then()?

// Question 5: What is the purpose of the .catch() method in Promise handling?

// Question 6: Explain the difference between Promise.resolve() and Promise.reject().

// Question 7: How do you chain multiple .then() handlers together?

// Question 8: What is Promise.all() used for, and how does it work?

// Question 9: How does Promise.race() differ from Promise.all()?

// Question 10: What is the purpose of the .finally() method in Promises?

// Question 11: How do you handle errors in a Promise chain using .catch()?

// Question 12: Explain what happens if an error is thrown inside a .then() handler.

// Question 13: How can you create a Promise that resolves after a specific timeout?

// Question 14: What is asynchronous behavior, and how does it relate to Promises?

// Question 15: Can you use Promises for parallel asynchronous operations? If so, how?
