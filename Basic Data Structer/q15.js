// Reverse a String
// Reverse the provided string.

// You may need to turn the string into an array before you can reverse it.

// Your result must be a string.


// Method one:

function reverseString(str){
   return str.split("").reverse().join("")
}

console.log(reverseString("Hello"));


//Method Two

function reverseStr(str){
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}

console.log(reverseStr("Vivek"));