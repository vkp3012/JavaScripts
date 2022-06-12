console.log("------------While loop--------------------");
//while loop
let i = 0;
while(i < 3){// shows 0, then 1, then 2
    console.log(i);
    i++;
}


let j = 3;
while(j){// when i becomes 0, the condition becomes falsy, and the loop stops
    console.log(j);
    j--;
}

let k =3;
while(k)console.log(k--);


console.log("--------------do...while------------------");
//do...while
leti =0;
do{
    console.log(i );
    i++;
}
while(i < 3);


console.log("--------------for loop---------------");

for(let i =0;i <3;i++){// shows 0, then 1, then 2
    console.log(i);
}


// for (let i = 0; i < 3; i++) alert(i)

// run begin
let i1 = 0
// if condition → run body and run step
if (i1 < 3) { 
    console.log(i1); 
    i1++ 
}
// i1f condition → run body and run step
if (i1 < 3) { 
    console.log(i1); 
    i1++ 
}
// if condition → run body and run step
if (i1 < 3) { 
    console.log(i1); 
    i1++ 
}
// ...finish, because now i == 3

console.log("-----------inline variable decleare--------");
//inline variable decleare
for(let i =0;i < 3;i++){
    console.log(i);// 0, 1, 2
}
console.log(i);// error, no such variable


let i2 = 0;
for(i2 =0;i2 <3;i2++){// use an existing variable
    console.log(i2);// 0, 1, 2
}
console.log(i2);// 3, visible, because declared outside of the loop


console.log("-------------Skipping parts-------------");

//Skipping parts

let a = 0;// we have a already declared and assigned
for(;a <3;a++){// no need for "begin"
    console.log(a);// 0, 1, 2
}

let b=0;
for(;b <3;){
    console.log(b++);
}


console.log("--------------Breaking the loop---------------");

const ps = require("prompt-sync")
const prompt = ps();
// let sum = 0;
// while(true){
//     let value =+prompt("Enter a number",'');  
//     if(!value)
//     break;// (*)
//     sum +=value;
// }
// console.log('Sum: '+sum );



console.log("--------------Continue to the next iteration----------------");

//Continue to the next iteration
for(let i =0;i <10;i++){// if true, skip the remaining part of the body
    if (i %2==0)
    continue;
    console.log(i);// 1, then 3, 5, 7, 9
}


for(let i =0;i <10;i++){
    if(i %2){
        console.log(i );
    }
}


// if(i >5){
//     console.logt(i);
// }else{
//     continue;
// }


// (i >5)?console.log(i):continue;// continue isn't allowed here


console.log("-----------Labels for break/continue------------");

for(let i =0;i <3;i++){
    for(let j =0;j <3;j++){
        let input =prompt(`Value at coords (${i},${j})`,'');// what if we want to exit from here to Done (below)?
    }
}
console.log('Done!');


outer:for(let i =0;i <3;i++){
    for(letj =0;j <3;j++){
        let input = prompt(`Value at coords (${i},${j})`,'');// if an empty string or canceled, then break out of both loops
        if(!input)break outer;// (*)
        // do something with the value...
    }
}
console.log('Done!');
