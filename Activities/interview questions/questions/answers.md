Question 3: Explain the difference between let, const, and var for variable declaration.

Answer:

var has function scope, which means it's accessible throughout the function.
let and const have block scope, and const is used for variables that won't be reassigned.

Question 7: What is the difference between "null" and "undefined" in JavaScript?

Answer:

null represents an intentional absence of any object value.
undefined represents a variable that has been declared but hasn't been assigned a value.

Question 8: How does the "this" keyword work in JavaScript?

Answer: The this keyword refers to the current object in which a function is being executed. Its value depends on how a function is called: in the global scope, this refers to the global object (e.g., window in a browser); within an object method, this refers to the object itself.

Question 10: Explain the concept of "callback functions" and provide an example of their use.

Answer: A callback function is a function that is passed as an argument to another function and is executed after that function has completed. Callbacks are often used for asynchronous operations. Example:

```function fetchData(callback) {
  // Simulating an async operation
  setTimeout(function() {
    const data = 'Some data';
    callback(data);
  }, 1000);
}

function processData(data) {
  console.log('Processed data:', data);
}

fetchData(processData);
```
