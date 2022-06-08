
const ps = require("prompt-sync")
const prompt = ps();
// Function Declaration
// function sum(a,b){
//     return a +b;
// }

// sayHi("John");// Hello, John
// function sayHi(name){
//     console.log(`Hello, ${name}`);
// }

// let age = prompt("What is your age?", 18);

// // conditionally declare a function
// if (age < 18) {
//     function welcome() {
//         console.log("Hello!");
//     }
// } else {
//   function welcome() {
//     console.log("Greetings!");
//   }
// }

// // ...use it later
// welcome(); // Error: welcome is not defined


// Function Expression
// let sum = function(a,b){
//     return a +b;
// };

// sayHi("John");// error!
// //ReferenceError: Cannot access 'sayHi' before initialization
// let sayHi=function(name){
//     // (*) no magic any more
//     aconsole.log(`Hello, ${name}`);
// };


// let age = 16; // take 16 as an example

// if (age < 18) {
//   welcome();               // \   (runs)
//                            //  |
//   function welcome() {     //  |
//     console.log("Hello!");       //  |  Function Declaration is available
//   }                        //  |  everywhere in the block where it's declared
//                            //  |
//   welcome();               // /   (runs)

// } else {

//   function welcome() {
//     console.log("Greetings!");
//   }
// }

// // Here we're out of curly braces,
// // so we can not see Function Declarations made inside of them.

// welcome(); // Error: welcome is not defined


// let age = prompt("What is your age?", 18);

// let welcome;

// if (age < 18) {

//   welcome = function() {
//     console.log("Hello!");
//   };

// } else {

//   welcome = function() {
//     console.log("Greetings!");
//   };

// }

// welcome(); // ok now


let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  function() { console.log("Hello!"); } :
  function() { console.log("Greetings!"); };

welcome(); // ok now
