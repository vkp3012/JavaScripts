

// let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)


// function sayHi(){
//   console.log('Hello');
// }
// setTimeout(sayHi,1000);


// function sayHi(phrase,who){
//    console.log(phrase +', '+who );
// }
// setTimeout(sayHi,1000,"Hello","John");// Hello, John


// setTimeout("console.log('Hello')",1000);
//TypeError [ERR_INVALID_CALLBACK]: Callback must be a function. Received "console.log('Hello')"


setTimeout(()=>console.log('Hello'),1000); //Hello


//Canceling with clearTimeout
// let timerId =setTimeout(...);
// clearTimeout(timerId);

let timerId = setTimeout(()=>alert("never happens"),1000);
console.log(timerId);// timer identifierclearTimeout(timerId);
console.log(timerId);// same identifier (doesn't become null after canceling)