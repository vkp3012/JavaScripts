
Array.prototype.myFilter = function(cb) {

    let newArray = [];

    for(let i = 0;i<this.length;i++){
        if(cb(this[i])){
            newArray.push(this[i])
        }
    }

    return newArray
}

function isEven(x){

    if(x%2 === 0){
        return x;
    }
}

let arr = [2,3,6,5,7,9,17,18]

let finalarr = arr.myFilter(isEven);
console.log(finalarr);