
/*------------------Array Method----------------------*/
console.log("--------------Array Method-----------------");

//Methods that work with the end of the array:

console.log("--------------pop-----------------");
//1. pop
let fruits =["Apple","Orange","Pear"];
console.log(fruits.pop());// remove "Pear" and console.log it
console.log(fruits );// Apple, Orange

console.log("--------------push-----------------");
//2.push
let fruits1 =["Apple","Orange"];
fruits1.push("Pear");
console.log(fruits1);// Apple, Orange, Pear


//Methods that work with the beginning of the array:
console.log("--------------shift-----------------");
//1. shift
let fruits2 =["Apple","Orange","Pear"];
console.log(fruits2.shift());// remove Apple and console.log it
console.log(fruits2 );// Orange, Pear


console.log("-------------unshift----------------");
//2. Unshift
let fruits3 =["Orange","Pear"];
fruits3.unshift('Apple');
console.log(fruits3 );// Apple, Orange, Pear


//Methods push and unshift can add multiple elements at once:
console.log("-------------push and unshift----------------");
let fruits4 = ["Apple"];
fruits4.push("Orange","Peach"); 
console.log(fruits4);//["Apple", "Orange", "Peach"]
fruits4.unshift("Pineapple","Lemon");
console.log(fruits4);// ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]


//How to delete an element from the array?
console.log("--------------delete----------------");
let arr =["I","go","home"];
delete arr[1];// remove "go"
console.log(arr[1]); // undefined
console.log(arr); // now arr = ["I",  , "home"];
console.log(arr.length );// 3

console.log("--------------splice-----------------");

//splice
let arr1 = ["I","study","JavaScript"];
arr1.splice(1,1);// from index 1 remove 1 element
console.log(arr1);// ["I", "JavaScript"]


let arr2 =["I","study","JavaScript","right","now"];// remove 3 first elements and replace them with another
arr2.splice(0,3,"Let's","dance");
console.log(arr2)// now ["Let's", "dance", "right", "now"]


let arr3 =["I","study","JavaScript","right","now"];// remove 2 first elements
let removed = arr3.splice(0,2);
console.log(removed);// "I", "study" <-- array of removed elements
console.log(arr3);   //[ 'JavaScript', 'right', 'now' ]


let arr4 =["I","study","JavaScript"];// from index 2// delete 0// then insert "complex" and "language"
arr4.splice(2,0,"complex","language");
console.log(arr4 );// "I", "study", "complex", "language", "JavaScript"

//Negative indexes allowed
let arr5 =[1,2,5];// from index -1 (one step from the end)// delete 0 elements,// then insert 3 and 4
arr5.splice(-1,0,3,4);
console.log(arr5 );// 1,2,3,4,5

console.log("--------------slice-----------------");
//slice
let arr6 =["t","e","s","t"];
console.log(arr6.slice(1,3));// e,s (copy from 1 to 3)
console.log(arr6.slice(-2));// s,t (copy from -2 till the end)

/*-------------------concat------------------*/
console.log("--------------concat-----------------");
//concat
let arr7 =[1,2];// create an array from: arr and [3,4]
console.log(arr7.concat([3,4]));// 1,2,3,4// create an array from: arr and [3,4] and [5,6]
console.log(arr7.concat([3,4],[5,6]));// 1,2,3,4,5,6// create an array from: arr and [3,4], then add values 5 and 6
console.log(arr7.concat([3,4],5,6));// 1,2,3,4,5,6


let arr9 =[1,2];
let arrayLike ={0:"something",length:1};
console.log(arr7.concat(arrayLike)); // [ 1, 2, { '0': 'something', length: 1 } ]

let arr11 =[1,2];
let arrayLike1 ={0:"something",1:"else",  [Symbol.isConcatSpreadable]:true,length:2};
console.log(arr11.concat(arrayLike1));// 1,2,something,else


/*---------------------Iterate: forEach------------------*/
console.log("--------------Iterate: forEach-----------------");

//Iterate: forEach
// for each element call 
["Bilbo","Gandalf","Nazgul"].forEach(console.log);

/*output is : -
                Bilbo 0 [ 'Bilbo', 'Gandalf', 'Nazgul' ]
                Gandalf 1 [ 'Bilbo', 'Gandalf', 'Nazgul' ]
                Nazgul 2 [ 'Bilbo', 'Gandalf', 'Nazgul' ]
*/



["Bilbo","Gandalf","Nazgul"].forEach((item,index,array)=>{
    console.log(`${item} is at index ${index} in ${array}`);
});

/*output is : -
                Bilbo is at index 0 in Bilbo,Gandalf,Nazgul
                Gandalf is at index 1 in Bilbo,Gandalf,Nazgul
                Nazgul is at index 2 in Bilbo,Gandalf,Nazgul
*/





/*-----------filter---------------*/
console.log("----------filter---------------");

//filter
let users =[
    {id:1,name:"John"},
    {id:2,name:"Pete"},
    {id:3,name:"Mary"}];// returns array of the first two users
let someUsers = users.filter(item=> item.id < 3);
console.log(someUsers.length);// 2