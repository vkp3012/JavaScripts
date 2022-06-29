
//array
let spread = ["so", "much", "fun"];
let message = ["JavaScript", "is", ...spread, "and", "very","powerful"];
console.log(message);

//output --> [ 'JavaScript', 'is', 'so', 'much', 'fun', 'and', 'very', 'powerful' ]


//-----------------------------------------------------
//function
function addTwoNumbers(x, y) {
    console.log(x + y);
}

let arr = [5, 9];
addTwoNumbers(...arr);

//output ---> 14

addTwoNumbers(5, 9);

//output --> 14

function addFourNumbers(x, y, z, a) {
    console.log(x + y + z + a);
}

let arr1 = [5, 9];
let arr2 = [6, 7];

addFourNumbers(...arr1, ...arr2);

// This will output 27 to the console, calling the function like this:
addFourNumbers(5, 9, 6, 7);
