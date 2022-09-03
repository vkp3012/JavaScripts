

let myArray = [2,3,4,5,6,19,17,14,16]

let filterArrray = myArray.filter(function(x){
    return x%2 === 0;
})

// console.log(filterArrray);

//custom polyfill array...

function myPolyfillFilterArray(arr,cb){
    let filterArray = [];

    for(let i = 0;i<arr.length;i++){
        if(cb(arr[i])){
            filterArray.push(arr[i]);
        }
    }

    return filterArray
}

function isEvenArray(x){
    if(x%2 === 0){
        return x;
    }
}

console.log(myPolyfillFilterArray(myArray,isEvenArray));