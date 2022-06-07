
/*------------------Array Method----------------------*/
console.log("--------------Array Method-----------------");

//Methods that work with the end of the array:
//1. pop
let fruits =["Apple","Orange","Pear"];
console.log(fruits.pop());// remove "Pear" and console.log it
console.log(fruits );// Apple, Orange

//2.push
let fruits1 =["Apple","Orange"];
fruits1.push("Pear");
console.log(fruits1);// Apple, Orange, Pear


//Methods that work with the beginning of the array:

//1. shift
let fruits2 =["Apple","Orange","Pear"];
console.log(fruits2.shift());// remove Apple and console.log it
console.log(fruits2 );// Orange, Pear


//2. Unshift
let fruits3 =["Orange","Pear"];
fruits3.unshift('Apple');
console.log(fruits3 );// Apple, Orange, Pear


//Methods push and unshift can add multiple elements at once:

let fruits4 = ["Apple"];
fruits4.push("Orange","Peach"); 
console.log(fruits4);//["Apple", "Orange", "Peach"]
fruits4.unshift("Pineapple","Lemon");
console.log(fruits4);// ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]