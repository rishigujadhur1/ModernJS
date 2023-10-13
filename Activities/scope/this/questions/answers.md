Question 6: What is the this keyword in JavaScript, and how is its value determined?

The this keyword in JavaScript refers to the context in which a function is executed. Its value is determined dynamically and can change based on how a function is called. The value of this can be the global object, the object calling the function, or the object created by a constructor function, among other possibilities.

Question 7: What are the four common rules for determining the value of this in JavaScript?

Question 8: What is the global object in JavaScript, and how is it related to the this keyword?

The global object is the top-level object in the browser's or Node.js environment. It is often referred to as window in browsers and global in Node.js. When this is referenced in the global scope, it points to the global object.

Question 9: What is the purpose of the call(), apply(), and bind() methods in JavaScript, and how do they relate to the this keyword?

call(), apply(), and bind() are methods used to explicitly set the value of this in a function. call() and apply() allow you to invoke a function with a specified this context, while bind() creates a new function with a fixed this context.

Question 10: Provide an example of a scenario where the value of this changes within a single function.

- An example of this is when a method is passed as a callback and used in a different context. For instance:

```
const obj1 = {
  name: "Object 1",
  sayName: function () {
    console.log(this.name);
  },
};
```
