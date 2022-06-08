

//Function Expression
// let sayHi=function(){
//     console.log("Hello");
// };

//function is a value
// function sayHi(){
//     console.log("Hello");
// }
// console.log(sayHi);// shows the function code : [Function: sayHi]
// sayHi(); //Hello

//A copy function another variable

//Example : 1
// function sayHi() {   // (1) create
//     console.log( "Hello" );
// }
  
// let func = sayHi;    // (2) copy
  
// func(); //Hello


// sayHi(); // Hello
// console.log(func);   //[Function: sayHi]
// console.log(sayHi);  //[Function: sayHi]

//Example : 2
// function sayHi() {   // (1) create
//     console.log( "Hello" );
// }
  
// let func = sayHi();    // (2) copy
  
// // func(); //TypeError: func is not a function
// func; //Hello


// // sayHi(); // Hello
// sayHi;  // not the function sayHi itself.
// console.log(func);   //undefined
// // console.log(func());   //TypeError: func is not a function
// console.log(sayHi);  //[Function: sayHi]



let sayHi=function(){// (1) create
    alert("Hello");
};
let func = sayHi;


function sayHi(){
    // ...
}

let sayHi = function(){
    // ...
};