function getPersonInfo(one, two, three) {
    console.log(one);
    console.log(two);
    console.log(three);
}

const person = "Rasel";
const age = 21;

getPersonInfo`${person} is ${age} years old`;


// If you use tagged template literals, the value of the first argument is always an array of the string values. 
// The remaining arguments get the values of the passed expressions!


console.log("----------------------------------------------------------------");

function getAge() {
    "use strict";
    age = 21;
    console.log(age);
}

getAge();


// With "use strict", you can make sure that you don't accidentally declare global variables.
// We never declared the variable age, and since we use "use strict", it will throw a reference error.
//  If we didn't use "use strict", it would have worked, since the property age would have gotten added to the global object.