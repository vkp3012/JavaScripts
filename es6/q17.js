// Write Concise Declarative Functions with ES6
// When defining functions within objects in ES5, we have to use the keyword function as follows:

const person = {
    name:"vivek",
    sayHii : function() {
        return `Hello I'm ${this.name}`;
    }
}

console.log(person); //{ name: 'vivek', sayHii: [Function: sayHii] }
console.log(person.name);   //vivek
console.log(person.sayHii);  //[Function: sayHii]
console.log(person.sayHii());  //Hello I'm vivek

// With ES6, you can remove the function keyword and colon altogether when defining functions in objects. Here's an example of this syntax:
console.log("----------------------------------------------------");
const person1 = {
    name:"vivek singh",
    sayHii() {
        return `Hello I'm ${this.name}`;
    }
}


console.log(person1); //{ name: 'vivek', sayHii: [Function: sayHii] }
console.log(person1.name);   //vivek singh
console.log(person1.sayHii);  //[Function: sayHii]
console.log(person1.sayHii()) //Hello I'm vivek singh

// Refactor the function setGear inside the object bicycle to use the shorthand syntax described above

console.log("----------------------------------------------------");
const bicycle = {
    gare: 2,
    setgare(newgare){
        this.gare = newgare
    }
}

bicycle.setgare(3);
console.log(bicycle.gare);