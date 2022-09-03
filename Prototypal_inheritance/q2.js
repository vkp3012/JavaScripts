

let user = {
    name : "Vivek",
    sayHi:function(){
        console.log(this.name);
    }
}

let admin = {
    role:"admin",
    age:30
}


admin.__proto__ = user

console.log(admin.name);

console.log(admin.sayHi());

console.log(admin.name = "anshu");

console.log(user.name);