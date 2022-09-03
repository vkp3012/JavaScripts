
//map polyfill
let myArray = [1,2,3,4,5];

let newArray = myArray.map(function(x){
    return x*x;
})

// console.log(myArray);
// console.log(newArray);

//custom polyfill map

function myPolyfillArray(myArr,cb){
    let newArray = [];

    for(let i = 0;i<myArr.length;i++){
        newArray.push(cb(myArr[i]));
    }

    return newArray;
}

function square(x){
    return x+x;
}

console.log(myPolyfillArray(myArray,square));



