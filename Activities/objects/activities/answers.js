//1. Create an object called person with properties name and age.
const person = {
  name: "John",
  age: 30,
};
// This code defines an object named person with two properties: name and age.

//2. Define an object book with properties title, author, and publishedYear.
const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
};

// Here, we define an object named book with three properties: title, author, and publishedYear.

// 3. Explain the purpose of JSON.stringify() and JSON.parse() methods in JavaScript and provide an example of each.

//   JSON.stringify(): This method is used to convert a JavaScript object or value to a JSON-formatted string. It serializes the object, making it suitable for data storage or transmission.

// Example of JSON.stringify():
const person1 = {
  name: "John",
  age: 30,
};

const jsonString1 = JSON.stringify(person);
console.log(jsonString); // Outputs: '{"name":"John","age":30}'

//   JSON.parse(): This method is used to parse a JSON-formatted string and convert it into a JavaScript object.

// Example of JSON.parse():
const jsonString = '{"name":"Alice","age":25}';
const person2 = JSON.parse(jsonString);
console.log(person.name); // Outputs: "Alice"
console.log(person.age); // Outputs: 25

// 4. Write a JSON object representing a list of products, each with properties for name, price, and availability status (true/false).
const products = [
  {
    name: "Laptop",
    price: 999,
    available: true,
  },
  {
    name: "Smartphone",
    price: 699,
    available: false,
  },
  {
    name: "Headphones",
    price: 99,
    available: true,
  },
];

// JSON representation of the list of products
const productsJson = JSON.stringify(products);

console.log(productsJson);

//   In this code, we have created an array of product objects, and then we use JSON.stringify() to convert it into a JSON-formatted string representing a list of products.
