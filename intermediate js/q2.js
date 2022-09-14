// Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
// In other words, return the symmetric difference of the two arrays.

// Note: You can return the array with its elements in any order.

function diffArray(arr1,arr2){

    //first method....
    // let newArr = [];

    // function onlyOneArray(first,second){
    //     for(let i = 0;i<first.length;i++){
    //         if(second.indexOf(first[i]) === -1){
    //             newArr.push(first[i])
    //         }
    //     }
    // }

    // onlyOneArray(arr1,arr2);
    // onlyOneArray(arr2,arr1);

    // return newArr;

    //second method...
    return arr1
            .concat(arr2)
            .filter(item => !arr1.includes(item) || !arr2.includes(item))
}

let ans = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
console.log(ans);