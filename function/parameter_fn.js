
// function showMessage(from, text) { // parameters: from, text
//     console.log(from + ': ' + text);
//   }
  
// showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
// showMessage('Ann', "What's up?"); // Ann: What's up? (**)

// parameters: from, text
// function showMessage(from,text){
//     console.log(from +': '+text);
// }

// showMessage('Ann','Hello!');// Ann: Hello! (*)showMessage('Ann',"What's up?");// Ann: 


// function showMessage(from,text){  
//     from ='*' + from + '*';// make "from" look nicer
//     console.log(from +': '+text );
// }

// let from ="Ann";
// showMessage(from,"Hello");// *Ann*: Hello
// // the value of "from" is the same, the function modified a local copy
// console.log(from );// Ann


// function showMessage(from,text = "no text given"){
//     console.log(from +": "+text );
// }
// showMessage("Ann");// Ann: no text given


// function showMessage(from,text = anotherFunction()){
//     // anotherFunction() only executed if no text given
//     // its result becomes the value of text
// }


// function showMessage(from,text){  
//     if(text === undefined){
//         text ='no text given';
//     }
//     console.log(from +": "+text );
// }

// showMessage("Ann") //Ann: no text given

// function showMessage(from, text) {
//     // If the value of text is falsy, assign the default value
//     // this assumes that text == "" is the same as no text at all
//     text = text || 'no text given';
// }

// function showMessage(text){// ...  
//     if(text === undefined){
//         // if the parameter is missing
//         text ='empty message';
//     }
//    console.log(text);
// }
// showMessage();// empty message


// function showMessage(text){
//     // if text is undefined or otherwise falsy, set it to 'empty'
//     text = text ||'empty';
//     console.log(text);
// }

// showMessage()


function showCount(count){
    // if count is undefined or null, show "unknown"
    console.log(count ??"unknown");
}
showCount(0);// 0
showCount(null);// unknown
showCount();// unknown