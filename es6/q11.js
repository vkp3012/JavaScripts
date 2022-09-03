// Use Destructuring Assignment to Assign Variables from Nested Objects
// You can use the same principles from the previous two lessons to destructure values from nested objects.

// Using an object similar to previous examples:

const user = {
    johnDoe :{
        age:32,
        email:"johndev@gmail.com"
    }
}

console.log(user);

// Here's how to extract the values of object properties and assign them to variables with the same name:

const {johnDoe:{age,email}} = user;
console.log(user); 

// And here's how you can assign an object properties' values to variables with different names:

const { johnDoe: { age: userAge, email: userEmail }} = user;
console.log(user);


// Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables lowToday and highToday the values of today.low and today.high from the LOCAL_FORECAST object.

const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};
  
    
const {today: {low:lowToday,high:highToday}} = LOCAL_FORECAST;

console.log(LOCAL_FORECAST);