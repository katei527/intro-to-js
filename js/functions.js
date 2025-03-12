// Define a function using the function keyword


// Call a function


// Define an arrow function


// Function with parameters and return values


// Default parameters in a function


// Function expression vs function declaration


// Immediately Invoked Function Expressions (IIFE)


// Higher-order functions (functions that take functions as arguments)


// Demonstrate callback functions
function hi(name) {
    return name
}

function whatIsYourName() {
    return name
} 

// Pure vs impure functions


// How functions can return other functions


// const arr = [1, 2, 3,].mmap(someCallBackFunction)

// function arr = [1,2,3,].map(function (element){
//     console.log('The current element is:', element);
// })

const arr = [1, 2, 3].map((num) =>
    console.log('The current element is: ', num)
);

console.log(arr);