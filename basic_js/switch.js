

// let a = 2 + 2;

// switch (a) {
//   case 3:
//     console.log( 'Too small' );
//     break;
//   case 4:
//     console.log( 'Exactly!' );
//     break;
//   case 5:
//     console.log( 'Too big' );
//     break;
//   default:
//     console.log( "I don't know such values" );
// }


// let a = 2 + 2;

// switch (a) {
//   case 3:
//     console.log( 'Too small' );
//   case 4:
//     console.log( 'Exactly!' );
//   case 5:
//     console.log( 'Too big' );
//   default:
//     console.log( "I don't know such values" );
// }


// console.log( 'Exactly!' );
// console.log( 'Too big' );
// console.log( "I don't know such values" );


// let a = "1";
// let b = 0;

// switch (+a) {
//   case b + 1:
//     console.log("this runs, because +a is 1, exactly equals b+1");
//     break;

//   default:
//     console.log("this doesn't run");
// }


let a = 3;

switch (a) {
  case 4:
   console.log('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
   console.log('Wrong!');
   console.log("Why don't you take a math class?");
    break;

  default:
   console.log('The result is strange. Really.');
}


const ps = require("prompt-sync")
const prompt = ps();
let arg = prompt("Enter a value?");
switch (arg) {
  case '0':
  case '1':
    console.log( 'One or zero' );
    break;

  case '2':
    console.log( 'Two' );
    break;

  case 3:
    console.log( 'Never executes!' );
    break;
  default:
    console.log( 'An unknown value' );
}