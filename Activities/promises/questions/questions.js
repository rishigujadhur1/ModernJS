//What is the output of this code?
// Q1
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise resolved!"), 2000);
});

myPromise.then((result) => {
  console.log(result);
});
