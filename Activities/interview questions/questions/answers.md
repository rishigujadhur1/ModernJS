Question 1: What is JavaScript, and how does it differ from Java?

Answer: JavaScript is a lightweight, interpreted scripting language primarily used for web development. It runs in web browsers and allows for dynamic client-side functionality. JavaScript is not related to Java; they share a similar name due to marketing decisions, but their syntax and use cases are very different.

Question 2: How do you declare a variable in JavaScript?

Answer: You can declare variables using the var, let, or const keyword, followed by the variable name. For example:

```var x;
let y;
const z = 10;
```

Question 3: Explain the difference between let, const, and var for variable declaration.

Answer:

var has function scope and is hoisted, which means it's accessible throughout the function.
let and const have block scope, and const is used for variables that won't be reassigned.
Question 4: What is the significance of "hoisting" in JavaScript?

Answer: Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during compilation. This allows you to use variables before they are declared, but only the declarations are hoisted, not the assignments.

Question 5: How do you check the data type of a variable in JavaScript?

Answer: You can use the typeof operator to determine the data type of a variable. For example:

```typeof x; // returns a string indicating the data type

```

Question 6: Explain the concept of "closures" in JavaScript.

Answer: Closures occur when a function has access to variables from an outer function, even after the outer function has finished executing. They are a powerful feature in JavaScript for creating private variables and preserving state.

Question 7: What is the difference between "null" and "undefined" in JavaScript?

Answer:

null represents an intentional absence of any object value.
undefined represents a variable that has been declared but hasn't been assigned a value.
Question 8: How does the "this" keyword work in JavaScript?

Answer: The this keyword refers to the current object in which a function is being executed. Its value depends on how a function is called: in the global scope, this refers to the global object (e.g., window in a browser); within an object method, this refers to the object itself.

Question 9: What is an IIFE (Immediately Invoked Function Expression) in JavaScript, and why is it used?

Answer: An IIFE is a JavaScript function that is defined and executed immediately. It's often used to create a private scope for variables to prevent them from polluting the global scope.

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
