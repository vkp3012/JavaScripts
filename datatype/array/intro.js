/*-------------------Array------------------*/

console.log("------------Declaration-----------------");

//Declaration
let arr = new Array();
let arr1 = [];

//value in array
let fruits =["Apple","Orange","Plum"];

//array element start with 0 element
let fruits1 =["Apple","Orange","Plum"];
console.log(fruits[0]);// Apple
console.log(fruits[1]);// Orange
console.log(fruits[2]);// Plum


//replace the element
fruits[2]='Pear';
console.log(fruits);

//add new one in array
fruits[3]='Lemon';
console.log(fruits);  // now ["Apple", "Orange", "Pear", "Lemon"]


//length
let fruits3 =["Apple","Orange","Plum"];
console.log(fruits3.length );// 3


// mix of values
let arr2 = ['Apple',{name:'John'},true,function(){
    console.log('hello');
}]; 

// get the object at index 1 and then show its name
console.log(arr2[1].name );// John

// get the function at index 3 and run it
arr2[3]();// hello


console.log("------------Trailing comma-------------");

//Trailing comma
let fruits4 =["Apple","Orange","Plum",];
console.log(fruits4);


console.log("-----------Get last elements with “at”------------------");



//Get last elements with “at”
let fruits5 =["Apple","Orange","Plum"];
console.log(fruits5[fruits5.length-1]);// Plum

console.log(fruits5[-1]);  //undefined - because negative index is not working in js❌


// same as fruits[fruits.length-1]
let fruits6 =["Apple","Orange","Plum"];
console.log(fruits6.at(-1));// Plum