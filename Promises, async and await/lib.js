

function updateAccount(product,cb){
    setTimeout(()=>{
        console.log(product + ' purchased');
        cb();
    },2000)
}

module.exports = {
    updateAccount : updateAccount
}