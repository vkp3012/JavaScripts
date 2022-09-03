
var arr = [];
var obj = {};

function abc(){
    console.log("You can live");
}

console.log(arr.__proto__);
console.log(Array.prototype);

console.log(arr.__proto__.__proto__);
console.log(obj.__proto__);


console.log(abc.__proto__);
console.log(abc.__proto__.__proto__);

console.log(obj.__proto__.__proto__); //null