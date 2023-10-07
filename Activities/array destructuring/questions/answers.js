//Q0
// 10

// Answer 1: Array destructuring is a feature in JavaScript that allows you to unpack values from arrays or other iterable objects into distinct variables. It is useful for simplifying code, making it more readable, and enabling convenient assignment and manipulation of array elements.

// Answer 2: You can declare and assign variables using array destructuring like this:
const [first, second, third] = [1, 2, 3];
//After this, first will be 1, second will be 2, and third will be 3.

// Answer 3: If there are more variables in the destructuring pattern than elements in the array, the extra variables will be assigned undefined. For example:
const [a, b, c] = [1, 2];
// a is 1, b is 2, c is undefined

// Answer 4: Yes, you can skip elements in an array while destructuring by using commas without assigning them to variables. For example:
const [first1, , third1] = [1, 2, 3];
// first is 1, third is 3

// Answer 5: You can swap the values of two variables using array destructuring like this:
let x = 1;
let y = 2;
[x, y] = [y, x];
// Now, x is 2, and y is 1

// Answer 6: The rest operator (...) in array destructuring allows you to collect the remaining elements of an array into a new array variable. For example:
const [first3, ...rest3] = [1, 2, 3, 4];
// first is 1, rest is [2, 3, 4]

// Answer 7: To destructure nested arrays in JavaScript, you can use nested destructuring patterns. For example:
const [x1, [y1, z]] = [1, [2, 3]];
// x1 is 1, y1 is 2, z is 3

// Answer 8: Square brackets [] are used for array destructuring, and curly braces {} are used for object destructuring. Square brackets are appropriate when working with arrays, while curly braces are used when working with objects.

// Answer 9: You can use array destructuring to extract values from a function's return like this:
function getNumbers() {
  return [1, 2, 3];
}

const [a1, b1, c1] = getNumbers();
// a1 is 1, b1 is 2, c1 is 3

// Answer 10: To provide default values for variables in array destructuring, you can use the = operator. If the value is not present in the array, the default value will be used. For example:
const [a2 = 1, b2 = 2] = [3];
// a2 is 3, b2 is 2

// Answer 11: You cannot directly destructure properties from an object while inside an array destructuring pattern. You would use object destructuring separately for that purpose.

// Answer 12: You can use array destructuring with the for...of loop to iterate over the elements of an array easily:
const arr = [1, 2, 3];
for (const item of arr) {
  console.log(item);
}

// Answer 13: If you try to destructure a non-iterable value (e.g., a number) using array destructuring, you'll get a TypeError. Array destructuring is intended for iterable objects like arrays or strings.

// Answer 14: To extract specific elements from an array and ignore the rest, you can use commas without assigning variables to the unwanted elements:
const [first4, , third4] = [1, 2, 3];
// first4 is 1, third4 is 3
