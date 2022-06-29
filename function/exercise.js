
const ps = require("prompt-sync")
const prompt = ps();

console.log("-----------Qusetion 1-------------------------");
//Q1. See if you can write a function for yourself. We want to write a function that adds two numbers.
            
// 1. Create a function that takes two parameters, adds the parameters together, and returns the result.
function add(a,b){
    return a + b;   
}

// 2. Set up two different variables with two different values. 
let a = 10;
let b = 20;

// 3. Use your function on the two variables, and output the result using console.log. 
console.log(add(a,b));

// 4. Create a second call to the function using two more numbers as arguments sent to the function.
console.log(add(10,30));


console.log("-----------Qusetion 2-------------------------");
//Q2. We are going to create a program that will randomly describe an inputted name

// 	1. Create an array of descriptive words.
const adj = ["super", "wonderful", "bad", "angry", "careful"];

// 	2. Create a function that contains a prompt asking the user for a name.
// 	3. Select a random value from the array using Math.random.
// 	4. Output into the console the prompt value and the randomly selected array value.
function myfun(){
    let name = prompt("What is your Name? ")
    let nameadj = Math.floor(Math.random() * adj.length);
    console.log(adj[nameadj] + " " + name);
}
// 	5. Invoke the function.
myfun()

console.log("-----------Qusetion 3-------------------------");
// - Create a basic calculator that takes two numbers and one string value indicating an operation. 
// If the operation equals add, the two numbers should be added. 
// If the operation equals subtract, the two numbers should be subtracted from one another. 
// If there is no option specified, the value of the option should be add. 
// The result of this function needs to be logged. Test your function by invoking it with different operators and no operator specified.

// 1.  Set up two variables containing number values.
let val1 = 10;
let val2 = 20;

// 2. Set up a variable to hold an operator, either + or -.
let operator = "-";

// 3. Create a function that retrieves the two values and the operator string value within its parameters. 
        // Use those values with a condition to check if the operator is + or -, and add or subtract the values 
        // accordingly (remember if not presented with a valid operator, the function should default to addition).

// 4. Within console.log(), call the function using your variables and output the response to the console.
function cal(a,b,op){
    if(op == '-'){
        console.log(a-b);
    }else{
        console.log(a+b);
    }
}

// 5. Update the operator value to be the other operator type—either plus or minus—and call to the function again with the new updated arguments.
cal(a,b,operator);