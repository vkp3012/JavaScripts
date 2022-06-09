
//create a new set..
let set = new Set();

let john = {
    name: "John"
};

let pete = {
    name: "Pete"
};

let mary = {
    name: "Mary"
};
// visits, some users come multiple times

set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);
// set keeps only unique values
console.log(set.size);// 3
for (let user of set) {
    console.log(user.name);// John (then Pete and Mary)
}



//Iteration over Set
let set1 = new Set(["oranges", "apples", "bananas"]);
for (let value of set1) {
    console.log(value);
}

// the same with forEach:
set1.forEach((value, valueAgain, set1) => {
    console.log(value);
});


console.log("--------------weekset---------------------");
//weekset
let visitedSet = new WeakSet();
let john1 = { 
    name: "John" 
};
let pete1 = { 
    name: "Pete" 
}; 
let mary1 = {
    name: "Mary"
}; 
visitedSet.add(john1);// John visited us
visitedSet.add(pete1);// Then Pete
visitedSet.add(john1);// John again

// visitedSet has 2 users now
// check if John visited?
console.log(visitedSet.has(john1));// true

// check if Mary visited?
console.log(visitedSet.has(mary1));// false
john1 = null;// visitedSet will be cleaned automatically
