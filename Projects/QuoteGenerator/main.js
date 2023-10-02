//1. Create an array called colors and add three color names to it. ["red", "blue", "yellow"]
// (){} for functions , [] for arrays, {} for objects
// .map(()=> ) , callback is a call to another function from 1 function
// all keywords which are not from JS are variables
// string = "abc" or 'abc'

const colors= ["red","blue","yellow"];
//2. Declare an array numbers with the numbers 1 through 5 in it.
var Number= [1,2,3,4,5];
//3. Define a function that accepts an array of numbers and returns the sum of
// all numbers in the array.


function sum(Num1){
  // declare variable total
  let total=0;
  // add value to total on each loop with: total += value
  Num1.map((value)=>total = total + value);
  console.log(total);
}

sum([1,2,3,4,5]);