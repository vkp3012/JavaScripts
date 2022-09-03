
Array.prototype.myreduce = function(cb,accumlater){

    let ans = 0;

    for(let i = 0;i<this.length;i++){
        ans += cb(this[i],accumlater);
    }

    return ans
}

function sum(total,x){
    return x+=total
}

let arr = [1,2,3]
let finalarr = arr.myreduce(arr,sum);
console.log(finalarr);