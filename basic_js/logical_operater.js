

/*---------------------OR----------------------*/
// console.log("---------------OR---------------------");

// console.log(true||true);// true
// console.log(false||true);//true
// console.log(true||false);// true
// console.log(false||false);// false


// if(1||0){// works just like 
//     if( true || false )
//     console.log('truthy!');
// }


// let hour =9;
// if(hour <10||hour >18){
//     console.log('The office is closed.');
// }


// let hour1 =12;
// let isWeekend =true;
// if(hour1 <10||hour1 >18||isWeekend){
//     console.log('The office is closed.');// it is the weekend
// }


// console.log(1||0);// 1 (1 is truthy)
// console.log(null||1);// 1 (1 is the first truthy value)
// console.log(null||0||1);// 1 (the first truthy value)
// console.log(undefined||null||0);// 0 (all falsy, returns the last value)



// let firstName ="";let lastName ="";let nickName ="SuperCoder";
// console.log(firstName ||lastName ||nickName ||"Anonymous");// SuperCoder


// true||console.log("not printed");
// false||console.log("printed");


/*---------------------AND----------------------*/
console.log("---------------AND---------------------");

console.log(true&&true);// true
console.log(false&&true);//false
console.log(true&&false);// false
console.log(false&&false);// false


let hour1 =12;
let minute1 =30;
if(hour1 ==12&&minute1 ==30){
    console.log('The time is 12:30');
}


if(1&&0){// evaluated as true && false
    console.log("won't work, because the result is falsy");
}

// if the first operand is truthy,
// AND returns the second operand:
console.log(1&&0);// 0
console.log(1&&5);// 5
// if the first operand is falsy,
// AND returns it. The second operand is ignored
console.log(null&&5);// null
console.log(0&&"no matter what");// 0


console.log(1&&2&&null&&3);// null


console.log(1&&2&&3);// 3, the last one
console.log(2&&3&&1);// 1, the last one


let x =1;(x >0)&&console.log('Greater than zero!');


let x1 =1;if(x1 >0)console.log('Greater than zero!');


/*---------------------not----------------------*/
console.log("---------------NOT---------------------");

console.log(!true);// false
console.log(!0);// true

console.log(!!"non-empty string");// true
console.log(!!null);// false


console.log(Boolean("non-empty string"));// true
console.log(Boolean(null));// false