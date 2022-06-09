
//create a new map
let map = new Map();
map.set('1','str1');// a string key
map.set(1,'num1');// a numeric key
map.set(true,'bool1');// a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
console.log(map.get(1));// 'num1'
console.log(map.get('1'));// 'str1'
console.log(map.size);// 3


let john ={
    name:"John"
};
// for every user, let's store their visits count
let visitsCountMap = new Map();// john is the key for the map
visitsCountMap.set(john,123);
console.log(visitsCountMap.get(john));// 123


let john1 ={
    name:"John"
};

let ben = {
    name:"Ben"
};

let visitsCountObj = {};// try to use an object
visitsCountObj[ben] = 234;// try to use ben object as the key
visitsCountObj[john1] = 123;// try to use john object as the key, ben object will get replaced
// That's what got written!
console.log(visitsCountObj["[object Object]"]); // 123

//---------------------------------

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
  ]);
  
  // iterate over keys (vegetables)
  for (let vegetable of recipeMap.keys()) {
    console.log(vegetable); // cucumber, tomatoes, onion
  }
  
  // iterate over values (amounts)
  for (let amount of recipeMap.values()) {
    console.log(amount); // 500, 350, 50
  }
  
  // iterate over [key, value] entries
  for (let entry of recipeMap) { // the same as of recipeMap.entries()
    console.log(entry); // cucumber,500 (and so on)
  }


// runs the function for each (key, value) pair
recipeMap.forEach( (value, key, map) => {
    console.log(`${key}: ${value}`); // cucumber: 500 etc
});


// array of [key, value] pairs
let map1 =new Map([
    ['1','str1'],
    [1,'num1'],
    [true,'bool1']
]);
console.log(map1.get('1'));// str1


let obj = {
    name:"John",
    age:30
};

let map2 = new Map(Object.entries(obj));
console.log(map2.get('name'));    // John


let prices = Object.fromEntries([
    ['banana',1],
    ['orange',2],
    ['meat',4]
]);// now prices = { banana: 1, orange: 2, meat: 4 }
console.log(prices.orange);// 2


let map3 =new Map();
map3.set('banana',1);
map3.set('orange',2);
map3.set('meat',4);
let obj1 = Object.fromEntries(map3.entries());// make a plain object (*)
// done!
// obj = { banana: 1, orange: 2, meat: 4 }
console.log(obj1.orange);// 2