// Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function  longestWordCount(str){
    let word = str.split(' ');
    let count = 0;
    for(let i = 0;i < word.length ;i++){
        if(word[i].length > count){
            count = word[i].length;
        }
    }

    return count;
}

let ans = longestWordCount("The quick brown fox jumped over the lazy dog")
console.log(ans);