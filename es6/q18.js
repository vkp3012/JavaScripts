// Use class Syntax to Define a Constructor Function
// ES6 provides a new syntax to create objects, using the class keyword.

// It should be noted that the class syntax is just syntax, and not a full-fledged class-based implementation of an object-oriented paradigm, unlike in languages such as Java, Python, Ruby, etc.

// In ES5, we usually define a constructor function and use the new keyword to instantiate an object.

var SpaceShuttle = function(targetPlanet){
    this.targetPlanet = targetPlanet
}

var zeus = new SpaceShuttle("Jupiter")
// console.log(zeus);

// The class syntax simply replaces the constructor function creation:

class SpaceShuttle1 {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}
var zeus = new SpaceShuttle1("Jupiter")
console.log(zeus);

// It should be noted that the class keyword declares a new function, to which a constructor is added. This constructor is invoked when new is called to create a new object.

// Note: UpperCamelCase should be used by convention for ES6 class names, as in SpaceShuttle used above.

// The constructor method is a special method for creating and initializing an object created with a class. You will learn more about it in the Object Oriented Programming section of the JavaScript Algorithms And Data Structures Certification.

// Use the class keyword and write a constructor to create the Vegetable class.

// The Vegetable class allows you to create a vegetable object with a property name that gets passed to the constructor.


class Vegetable {
    constructor(name){
        this.name = name
    }
}

const vegname = new Vegetable("onion")
console.log(vegname);
console.log(vegname.name);