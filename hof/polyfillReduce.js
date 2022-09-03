

function myPolyfillReduceArray(arr,cb,accumlater){
    let sum = 0;

    for(let i = 0;i<arr.length;i++){
        sum += cb(arr[i],accumlater);
    }
    
    return sum;
}

function isSum(total,x){
    return x+=total;
}

let arr = [1,2,3]

console.log(myPolyfillReduceArray(arr,isSum,0));