
let arr = [1,2,3,4,5]

let finalarr = arr.reduce(function(accumlater,cb){
    return accumlater + cb;
},0)

console.log(finalarr);