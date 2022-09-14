// Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. 
// The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

let arr = [1,4];

function sumArr(arr){
    let max = Math.max(arr[0],arr[1]);
    let min = Math.min(arr[0],arr[1]);

    let sum = 0;
    for(let i = min;i<=max;i++){
        sum += i
    }
    return sum;
}

let ans = sumArr(arr);
console.log(ans);