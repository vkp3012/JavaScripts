// Factorize a Number
// Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Only integers greater than or equal to zero will be supplied to the function.


//Method One : Basic
function factorialization(num){
    let product = 1;

    for(let i = 2;i<=num;i++){
        product *= i;
    }

    return product;
}

console.log(factorialization(5));


//Method Two : Recursion

function fact(num){
    //base case...
    if(num === 0){
        return 1;
    }

    let n = fact(num -1);
    
    return num * n;

}

console.log(fact(6));