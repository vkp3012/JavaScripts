/*------------------------------Number--------------------------------*/

console.log("------------------------------Number--------------------------------");
let billion =1000000000;

let billion1 =1_000_000_000;

console.log(billion1);

let bn = 1e9
console.log(bn);

let bn1 = 1e-6;
console.log(bn1);


/*------------------------- toString(base)-----------------------------------*/

console.log("------------------------- toString(base)-----------------------------------");
let nums = 255;
console.log(nums.toString(16)); //ff
console.log(nums.toString(2)); //11111111

console.log(nums.toString(36)); //73

console.log(123456..toString(36)); //2n9c

// console.log(123456.toString(36)); //SyntaxError: Invalid or unexpected token


console.log((123456).toString(36)); //2n9c


/*--------------------------Rounding-------------------------*/

console.log("--------------------------Rounding-------------------------");

//Math.floor
console.log(Math.floor(3.1));//3
console.log(Math.floor(3.6));//3
console.log(Math.floor(3.9));//3
console.log(Math.floor(-1.1));//2
console.log(Math.floor(-2));//2

//Math.ceil
console.log(Math.ceil(3.1));   //4
console.log(Math.ceil(3.7));   //4
console.log(Math.ceil(-1.1));  //-1
console.log(Math.ceil(-2));    //-2

//Math.round
console.log(Math.round(3.1));  //3
console.log(Math.round(3.5));  //4
console.log(Math.round(3.8));  //4

//Math.trunc
console.log(Math.trunc(3.1));  //3
console.log(Math.trunc(3.5));  //3
console.log(Math.trunc(3.7));  //3


//Question Example : - Multiply-and-divide.
let num = 1.23456
console.log(Math.round(num*100)/100);  // 1.23456 -> 123.456 -> 123 -> 1.23


//Question Example : -  toFixed(n)
let num1 = 1.23
console.log(num1.toFixed(1));   //1.2


let num2 = 1.27
console.log(num2.toFixed(1));   //1.3


let num3 = 1.27
console.log(num2.toFixed(5));   //1.27000  added zeroes to make exactly 5 digits

/*----------------------------Imprecise calculations--------------------------*/

console.log("----------------------------Imprecise calculations--------------------------");

//Imprecise calculations
console.log(1e500);   //Infinity


console.log(0.1+0.2==0.3);//false

console.log(0.1 + 0.2);  //0.30000000000000004

console.log(0.1.toFixed(20));  //0.10000000000000000555

let sum = 0.1 + 0.2 
console.log(sum.toFixed(2));   //0.30

let sum1 = 0.1 + 0.2 
console.log(+sum1.toFixed(2));   //0.3

console.log(9999999999999999);   //10000000000000000

console.log((0.1 * 10 + 0.2 * 10) / 10);  //0.3
console.log((0.28 * 100 + 0.14 * 100) / 100);  //0.4200000000000001

/*-----------------------NaN and Infinte --------------------------*/

console.log("-----------------------NaN and Infinte --------------------------");

//NaN
console.log(isNaN(NaN)); //true
console.log(isNaN("str")); //true

console.log(NaN === NaN);  //false

//isFinit
console.log(isFinite("15")); //true
console.log(isFinite("str"));  //false
console.log(isFinite(Infinity));  //false , because a special value: Infinity



// let num5 = +prompt("Enter a number", '');

// will be true unless you enter Infinity, -Infinity or not a number
// console.log( isFinite(num5) );

/*------------------------- parseInt and parseFloat -----------------------------*/

console.log("------------------------- parseInt and parseFloat -----------------------------");

//Numeric conversion
console.log(+"100px");   //NaN

//parseInt
console.log(parseInt("100px"));  //100

console.log(parseInt("a100"));  //NaN  the first symbol stops the process

//The second argument of parseInt(str, radix)
console.log(parseInt('0xff',16));    //255
console.log(parseInt('ff', 16)); // 255, without 0x also works

//parseFloat
console.log(parseFloat("12.5em"));   //12.5

console.log( parseFloat('12.3.4') ); // 12.3, the second point stops the reading;


/*---------------------Other Math Function----------------------*/

console.log("---------------------Other Math Function----------------------");

console.log(Math.random()); // 0.4792290075341894    (any random numbers)


//Math.max()
console.log(Math.max(100,1000,456,657));  //1000

//Math.min
console.log(Math.min(100,1000,456,657));  //100


//Math.pow()
console.log(Math.pow(2,4));


/*-----------------------Question ------------------------*/

console.log("-----------------------Question ------------------------");

console.log(1.35.toFixed(1)); //1.4

// why is 6.35 rounded to 6.3, not 6.4?

console.log(6.35.toFixed(1)); //6.3

//Internally the decimal fraction 6.35 is an endless binary.
// As always in such cases, it is stored with a precision loss.

console.log(6.35.toFixed(20)); //6.34999999999999964473
console.log(Math.round(6.35 * 10) / 10);

//1-3
console.log(1.35.toFixed(20));  //1.35000000000000008882
console.log(2.35.toFixed(20));  //2.35000000000000008882
console.log(3.35.toFixed(20));  //3.35000000000000008882

//4-9
console.log(4.35.toFixed(20));  //4.34999999999999964473
console.log(4.35.toFixed(1));   //4.3

console.log(5.35.toFixed(20)); //5.34999999999999964473
console.log(5.35.toFixed(1)); //5.3

console.log(7.35.toFixed(20)); //7.34999999999999964473
console.log(7.35.toFixed(1)); //7.3

console.log(8.35.toFixed(20)); //8.34999999999999964473
console.log(8.35.toFixed(1)); //8.3

console.log(9.35.toFixed(20)); //9.34999999999999964473
console.log(9.35.toFixed(1)); //9.3

console.log(10.35.toFixed(20)); //10.34999999999999964473
console.log(10.35.toFixed(1)); //10.3

console.log(22.35.toFixed(20)); //10.34999999999999964473
console.log(22.35.toFixed(1)); //10.3


console.log(35.35.toFixed(20)); //35.35000000000000142109
console.log(35.35.toFixed(1)); //10.4



