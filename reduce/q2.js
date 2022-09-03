

//write a code to calculate a largest value in arr

const arr = [2,5,3,95,10,75]

function largestElement(accumulator,currentValue){
    if(currentValue > accumulator){
        accumulator = currentValue;
        // return accumulator; ---> undefined
    }
    return accumulator;
}

console.log(arr.reduce(largestElement));