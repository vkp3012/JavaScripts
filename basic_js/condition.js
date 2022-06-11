const ps = require("prompt-sync")
const prompt = ps();


// let year =prompt('In which year was ECMAScript-2015 specification published?','');
// // if(year ==2015){
// //    console.log('You are right!');
// // }


// if(year ==2015){
//    console.log("That's correct!");
// }else{
//    console.log("You're so smart!");
// }



// let year1 =prompt('In which year was the ECMAScript-2015 specification published?','');
// if(year1 ==2015){
//    console.log('You guessed it right!');
// }else{
//    console.log('How can you be so wrong?');// any value except 2015
// }


// let year2 =prompt('In which year was the ECMAScript-2015 specification published?','');
// if(year <2015){
//    console.log('Too early...');
// }else if(year >2015){
//    console.log('Too late');
// }else{
//    console.log('Exactly!');
// }

// let accessAllowed;
// let age =prompt('How old are you?','');
// if(age >18){
//    accessAllowed =true;
// }else{
//    accessAllowed =false;
// }
// console.log(accessAllowed);

// let accessAllowed =(age > 18)?true:false;

let age =prompt('age?',18);
let message = (age <3)?'Hi, baby!':(age <18)?'Hello!':(age <100)?'Greetings!':'What an unusual age!';
console.log(message );


let company = prompt('Which company created JavaScript?','');
(company =='Netscape')?console.log('Right!'):console.log('Wrong.');