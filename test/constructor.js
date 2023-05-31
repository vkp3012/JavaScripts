
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const Rasel = new Person("Rasel", "Kazi");
const sarah = Person("Sarah", "Smith");

console.log(Rasel);
console.log(sarah);


// For sarah, we didn't use the new keyword. When using new, it refers to the new empty object we create. However, if you don't add new it refers to the global object!

// We said that this.firstName equals "Sarah" and this.lastName equals "Smith". What we actually did, is defining 
// global.firstName = 'Sarah' and global.lastName = 'Smith'. 
// sarah itself is left undefined, since we don't return a value from the Person function.

console.log("---------------------------------------------------------------------------------------");
// class Chameleon {

//     static colorChange(newColor){
//         this.newColor = newColor;
//         return this.newColor;
//     }


//     constructor({newColor ="green"} = {}){
//         this.newColor = newColor;
//     }
// }

// const freddie = new Chameleon({
//     newColor: "purple"
// });


// console.log(freddie.colorChange("orange"));


// The colorChange function is static. 
// Static methods are designed to live only on the constructor in which they are created, 
// and cannot be passed down to any children. Since freddie is a child, the function is not passed down, 
// and not available on the freddie instance: a TypeError is thrown.


console.log("---------------------------------------------------------------------------------------");

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const member = new Person("Rasel", "Kazi");

Person.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
};

console.log(member.getFullName());


// You can't add properties to a constructor like you can with regular objects. 
// If you want to add a feature to all objects at once, you have to use the prototype instead. So in this case,

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
};

console.log(member.getFullName());


// would have made member.getFullName() work. 
// Why is this beneficial? 
// Say that we added this method to the constructor itself. Maybe not every Person instance needed this method. 
// This would waste a lot of memory space, since they would still have that property, which takes of memory space for each instance. 
// Instead, if we only add it to the prototype, we just have it at one spot in memory, yet they all have access to it!

