
Array.prototype.myMap = function(cb){
    let newArray = [];

    for(let i = 0;i<this.length;i++){
        newArray.push(cb(this[i]))
    }

    return newArray
}

function square(x){
    return x*x;
}


let arr = [2,3,4,5,6];

let finalarr = arr.myMap(square);
console.log(finalarr);