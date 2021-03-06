
/*---------------Array Length--------------------*/

//array length
let fruits =[];
fruits[123]="Apple";
console.log(fruits.length);       // 124


let arr = [1,2,3,4,5];
arr.length = 2;                 // truncate to 2 elements
console.log(arr);                // [1, 2]
arr.length = 5;                 // return length back

console.log(arr[3]);            // undefined: the values do not return
console.log(arr);               //[ 1, 2, <3 empty items> ]


numbers = [12, 24, 36];
numbers[5] = 48;
console.log(numbers);             //[ 12, 24, 36, <2 empty items>, 48 ]
console.log(numbers.length);        // 6