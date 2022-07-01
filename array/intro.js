/*-------------------Array------------------*/

console.log("------------Declaration-----------------");

//Declaration
let arr = new Array();
let arr1 = [];

let arr111 = new Array(10);
let arr112 = [10];

console.log(arr111); //[ <10 empty items> ]
console.log(arr112); //[10]

//value in array
let fruits = ["Apple","Orange","Plum"];

//array element start with 0 element
console.log(fruits[0]);      // Apple
console.log(fruits[1]);      // Orange
console.log(fruits[2]);      // Plum


//----> replace the element
fruits[2]='Pear';
console.log(fruits);   //[ 'Apple', 'Orange', 'Pear' ]

//----> add new one in array
fruits[3]='Lemon';
console.log(fruits);  // now ["Apple", "Orange", "Pear", "Lemon"]


//----> length
let fruits3 =["Apple","Orange","Plum"];
console.log(fruits3.length );// 3


colors = ["black", "orange", "pink"]
booleans = [true, false, false, true];
emptyArray = [];
console.log("Length of colors:", colors.length);
console.log("Length of booleans:", booleans.length);
console.log("Length of empty array:", emptyArray.length);


// mix of values
let arr2 = [
    'Apple',
    {name:'John'},
    true,
    function(){
        console.log('hello');
    }
]; 

// get the object at index 1 and then show its name
console.log(arr2[1].name );          // John

// get the function at index 3 and run it
arr2[3]();                 // hello


console.log("------------Trailing comma-------------");

//------------> Trailing comma
let fruits4 =["Apple","Orange","Plum",];
console.log(fruits4);


console.log("-----------Get last elements with “at”------------------");



//-----> Get last elements with “at”
let fruits5 =["Apple","Orange","Plum"];
console.log(fruits5[fruits5.length-1]);       // Plum

console.log(fruits5[-1]);  //undefined - because negative index is not working in js❌


//---> than using at in same as fruits[fruits.length-1]
let fruits6 =["Apple","Orange","Plum"];
console.log(fruits6.at(-1));                    // Plum

/*----------------new array-----------------*/

console.log("----------new array----------------");

//new array()
let arr7 = new Array("Apple","Pear","etc");
console.log(arr7);



let arr8 =new Array(2);              // will it create an array of [2] ?
console.log(arr8[0]);               // undefined! no elements.
console.log(arr8.length);           // length 2
console.log(arr8);


/*-------------------------Multidimensional arrays-----------------*/
console.log("-----------Multidimensional arrays-------------");

//Multidimensional arrays
let matrix =[[1,2,3],[4,5,6],[7,8,9]];
console.log(matrix[1][1]);              // 5, the central element


/*-----------------toString----------------*/

console.log("---------------toString----------------");

//toString
let arr9 = [1,2,3];
console.log(arr9);                                      // 1,2,3
console.log(String(arr9) === '1,2,3');                  // true

console.log([]+1);                     // "1"
console.log([1]+1);                    // "11"
console.log([1,2]+1);                 // "1,21"


console.log(""+1);                    // "1"
console.log("1"+1);                   // "11"
console.log("1,2"+1);                 // "1,21"


console.log("-------------Different type quetion---------------");

const a = ["hi there"]
a[0] = "new value"
console.log(a);

//TypeError: Assignment to constant variable.
// a = ["nope, now you are overwriting the array"];
