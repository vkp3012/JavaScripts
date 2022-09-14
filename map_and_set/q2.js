// Implement map on a Prototype
// As you have seen from applying Array.prototype.map(), or simply map() earlier, the map method returns an array of the same length as the one it was called on. It also doesn't alter the original array, as long as its callback function doesn't.

// In other words, map is a pure function, and its output depends solely on its inputs. Plus, it takes another function as its argument.

// You might learn a lot about the map method if you implement your own version of it. It is recommended you use a for loop or Array.prototype.forEach().

// Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map(). You should not use the built-in map method. The Array instance can be accessed in the myMap method using this.

const s = [2,3,4,5];

//create own map function
Array.prototype.myMap =  function(callback) {
    let newArr = [];

    for(let i = 0;i<this.length;i++){
        newArr.push(callback(this[i]))
    }

    return newArr;
}

const new_s = s.myMap(function(item){
    return item * 2;
})

console.log(new_s);


console.log("--------------------------------");

//use map function

const new_s1 = s.map(function(item){
    return item*2
})

console.log(new_s1);


console.log("--------------------------------");

const new_s2 = s.map(item => item*2);
console.log(new_s2);

