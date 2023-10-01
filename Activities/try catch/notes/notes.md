The throw statement allows you to create and throw custom error objects. You can catch and handle these errors using try...catch. Example:

try {
throw new Error("Custom error message");
} catch (error) {
console.error("Caught error:", error.message);
}

How can you handle different types of errors within a try...catch block by using multiple catch blocks?

You can have multiple catch blocks, each handling a specific type of error. The first matching catch block is executed.

Explain the purpose of the finally block in a try...catch statement and when it is executed.

The finally block is optional and is executed regardless of whether an error occurred or not in the try block. It is used for cleanup operations.
