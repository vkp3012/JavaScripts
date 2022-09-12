// Repeat a String Repeat a String
// Repeat a given string str (first argument) for num times (second argument). 
// Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

function repeatStr(str,num){
    // return str.repeat(num);

    let ans = "";
    for(let i = 0;i<num;i++){
        ans += str;
    }

    return ans;
}

let ans = repeatStr("abc", 3);
console.log(ans);

