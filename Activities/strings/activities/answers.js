// 1. Declare a string variable and concatenate it with another string.
const firstName = "John";
const greeting = "Hello, " + firstName;

// In this code, we declare a string variable firstName and then concatenate it with another string to create the greeting string.

// 2. Create a string and convert it to uppercase.
const lowercaseString = "example";
const uppercaseString = lowercaseString.toUpperCase();

// Here, we create a string lowercaseString and then use the toUpperCase() method to convert it to uppercase, resulting in uppercaseString.

// 3. Write a JavaScript expression that concatenates your first name, a space, and your last name to form a full name.
const firstName1 = "John";
const lastName = "Doe";
const fullName = firstName + " " + lastName;

// This expression concatenates the firstName and lastName variables with a space in between to create the fullName.

// 4. Explain how template literals (backticks) in JavaScript can be used.

// Template literals, denoted by backticks (`), are a way to create strings in JavaScript that allow for string interpolation and multiline strings. You can embed expressions or variables directly within the string using ${}. They provide a more concise and readable way to work with strings, especially when you need to include dynamic values.

const name = "Alice";
const greeting1 = `Hello, ${name}!`;

// In this example, we use a template literal to interpolate the value of the name variable into the greeting string.

// 5. Write a JavaScript expression that combines three strings to create the following sentence: "Today is a great day."

const day = "Today";
const adjective = "great";
const sentence = `${day} is a ${adjective} day.`;

// Here, we use a template literal to combine the values of day and adjective into the sentence string.

// 6. Write a JavaScript expression that uses template literals to create the following string: "The price of the product is Rs 99.99."
const currency = "Rs";
const price = 99.99;
const productDescription = `The price of the product is ${currency} ${price.toFixed(
  2
)}.`;

// In this expression, we use a template literal to incorporate the currency and price variables into the productDescription string. The toFixed(2) method is used to format the price with two decimal places.
