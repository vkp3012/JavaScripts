

// //function calculater is a hof

// function calculater(operater,a,b){
//     if(operater == "+"){
//         return function add(){
//             return a+b;
//         };
//     }
// }

// let fn = calculater("+",3,4);
// let ans = fn();
// console.log(ans);

// //functional programming

const arr = [2,5,8,6,78];

// //calculated the area of squares
// let areaOfSquare = function (arr){
//     let res = [];
//     for(let i =0;i<arr.length;i++){
//         res.push(arr[i]*arr[i]);
//     }
//     return res;
// }

// console.log(areaOfSquare(arr));

// //calculate of perimeter of square

// //calculated the area of squares
// let perimeterOfSquare = function (arr){
//     let res = [];
//     for(let i =0;i<arr.length;i++){
//         res.push(4*arr[i]);
//     }
//     return res;
// }

// console.log(perimeterOfSquare(arr));

// //calculate the diagonal of square

// let diagonalOfSquare = function (arr){
//     let res = [];
//     for(let i =0;i<arr.length;i++){
//         res.push(Math.sqrt(2)*arr[i]);
//     }
//     return res;
// }

// console.log(diagonalOfSquare(arr));


// //better way

// let area = function(a){
//     return a * a;
// }


// let calculater = function(area,logic){
//     let res = [];
//     for(let i = 0;i<arr.length;i++){
//         res.push(logic(arr[i]));
//     }

//     return res;
// }

// console.log(calculater(arr,area));
// console.log(calculater(arr,area));
// console.log(calculater(arr,area));

// //map
// //write a code to calculate area of square
// let res = arr.map((a)=>{
//     return a*a;
// });

// console.log(res);

//filter
//write a code

let evenNum = arr.filter((num) =>{
    return num % 2 == 0;
    //or  return !(num % 2);
})

console.log(evenNum);

//reduce
//write a code to get sum of arr
let = arr.reduce((acc,num) =>{

})



