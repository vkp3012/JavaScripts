
/*------------------Array Loops----------------*/

let arr =["Apple","Orange","Pear"];
for(let i =0;i<arr.length;i++){
    console.log(arr[i]);
}


console.log("-------------for..of--------------------");

//for..of
let fruits =["Apple","Orange","Plum"];// iterates over array elements
for(let fruit of fruits){
    console.log(fruit );
}

console.log("------------------for..in------------------");

//for..in
let arr1 =["Apple","Orange","Pear"];
for(let key in arr1){
    console.log(arr[key]);// Apple, Orange, Pear
}