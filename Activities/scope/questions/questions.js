//What is the output of this code?
//Q1
var globalVar = "I'm global";

function myFunction() {
  var localVar = "I'm local";
  console.log(globalVar); // What will this print?
}

myFunction();

//Q2
function outerFunction() {
  var outerVar = "Outer";

  function innerFunction() {
    var innerVar = "Inner";
    console.log(outerVar); // What will this print?
  }

  innerFunction();
}

outerFunction();

//Q3
var x = 10;

function shadowingExample() {
  var x = 20;
  console.log(x); // What will this print?
}

shadowingExample();

//Q4
var a = 5;

function globalVariableExample() {
  console.log(a); // What will this print?
}

globalVariableExample();

//Q5
var b = 10;

function parameterExample(b) {
  console.log(b); // What will this print?
}

parameterExample(20);

//Q6
function blockScopeExample() {
  if (true) {
    let blockVar = "I'm inside a block";
  }
  console.log(blockVar); // What will this print?
}

blockScopeExample();
