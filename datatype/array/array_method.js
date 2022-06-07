
/*------------------Array Method----------------------*/
console.log("--------------Array Method-----------------");

//pop
let fruits =["Apple","Orange","Pear"];
console.log(fruits.pop());// remove "Pear" and console.log it
console.log(fruits );// Apple, Orange

//push
let fruits1 =["Apple","Orange"];
fruits1.push("Pear");
console.log(fruits1);// Apple, Orange, Pear


//Methods that work with the beginning of the array:

//shift
let fruits2 =["Apple","Orange","Pear"];
console.log(fruits2.shift());// remove Apple and console.log it
console.log(fruits2 );// Orange, Pear