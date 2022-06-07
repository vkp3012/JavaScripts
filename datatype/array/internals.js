

/*---------------------Internals-----------------*/

console.log("-------------Internals-----------------");

//Internals
let fruits = ["Banana"]
let arr = fruits;// copy by reference (two variables reference the same array)
console.log(arr === fruits );// true
console.log(fruits );  //[ 'Banana' ]
arr.push("Pear");// modify the array by reference
console.log(fruits );// Banana, Pear - 2 items now



let fruits1 = []; // make an array
fruits1[99999] = 5; // assign a property with the index far greater than its length
fruits1.age = 25; // create a property with an arbitrary name
console.log(fruits1); //[ <99999 empty items>, 5, age: 25 ]
console.log(fruits1.length); //100000
fruits1[998] = 5;
console.log(fruits1);  //[ <998 empty items>, 5, <99000 empty items>, 5, age: 25 ]
