


let myArray = [1,2,3,4,5];

let sum = myArray.reduce(function(accumulater,x){
    return accumulater + x;
},0)

console.log(sum);