
//unary operater
let x = 1;
x = -x;
console.log(x );// -1, unary negation was applied

//binary operater
let x1 = 1,y = 3;
console.log(y -x );// 2, binary minus subtracts values


//remender
console.log(5%2);// 1, a remainder of 5 divided by 2
console.log(8%3);// 2, a remainder of 8 divided by 3


//Exponentiation **
console.log(2**2);// 2² = 4
console.log(2**3);// 2³ = 8
console.log(2**4);// 2⁴ = 16


console.log(4**(1/2));// 2 (power of 1/2 is the same as a square root)
console.log(8**(1/3));// 2 (power of 1/3 is the same as a cubic root)


//String concatenation with binary +
let s ="my"+"string";
console.log(s);// mystring

console.log('1'+2);// "12"
console.log(2+'1');// "21"


console.log(2+2+'1');// "41" and not "221"


console.log('1'+2+2);// "122" and not "14"


console.log(6-'2');// 4, converts '2' to a number
console.log('6'/'2');// 3, converts both operands to numbers


//Numeric conversion, unary +

// No effect on numbers
let x2 =1;
console.log(+x2 );// 1
let y1 =-2;
console.log(+y1 );// -2

// Converts non-numbers
console.log(+true);// 1
console.log(+"");// 0


let apples ="2";
let oranges ="3";
console.log(apples + oranges );// "23", the binary plus concatenates strings


let apples1 ="2";
let oranges1 ="3";// both values converted to numbers before the binary plus
console.log(+apples1 + +oranges1 );// 5

// the longer variant// 
console.log( Number(apples1) + Number(oranges1) ); // 5


//Assignment
let a =2*2+1;
console.log(a );// 5


//Assignment = returns a value
let b = 1;
let c = 2;
let d = 3-(b = c + 1);
console.log(b );// 3
console.log(d );// 0


//Chaining assignments
let p,q,r;
p =q = r =2+2;
console.log(p );// 4
console.log(q );// 4
console.log(r );// 4


//Modify-in-place
let n =2;
n = n +5;
n = n *2;



let n1 =2;
n1 +=5;// now n = 7 (same as n = n + 5)
n1 *=2;// now n = 14 (same as n = n * 2)
console.log(n1 );// 14

let n2 =2;
n2 *=3+5;
console.log(n2 );// 16  (right part evaluated first, same as n *= 8)


//Increment/decrement
let counter =2;
counter++;// works the same as counter = counter + 1, but is shorter
console.log(counter );// 3

let counter1 =2;
counter1--;// works the same as counter = counter - 1, but is shorter
console.log(counter1);// 1


let counter2 =1;
let a5 = ++counter2;// (*)
console.log(a5);// 2

let counter3 =1;
let a6 =counter3++;// (*) changed ++counter to counter++
console.log(a6);// 1


let counter4 =1;
console.log(2*++counter4);// 4

let counter5 =1;
console.log(2*counter5++);// 2, because counter++ returns the "old" value


let counter6 =1;
console.log(2*counter6);
counter6++;

//comma
let a7 =(1+2,3+4);
console.log(a7 );// 7 (the result of 3 + 4)