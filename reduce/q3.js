

var users = [
    { firstName: "Mayank", lastName: "Singh", age: 55 },
    { firstName: "Jyoti", lastName: "Jauhari", age: 25 },
    { firstName: "Saket", lastName: "Bharti", age: 15 },
];

console.log(users);

//write a code to get fullName of all Users

function fullName(obj){
    return obj.firstName + " " + obj.lastName;
}

var ans = users.map(fullName)
console.log(ans);

//one line code
console.log(users.map((obj)=> obj.firstName + " " + obj.lastName));


//write a code to return the number of people with a particular age.
function peopleage(robj,cobj){
    let age = cobj.age;
    if(robj[age]){
        robj[age] = robj[age] + 1;
    }else{
        robj[age] = 1;
    }
    return robj;
}

var obj = users.reduce(peopleage,{});
console.log(obj);


//write a code to get the first name of all user with age less than 30.
var ans = users.filter((obj) => obj.age<30)
console.log(ans);

var ans1 = ans.map(fullName);
console.log(ans1);


//or - channing of higher order function
console.log(users.filter((obj) => obj.age<30).map(fullName));


//use reduce method 

var ans = users.reduce((arr,obj) =>{
    if(obj.age<30){
        arr.push(obj.firstName + " " + obj.lastName);
    }
    return arr;
},[]);

console.log(ans);

//or 
//using reduce
function getPeopleLessThan30(arr, obj) {
    if (obj.age < 30) {
        arr.push(obj.firstName + " " + obj.lastName);
    }
    return arr;
}

var ans=users.reduce(getPeopleLessThan30,[]);
console.log(ans);

