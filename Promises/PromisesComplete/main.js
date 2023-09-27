// Simulating an asynchronous function that resolves after a delay
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { message: "Data fetched successfully" };
      resolve(data); // Resolve with data
      // If there was an error, you can reject it like this:
      // reject(new Error('Data fetch failed'));
    }, 2000); // Simulate a 2-second delay
  });
}

// Using the promise
fetchData()
  .then((result) => {
    console.log(result.message); // Display the fetched data
  })
  .catch((error) => {
    console.error(error.message); // Handle errors, if any
  });
