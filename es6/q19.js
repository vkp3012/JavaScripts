// Use getters and setters to Control Access to an Object
// You can obtain values from an object and set the value of a property within an object.

// These are classically called getters and setters.

// Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable.

// Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function. This change could involve calculations, or even overwriting the previous value completely.

class Book{
    constructor(author){
        this._author = author;
    }

    //getter
    get writer(){
        return this._author;
    }

    //setter
    set writer(updateAuthor){
        this._author = updateAuthor
    }
}

const novel = new Book("anonymous")
console.log(novel);
console.log(novel.writer);
novel.writer = "newAuthor"
console.log(novel.writer);

// The console would display the strings anonymous and newAuthor.

// Notice the syntax used to invoke the getter and setter. They do not even look like functions. Getters and setters are important because they hide internal implementation details.

// Note: It is convention to precede the name of a private variable with an underscore (_). However, the practice itself does not make a variable private.

// Use the class keyword to create a Thermostat class. The constructor accepts a Fahrenheit temperature.

// In the class, create a getter to obtain the temperature in Celsius and a setter to set the temperature in Celsius.

// Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is the value of temperature in Fahrenheit, and C is the value of the same temperature in Celsius.

// Note: When you implement this, you will track the temperature inside the class in one scale, either Fahrenheit or Celsius.

// This is the power of a getter and a setter. You are creating an API for another user, who can get the correct result regardless of which one you track.

// In other words, you are abstracting implementation details from the user.

// class Thermostat{
//     constructor(Fahrenheit){
//         this._Fahrenheit = 5/9 * (Fahrenheit - 32)
//     }

//     get temperature(){
//         this._Fahrenheit;
//     }

//     set temperature(updateTemp){
//         this._Fahrenheit = updateTemp;
//     }
// }

class Thermostat {
    constructor(fahrenheit) {
      this.fahrenheit = fahrenheit;
    }
    
    get temperature() {
      return (5 / 9) * (this.fahrenheit - 32);
    }
    
    set temperature(celsius) {
      this.fahrenheit = (celsius * 9.0) / 5 + 32;
    }
  }

const temp = new Thermostat(76)
console.log(temp);
console.log(temp.temperature);
temp.temperature = 26;
console.log(temp.temperature);





