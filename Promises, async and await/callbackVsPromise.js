
const lib = require('./lib.js');

let amount = 2000;
let totalcut = 200;

function chargeDebitCard(){
    amount = amount - totalcut;
    console.log(`Remaining amount is ${amount}`);
}

// chargeDebitCard()

lib.updateAccount("Tv" ,chargeDebitCard)
