// Iterate Through All an Array's Items Using For Loops


// Sometimes when working with arrays, it is very handy to be able to iterate through each item to find one or 
// more elements that we might need, or to manipulate an array based on which data items meet a certain set of criteria. 
// JavaScript offers several built in methods that each iterate over arrays in slightly different ways to achieve different results 
// (such as every(), forEach(), map(), etc.), however the technique which is most flexible and offers us the greatest amount of 
// control is a simple for loop.

// Consider the following:

function greaterThanTen(arr){
    let newArr = []
    for(let i = 0;i<arr.length;i++){
        if(arr[i]>10)[
            newArr.push(arr[i])
        ]
    }

    return newArr;
}

console.log(greaterThanTen([2, 12, 8, 14, 80, 0, 1]));


// We have defined a function, filteredArray, which takes arr, a nested array, and elem as arguments, and returns a new array. 
// elem represents an element that may or may not be present on one or more of the arrays nested within arr. Modify the function, 
// using a for loop, to return a filtered version of the passed array such that any array nested within arr containing elem has been 
// removed.

function filteredArray(arr,elem){
    let newArr = [];
    for(let i = 0;i<arr.length;i++){
        if(arr[i].indexOf(elem) == -1){
            newArr.push(arr[i])
        }
    }

    return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
