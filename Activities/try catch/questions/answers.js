//
// Error Execution in Try Block: Any code within the try block is executed until the point where the error occurs. Once the error is encountered, the normal execution of the try block is immediately interrupted, and the control flow moves to the catch block.

// Catch Block Execution: The code within the catch block is executed, and the error object is made available as a parameter to the catch block. You can use this error object to inspect information about the error, such as its type and message.

// Rest of the Code: After executing the catch block, the program continues executing any code that comes after the try...catch statement. It does not terminate the entire program.
try {
  // Code before the error
  console.log("This will be executed.");

  // Code that causes an error
  const result = 10 / 0; // Attempting to divide by zero

  // Code after the error (won't be executed)
  console.log("This won't be executed.");
} catch (error) {
  // Handle the error gracefully
  console.error("An error occurred:", error.message);
}

// Code after the try...catch (will be executed)
console.log("Continuing execution after the try...catch.");

//   In this example, the code within the try block encounters an error when attempting to divide by zero. As a result:

//   The "This will be executed." log is printed.
//   The error is caught in the catch block, and the error message is logged.
//   The "Continuing execution after the try...catch." log is printed because the program continues to execute after the try...catch statement.
//   The key point is that a try...catch block allows you to handle errors gracefully and prevent them from crashing the entire program, enabling you to continue the execution flow after handling the error.

//Q2 Yes, code execution continues after the catch block if an error is caught.
// If there's a finally block, it is executed,
// and then the program continues executing the code after
//  the entire try...catch...finally statement.
