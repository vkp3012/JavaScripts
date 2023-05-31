// function sayHi(){
//     console.log("Hiiii");
// }

// setInterval(sayHi,2000)
//continue show value every 2sec and stop the value use clearInterval...

let count = 0;
let intervalId;


function sayHi(){
    count++;
    console.log("Hiii...");

    if(count >= 3){
        clearInterval(intervalId);
    }
}

intervalId = setInterval(sayHi,2000);