// Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like the and of.

function titleCase(str){
    let newStr = str.split(' ');
    let newArr = [];
    for(let st in newStr){
        newArr[st] = newStr[st][0].toUpperCase() + newStr[st].slice(1).toLowerCase();
    }

    return newArr.join(" ");
}

let ans = titleCase("I'm a little tea pot");

console.log(ans);