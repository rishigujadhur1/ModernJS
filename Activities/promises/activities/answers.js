//Task 1
const myPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise resolved!");
  }, 2000);
});

myPromise.then((result) => {
  console.log(result); // This will log "Promise resolved!" after 2 seconds
});

//   In this code:
// We create a new Promise using the Promise constructor.
// Inside the promise executor function, we use setTimeout to delay the resolution of the promise by 2 seconds.
// When the timer expires, we call resolve with the message "Promise resolved!".
// We then use .then() to handle the resolution of the promise and log the message when it resolves.
