

function Name(firstName,lastName){
    this.firstName = firstName,
    this.lastName = lastName
}



function fun(){
    console.log(this.name || "name is not defined");
}

var obj = {
    name:"vivek patel"
}

var bindedFn  = fun.bind(obj);
bindedFn();

var againBindedFn = new bindedFn();
// againBindedFn();