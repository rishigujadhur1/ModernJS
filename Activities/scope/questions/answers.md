Q1: Global vs. Local Scope:
It will print: "I'm global"
Explanation: The console.log(globalVar) inside myFunction will access the global variable globalVar.

Q2:
Nested Scope:

It will print: "Outer"
Explanation: The console.log(outerVar) inside innerFunction will access the variable outerVar from its outer function outerFunction.

Q3:
Variable Shadowing:

It will print: 20
Explanation: Inside shadowingExample, the local variable x with the value 20 shadows the global variable x.

Q4:
Global Variables:

It will print: 5
Explanation: The console.log(a) inside globalVariableExample will access the global variable a.

Q5:
Function Parameters:

It will print: 20
Explanation: The parameter b of the parameterExample function shadows the global variable b within the function.

Q6:
Block Scope (using let or const):

It will result in an error: "ReferenceError: blockVar is not defined"
Explanation: blockVar is declared with let inside the if block, and it's not accessible outside of that block.

Q7:
I'm inside a block
