//rest operator
// used to merge a list of function arguments into an array

function fun(...args) {
    console.log(args);
    console.log(typeof args);
    args.forEach(arg => {
        console.log(arg);
    });
}

fun("hello", "how", 2, true);