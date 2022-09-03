

// ons with Parameters
// Just like a regular function, you can pass arguments int

const doubler = (item) => item*2;

console.log(doubler(4))

// bler(4) would return the value 8.

// If an arrow function has a single parameter, the parentheses enclosing the parameter may be omitted.
const doubler1 = item => item*2;

console.log(doubler1(3))

// It is possible to pass more than one argument into an arrow function.

const multiplier = (item,mult) => item *mult;

console.log(multiplier(2,5));

// multiplier(2, 5) would return the value 10.

// Rewrite the myConcat function which appends contents of arr2 to arr1 so that the function uses arrow function syntax.

const myConcat = (arr1,arr2) => {
    return arr1.concat(arr2);
}

console.log(myConcat([1,2],[3,4,5]));
