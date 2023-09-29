// What is the output of this code?
//Q1
async function greet() {
  return "Hello, world!";
}

greet().then((result) => {
  console.log(result);
});

//Q2
async function fetchData() {
  return await Promise.resolve("Data fetched successfully");
}

async function main() {
  const result = await fetchData();
  console.log(result);
}

main();
