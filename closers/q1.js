//function scope
function add(a,b){
    let result = a+b
    return result;
}

console.log(add(2,3));


//lagical scope

function calculater(){
    let a = 5;

    function cal(){
        console.log(a+4);
    }

    cal()
}

calculater();



//closers
function calculater1(){
    let a = 5;

    function cal(){
        console.log(a+4);
    }

    return cal
}

let catchadd = calculater1();
console.log(catchadd);
catchadd()