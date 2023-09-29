//What is the output of this code?
//Q1
let array = [1, 2, 3];
console.log(array[0]);

//Q2
let array2 = [1, 2, 3];
console.log(array2[5]);

//Q3
let array3 = [1, 2, 3];
console.log(array[1]);

//Q4
let array4 = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];
console.log(array[2].name);

//Q5
let array5 = [1, 2, 3];
console.log(array[-1]);

//Q6
let array6 = [1, 2, 3];
console.log(array.length);

//Q7
let array7 = [];
console.log(array[0]);

//Q8
const words = ["apple", "banana", "cherry"];
const firstLetter = words.map((word) => word[0]);

console.log(firstLetter);

//Q9
const students = [
  { name: "Alice", score: 95 },
  { name: "Bob", score: 80 },
  { name: "Charlie", score: 75 },
];

const studentNames = students.map((student) => student.name);

console.log(studentNames);
