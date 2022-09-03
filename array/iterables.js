

// let range ={
//     from:1,
//     to:5
// };
// We want the for..of to work:
// for(let num of range) ... num= 1,2,3,4,5


let range = {
    from: 1,
    to: 5
}; 


// 1. call to for..of initially calls this

range[Symbol.iterator] = function() {// ...it returns the iterator object:
    // 2. Onward, for..of works only with the iterator object below, asking it for next values
    return {
      current: this.from,
      last: this.to,
      // 3. next() is called on each iteration by the for..of loop
      next() {
        // 4. it should return the value as an object {done:.., value :...}
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
}; 


// now it works!
for (let num of range) {
    console.log(num); // 1, then 2, 3, 4, 5
}

let range1 = {
    from: 1,
    to: 5,
  
    [Symbol.iterator]() {
      this.current = this.from;
      return this;
    },
  
    next() {
      if (this.current <= this.to) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
};
  
for (let num of range1) {
    console.log(num); // 1, then 2, 3, 4, 5
}


/*--------------------String is iterable------------------*/
console.log("---------------String is iterable--------------------");

for(let char of "test"){
    // triggers 4 times: once for each character
    console.log(char );// t, then e, then s, then t
}

let str ='𝒳😂';
for(let char of str){
    console.log(char );// 𝒳, and then 😂
}


/*---------------------Calling an iterator explicitly--------------------*/
console.log("---------------Calling an iterator explicitly-------------------");

let str1 = "Hello";

// does the same as
// for (let char of str) alert(char);

let iterator = str1[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  console.log(result.value); // outputs characters one by one
}


/*--------------------Iterables and array-likes------------------*/

console.log("-----------Iterables and array-likes-----------");

// let arrayLike ={
//     // has indexes and length => array-like
//     0:"Hello",
//     1:"World",
//     length:2
// };
// // Error (no Symbol.iterator)
// for(let item of arrayLike){

// }


/*-------------Array.from----------------*/
console.log("------------Array.from-------------");

let arrayLike ={
    0:"Hello",
    1:"World",
    length:2
};
let arr =Array.from(arrayLike);// (*)
console.log(arr.pop());// World (method works)


//Array.from(obj[,mapFn,thisArg])
let str2 ='𝒳😂';                            // splits str into array of characters
let chars = Array.from(str2);
console.log(chars[0]);// 𝒳
console.log(chars[1]);// 😂
console.log(chars.length);// 2


function slice(str,start,end){
    return Array.from(str).slice(start,end).join('');
}
let str3 ='𝒳😂𩷶';
console.log(slice(str3,1,3));// 😂𩷶// the native method does not support surrogate pairs
console.log(str.slice(1,3));// garbage (two pieces from different surrogate pairs)