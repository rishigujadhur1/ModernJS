// Question 1:
// To reverse the elements of an array in JavaScript, you can use the reverse() method.
var fruits = ["apple", "banana", "cherry", "date"];
fruits.reverse();

// Question 2:
// To find the sum of all even numbers in an array, you can use a loop and an if statement.

function sumOfEvens(numbersArray) {
  let sum = 0;
  for (let number of numbersArray) {
    if (number % 2 === 0) {
      sum += number;
    }
  }
  return sum;
}

// Question 3:
// To find and count the occurrences of a specific word in an array, you can use a loop and an if statement.
function countWordOccurrences(wordList, word) {
  let count = 0;
  for (let w of wordList) {
    if (w === word) {
      count++;
    }
  }
  return count;
}

// Question 4:
// To check if anyone in an array is above 18, you can use the some() method.
const isAdult = ageArray.some((age) => age > 18);

// Question 5:
// To calculate the average score of students, you can use the reduce() method.
function calculateAverage(scores) {
  const sum = scores.reduce((acc, current) => acc + current, 0);
  return sum / scores.length;
}

// Question 6:
// To filter people older than 30 living in a specific city, you can use the filter() method.
const filteredPeople = personArray.filter(
  (person) => person.age > 30 && person.city === "New York"
);

// Question 7:
// To find the largest number in an array, you can use the Math.max() function with the spread operator.
const maxNumber = Math.max(...data);

// Question 8:
// To check if any words in an array contain the letter 'z', you can use the some() method with a regular expression.
const hasZ = wordArray.some((word) => /z/i.test(word));

// Question 9:
// To find the student with the highest grade, you can use the reduce() method.
const highestGradeStudent = students.reduce(
  (max, student) => (student.grade > max.grade ? student : max),
  students[0]
);

// Question 10:
// To find two distinct numbers in an array that sum up to a target, you can use a nested loop.
function findTwoNumbersWithSum(values, target) {
  for (let i = 0; i < values.length; i++) {
    for (let j = i + 1; j < values.length; j++) {
      if (values[i] + values[j] === target) {
        return [values[i], values[j]];
      }
    }
  }
  return "No such pair exists.";
}
