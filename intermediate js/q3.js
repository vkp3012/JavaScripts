// Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
// Remove all elements from the initial array that are of the same value as these arguments.

// Note: You have to use the arguments object.

function destroyer(arr){
    let valsToRemove = Object.values(arguments).slice(1);
    let new_arr = [];

    for(let i = 0;i<arr.length;i++){
        let removeElemt = false;
        for(let j = 0;j<valsToRemove.length;j++){
            if(arr[i] === valsToRemove[j]){
                removeElemt = true;
            }
        }

        if(!removeElemt){
            new_arr.push(arr[i]);
        }
    }

    return new_arr;
}

let ans = destroyer([1, 2, 3, 1, 2, 3], 2, 3);
console.log(ans);