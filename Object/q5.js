// Add Methods After Inheritance
// A constructor function that inherits its prototype object from a supertype constructor function can still have its own methods in addition to inherited methods.

// For example, Bird is a constructor that inherits its prototype from Animal:

function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;


// In addition to what is inherited from Animal, you want to add behavior that is unique to Bird objects. Here, Bird will get a fly() function. Functions are added to Bird's prototype the same way as any constructor function:

Bird.prototype.fly = function() {
  console.log("I'm flying!");
};

// Now instances of Bird will have both eat() and fly() methods:

let duck = new Bird();
duck.eat();
duck.fly();

// duck.eat() would display the string nom nom nom in the console, and duck.fly() would display the string I'm flying!.

// Add all necessary code so the Dog object inherits from Animal and the Dog's prototype constructor is set to Dog. 
// Then add a bark() method to the Dog object so that beagle can both eat() and bark(). 
// The bark() method should print Woof! to the console.

function Animal1() { }
Animal1.prototype.eat = function() { console.log("nom nom nom"); };

function Dog1() { }

// Only change code below this line

Dog1.prototype = Object.create(Animal1.prototype);
Dog1.prototype.constructor = Dog1;

Dog1.prototype.bark = function() {
  console.log("Woof!");
};

// Only change code above this line

let beagle = new Dog1();
beagle.eat();
beagle.bark();