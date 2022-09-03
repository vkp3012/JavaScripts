// Set Default Parameters for Your Functions
// In order to help us create more flexible functions, ES6 introduces default parameters for functions.

// Check out this code:


const name1 = (name = "vivek") => "Hello " + name;

// onsole.log(name1(lalu));
//                   ^

// ReferenceError: lalu is not defined


console.log(name1("lalu"));
console.log(name1());

// The console will display the strings Hello John and Hello Anonymous.

// The default parameter kicks in when the argument is not specified (it is undefined). As you can see in the example above, the parameter name will receive its default value Anonymous when you do not provide a value for the parameter. You can add default values for as many parameters as you want.

// Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.


const increment = (number, value = 1) => number + value;

console.log(increment(5,2));
console.log(increment(5,));
