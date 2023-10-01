Explain the difference between synchronous and asynchronous code execution in JavaScript.

Answer: Synchronous code executes one operation at a time, blocking further execution until the current operation is complete. Asynchronous code allows multiple operations to be initiated and executed concurrently without blocking.

Explain the role of the async/await syntax in simplifying error handling for asynchronous code compared to using callbacks or promises.

async/await simplifies error handling by allowing you to use try...catch for synchronous-like error handling in asynchronous code, making it more readable and maintainable.

Explain what the await keyword returns when used with a resolved promise and when used with a rejected promise.

When used with a resolved promise, await returns the resolved value. When used with a rejected promise, it throws an exception, which can be caught with try...catch.
