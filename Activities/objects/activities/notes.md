JSON.stringify() converts a JavaScript object into a JSON string, while JSON.parse() parses a JSON string and converts it into a JavaScript object

const person = { "name": "Charlie", "age": 35 };
const jsonString = JSON.stringify(person); // Converts to JSON string
const parsedPerson = JSON.parse(jsonString); // Converts back to JavaScript object

example of JSON:

[
{
"name": "Smartphone",
"price": 499.99,
"available": true
},
{
"name": "Laptop",
"price": 899.99,
"available": false
}
]
