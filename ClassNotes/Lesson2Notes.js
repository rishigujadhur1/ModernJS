// JS class notes - 18/09/23
 
// Arrays
let myArray = [1,2,3,4];
// Array index starts at 0
// Display Array value
myArray[0];

// For Loop
for(let i = 0; i <myArray.length; i++){}

// Comparision Operator https://twitter.com/profulsadangi/status/1288384011924955136/photo/1
// == equal
// === used for strings
// !== used for strings
// > greater than
// < less than
// != not equal
// >= greater or equal
// <= less or equal

//Array functions
//ArrayName.map(arrow function)
myArray.map((value)=> console.log(value));
//ArrayName.filter(arrow function)
myArray.filter((value)=> value > 1);
//ArrayName.find(arror function)
myArray.find((value)=> value == 1);