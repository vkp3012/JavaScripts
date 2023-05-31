
//input = [4,5,0,7,0,9,0,0,4];
//output = [4, 5, 7, 9, 4, 0, 0, 0, 0]

//solution...
//array define
let arr = [4,5,0,7,0,9,0,0,4];

//create a new arr...
let newarr = []

//filter all value is greater than zero...
newarr = arr.filter(x => x > 0);

//fill the zero in new array...
let zeroes = Array(arr.length - newarr.length).fill(0);

//concat the array..
newarr = newarr.concat(zeroes);


//show the output...
console.log(newarr);