

/*-------------Function Declaration------------*/

console.log("-----------Function Declaration-------------");

//Function Declaration
function msg(){
    console.log("hello Every One! I'm Vivek Kumar Patel");
}


//call function
msg();


let varContainingFunction = function() {
    let varInFunction = "I'm in a function.";
    console.log("hi there!", varInFunction);
};

varContainingFunction();



console.log("-----------Local Variable----------------");

//local variable
function Message(){  
    let msg1 ="Hello, I'm JavaScript!";// local variable
    console.log(msg1);
}

Message();                       // Hello, I'm JavaScript!
// console.log(msg1);           // <-- Error! The variable is local to the function


/*---------------Outer Variable------------------------*/
console.log("-------------Outer Variable--------------------");


//Outer Variable
// let userName ='John';
// function showMessage(){
//     let message ='Hello, '+ userName;
//     console.log(message);
// }
// showMessage();// Hello, John


let userName1 ='John';

function showMessage1(){
    userName1 = "Bob";                   // (1) changed the outer variable
    let message ='Hello, '+ userName1;
    console.log(message);
}
console.log(userName1);                  // John before the function call

showMessage1();

console.log(userName1);                   // Bob, the value was modified by the function


let userName2 ='John';
function showMessage2(){ 
     let userName2 ="Bob";                   // declare a local variable
     let message ='Hello, '+ userName2;      // Bob
     console.log(message);
}

// the function will create and use its own userName
showMessage2();
console.log(userName2 );               // John, unchanged, the function did not access the outer variable


