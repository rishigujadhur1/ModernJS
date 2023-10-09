// Explain the purpose of the try...catch statement in JavaScript and provide an example where it is useful.

// The try...catch statement in JavaScript is used for error handling. It allows you to try executing a block of code that may potentially throw an error, and if an error occurs within that block, it can be caught and handled gracefully without crashing the entire program. This is especially useful when dealing with potentially risky operations or external data.

try {
  // Code that may throw an error
  const result = 10 / 0; // Attempting to divide by zero
  console.log(result); // This line won't be reached due to the error
} catch (error) {
  // Handle the error gracefully
  console.error("An error occurred:", error.message);
}

//   In this example, we attempt to divide by zero, which is an operation that would normally throw an error. The try...catch block catches the error, and we can log an error message instead of crashing the program.

// 2. Write a JavaScript try...catch statement that attempts to parse an invalid JSON string and handles the resulting error by logging an error message.

const invalidJsonString = "{'name': 'Alice', 'age': 30}";

try {
  const parsedData = JSON.parse(invalidJsonString);
  console.log(parsedData); // This line won't be reached due to the error
} catch (error) {
  // Handle the JSON parsing error gracefully
  console.error("Error parsing JSON:", error.message);
}

// In this code, we attempt to parse an invalid JSON string using JSON.parse(), which will throw a SyntaxError since single quotes are not allowed in JSON. The try...catch block catches the error and logs an error message, allowing the program to continue running without crashing.
