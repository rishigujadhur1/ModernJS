// String Basics:

// Strings are sequences of characters enclosed in either single (' ') or double (" ") quotes.
// String Creation:
const str1 = "Hello, World!";
const str2 = "JavaScript";

// String Length:

// You can find the length of a string using the length property.
// javascript
const length = str1.length; // Returns the length of str1

// String Concatenation:

// Use + operator to concatenate strings.
const greeting = "Hello, " + "World!";

// String Methods:

// JavaScript provides various string methods to manipulate strings.
const str = "JavaScript is amazing!";

// Example methods:
const upperCase = str.toUpperCase(); // Convert to uppercase

const lowerCase = str.toLowerCase(); // Convert to lowercase
const subStr = str.substring(0, 10); // Get a substring
const indexOfA = str.indexOf("a"); // Find the index of a character
const replacedStr = str.replace("amazing", "awesome"); // Replace a substring

// String Interpolation (Template Literals):

// Template literals (backticks) allow embedding variables or expressions inside strings.

const name = "Alice";
const message = `Hello, ${name}!`;

// String Comparison:

// You can compare strings using comparison operators (==, ===, !=, !==) and string methods like localeCompare().
// String Escaping:

// Use the escape character \ to escape special characters within strings.
const specialString = 'This is a "special" string.';

// String Conversion:

// You can convert other data types to strings using toString() or by using a template literal.
const num = 42;
const strNum = num.toString(); // Convert a number to a string
const strBoolean = `${true}`; // Convert a boolean to a string

// String Indexing:

// Individual characters in a string can be accessed by their index (0-based).

const char = str[0]; // Access the first character

// String Slicing:

// You can extract portions of a string using slicing.
const slicedStr = str.slice(0, 5); // Extract the first 5 characters
