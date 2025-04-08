
// Function declarations
function greet(name) {
    return `Hello, ${name}!`;
};
let greatter = greet("Dani");
console.log(greatter)

// Function Expression 
// function expression is when a fucntion is assigned to a variable. it doesn't have a name unless explicitly given\
const greet1 = function sayHello(name) {
    return `Hello ${name}!`
};
console.log(greet1("Samu"));

// Anonymous Function
// function that have no names after the function
const greet2 = function(name) {
    return `Hello ${name}`
}
console.log(greet2("Femi"))

// Hoisiting behaviour: When you call the function first before decalaring it.
sayHelloP(); // Works (Function Declaration)

function sayHelloP() {
    console.log("Hello thereee!");
}

//Arrow functions (Mordern alternative to function expression)
const greet3 = (name) => `Hello, ${name}`;
console.log(greet3("Ali"));