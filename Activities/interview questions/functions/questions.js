// Question 1:
// What will be the output of the following code
var x = 5;
var y = x++;
console.log(x, y);

// Question 2:
function foo() {
  var a = (b = 5);
}
foo();
console.log(b);

// Question 3:
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);

// Question 4:
var arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function () {
    console.log("Index: " + i + ", element: " + arr[i]);
  }, 3000);
}

// Question 5:
var num = 8;
function logNumber() {
  console.log(num);
  var num = 10;
}
logNumber();

// Question 6:
function sum(a) {
  return function (b) {
    return a + b;
  };
}
var add5 = sum(5);
console.log(add5(10));

// Question 7:
console.log("1" - -"1");

// Question 8:
console.log(3 + "2");
