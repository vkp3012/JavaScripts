let user = {
    firstName : "kapil",
    lastName : "Dev",

//     welcome : function(){
//         console.log(`Welcome ${this.firstName} ${this.lastName}`);
//     }

}

//user.welcome()

let welcome = function(Email,mobileNumber,location){
    console.log(`Welcome ${this.firstName} ${this.lastName},
    thanks you for signing up! Your Email id is ${Email},
    Your registered number is ${mobileNumber},
    Your location is ${location}
    `);
};

let user2 = {
    firstName : "Ravi",
    lastName : "Shastri",
}


//call method

//syntex -> function_name.call(obj_to_which_this_will_point);

//we want to print welcome message for ravi Shastri

welcome.call(user2,"abc@gmail.com",1234567890,"India")

//apply.method
welcome.apply(user,["abc@gmail.com",1234567890,"India"]);


//bind method
let bindedFN = welcome.bind(user,"abc@gmail.com",1234567890,"India");
console.log(bindedFN);
bindedFN();



