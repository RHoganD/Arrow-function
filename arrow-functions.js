/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

function addTwoNumber(a, b) {
    //block code
    return a + b;
}
let sum1 = addTwoNumber(3, 5);
console.log(sum1)
 

// Arrow Function With Parameters

const addTwoNumbers = (a, b) => {
    //block code
    return a + b;
}

let sum = addTwoNumbers(3, 5);
console.log(sum)

// Single Line Arrow Function With Parameters
// const addTwoNumbers2 = (a, b) => (a+ b);  also valid
const addTwoNumbers2 = (a, b) => a+ b;

let sum2 = addTwoNumbers2(6, 4);
console.log(sum2)


// Implicit Returns

const saysomething = message => console.log(message);
saysomething('Hello there!!');


//function that doesnt take parameters we use empty parentesis to tell jS that we are declaring a function
const sayHello = () => console.log('Hello');
sayHello()



// Returning Multiple Lines

const returnMultipleLines = () =>  (
    `<p>
    This is a multiple string!
    </p>`
    )
    
    console.log(returnMultipleLines ());