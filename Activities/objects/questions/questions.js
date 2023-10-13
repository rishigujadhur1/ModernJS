// Question 1:
// What will be the output of the following code?
var person = {
  name: "Alice",
  age: 30,
};
var clone = Object.create(person);
clone.name = "Bob";
console.log(person.name);

//   Question 2:
//   What will be the output of the following code?
var car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
};
for (var prop in car) {
  console.log(prop);
}

//   Question 3:
// What will be the output of the following code?
var laptop = {
  brand: "Dell",
  price: 1000,
};
console.log(Object.keys(laptop));

//   Question 4:
// What will be the output of the following code?
var person = {
  name: "Alice",
  age: 30,
};
var clone = Object.create(person);
console.log(clone.name);

// Question 5:
// What will be the output of the following code?
var student = {
  name: "John",
  age: 20,
};
student.address = "123 Main St";
console.log(student);

// Question 6:
// What will be the output of the following code?
var person = {
  name: "Alice",
  age: 30,
};
var clone = Object.create(person);
clone.name = "Bob";
console.log(clone.age);

// Question 7:
// What will be the output of the following code?
var computer = {
  brand: "HP",
  model: "Pavilion",
};
console.log(computer.hasOwnProperty("brand"));

// Question 8:
// What will be the output of the following code?
var book = {
  title: "JavaScript Basics",
  author: "John Doe",
};
delete book.title;
console.log("title" in book);

// Question 9:
// What will be the output of the following code?
var person = {
  name: "Alice",
  age: 30,
};
var clone = Object.create(person);
clone.age = 25;
console.log(clone.name);

// Question 10:
// What will be the output of the following code?
var phone = Object.create(null);
phone.brand = "Samsung";
console.log(phone.brand);
