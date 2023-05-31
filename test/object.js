const shape = {
    radius : 10,

    diameter() {
        return this.radius *2
    },

    parimeter : () => 2 * Math.PI * this.radius
}

console.log(shape);
console.log(shape.radius);
console.log(shape.diameter);
console.log(shape.diameter());
console.log(shape.parimeter);
console.log(shape.parimeter());


// Note that the value of diameter is a regular function, whereas the value of perimeter is an arrow function.

// With arrow functions, the this keyword refers to its current surrounding scope, unlike regular functions! This means that when we call perimeter, it doesn't refer to the shape object, but to its surrounding scope (window for example).

// There is no value radius on that object, which returns undefined.


console.log("--------------------------------------------------------------------------------------");

function checkAge(data) {
    if (data === { age: 18 }) {
        console.log("You are an adult!");
    } else if (data == { age: 18 }) {
        console.log("You are still an adult.");
    } else {
        console.log(`Hmm.. You don't have an age I guess`);
    }
}

checkAge({ age: 18 });

// When testing equality, primitives are compared by their value, while objects are compared by their reference. 
// JavaScript checks if the objects have a reference to the same location in memory.

// The two objects that we are comparing don't have that: the object we passed as a parameter refers to a different location in memory than 
// the object we used in order to check equality.

// This is why both { age: 18 } === { age: 18 } and { age: 18 } == { age: 18 } return false.