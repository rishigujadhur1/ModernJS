function multiply(a,b){
    return a*b;
}

// function expressions
const minus = function(a,b){
    return a-b;
}

console.log(minus(3,2) + multiply(2,2));

// Arrow functions - (param) => expression
const greeter = () => {alert('Hello World!')} 
greeter();