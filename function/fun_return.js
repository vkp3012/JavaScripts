

const ps = require("prompt-sync")
const prompt = ps()

// //return value in function parameter
// function sum(a,b){
//     return a +b;
// }
// let result = sum(1,2);
// console.log(result);// 3



// function checkAge(age){
//     if(age >=18){   
//         return true;
//     }else{    
//         return confirm('Do you have permission from your parents?');
//     }
// }

// let age = prompt('How old are you?',18);

// if(checkAge(age)){
//    console.log('Access granted');
// }else{
//    console.log('Access denied');
// }

// function showMovie(age){
//     if(!checkAge(age)){    
//         return;
//     }
//     console.log("Showing you the movie");// (*)
//     // ...
// }


// function doNothing(){
//     /* empty */
// }
// console.log(doNothing()===undefined);// true


// function doNothing(){
//     return;
// }
// console.log(doNothing()===undefined);// true


// function showPrimes(n){
//     nextPrime:for(let i =2;i<n;i++){
//         for(let j =2;j <i;j++){
//             if(i %j ==0) 
//             continue nextPrime;
//         }
//         console.log(i );// a prime
//     }
// }

// showPrimes(9)


function showPrimes(n){
    for(let i =2;i <n;i++){
        if (!isPrime(i))
        continue;
        console.log(i);// a prime
    }
}

function isPrime(n){
    for(let i = 2;i <n;i++){
        if(n % i ==0)
        return false;
    }
    return true;
}

showPrimes(9)
isPrime(9)


