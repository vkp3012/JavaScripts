
/*-------------------Quotes-------------*/

console.log("-------------------Quotes-----------------");
//Quotes
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

console.log(str);
console.log(str2);
console.log(phrase);

let name = "John";

// embed a variable
console.log(`Hello, ${name}!`); // Hello, John!

//embed an expression
console.log(`the result is ${1 + 2}`); // the result is 3;

console.log("the result is ${1 + 2}"); // the result is ${1 + 2} (double quotes do nothing);

//function
function sum(a, b) {
    return a + b;
}

console.log(`1 + 2 = ${sum(1, 2)}.`)  //1 + 2 = 3.

let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

console.log(guestList);// a list of guests, multiple lines


// let guestList1 = " Guests:
//   * John ";

// console.log(guestList1)  //SyntaxError: Invalid or unexpected token



/*---------------------------Special characters--------------------*/

console.log("------------Special characters-------------------");

//Special characters
let guestList2 = "Guests:\n * John\n * Pete\n * Mary";
console.log(guestList);// a multiline list of guests


let str1 = "Hello\nWorld"; // two lines using a "newline symbol"
let str3 = `Hello   
World`;              // two lines using a normal newline and backticks

console.log(str1);
console.log(str3);
console.log(str1 === str3); // true

/*---------------Unicode---------------------*/

console.log("---------------Unicode---------------------");

//Unicode
console.log("\u00A9");     // ©
console.log("\u{20331}");  // 佫, a rare Chinese hieroglyph (long Unicode)
console.log("\u{1F60D}");  // 😍,


/*--------------- backslash character \----------------*/

console.log("--------------- backslash character \----------------");

// backslash character (\)
console.log('I\'m the Walrus!');// I'm the Walrus!

// without backslash character (\) using backticks
console.log(`I'm the Walrus!`); // I'm the Walrus!

console.log(`The backslash: \\`);// The backslash: \;
// console.log(`The backslash: \\\`);// SyntaxError: missing ) after argument list
console.log(`The backslash: \\\na`);// The backslash: \   new line is a;


/*---------------------String Length--------------------*/

console.log("-------------String Length----------------");

//length
console.log("My\n".length); //3


/*----------------------Accessing characters------------------*/

console.log("--------------Accessing characters---------------------");

//Accessing characters
let str4 = `Hello`;// the first character
console.log(str4[0]);// H
console.log(str4.charAt(0));// H

// the last character
console.log(str4[str4.length - 1]);// o


//differece b/w [] and charAt.
let str5 = `Hello`;
console.log(str5[1000]);// undefined
console.log(str.charAt(1000));// '' (an empty string)

//for .. of
for (let char of "Hello") {
    console.log(char);    // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
}

/*--------------------------Strings are immutable---------------------*/

console.log("---------------Strings are immutable--------------------");

//Strings are immutable
let str6 = 'Hi';
str6[0] = 'h';// error
console.log(str6[0]);// doesn't work

//change string
let str7 = 'Hi';
str7 = 'h' + str7[1];// replace the string
console.log(str7);// hi

/*--------------------Changing the case--------------------*/

console.log("--------Changing the case------------------");

//toUppercase
console.log('Interface'.toUpperCase());// INTERFACE
//toLowerCase
console.log('Interface'.toLowerCase());// interface

console.log('Interface'[0].toLowerCase());// 'i'

/*---------------------Searching for a substring-------------------*/

console.log("------------------Searching for a substring-------------------------");

//str.IndexOf
let a = 'Widget with';
console.log(a.indexOf('Widget'));// 0, because 'Widget' is found at the beginning
console.log(a.indexOf('widget'));// -1, not found, the search is case-sensitive
console.log(a.indexOf("with")); // 1, "id" is found at the position 1 (..idget with id)
console.log(a.indexOf("id")); // 1, "id" is found at the position 1 (..idget with id)


let b = 'Widget with id';
console.log(b.indexOf('id', 2))// 12


console.log("-------------Question 1-----------------");

let c = 'As sly as a fox, as strong as an ox';
let target = 'as';       // let's look for it
let pos = 0;
while (true) {
    let foundPos = c.indexOf(target, pos);
    if (foundPos == -1)
        break;
    console.log(`Found at ${foundPos}`);
    pos = foundPos + 1;  // continue the search from the next position
}

console.log("-------------Question 2-----------------");

let d = "As sly as a fox, as strong as an ox";
let target1 = "as"; 
let pos1 = -1;
while ((pos1 = d.indexOf(target1, pos1 + 1)) != -1){
    console.log(pos1); 
}


console.log("-----------------str.lastIndexOf(substr, position)-------------------");
//str.lastIndexOf(substr, position)

//not working
let e ="Widget with id";
if(e.indexOf("Widget")){
    console.log("We found it");// doesn't work!
}

//is working
let f ="Widget with id";
if(f.indexOf("Widget")!=-1){
    console.log("We found it");// works now!
}

/*--------------------The bitwise NOT trick--------------------*/

console.log("----------------The bitwise NOT trick----------------------");

console.log(~2);// -3, the same as -(2+1)
console.log(~1);// -2, the same as -(1+1)
console.log(~0);// -1, the same as -(0+1)
console.log(~-1);// 0, the same as -(-1+1)

let g ="Widget";
if(~g.indexOf("Widget")){
    console.log('Found it!');// works
}


/*---------------------includes, startsWith, endsWith----------------*/

console.log("-------------includes, startsWith, endsWith----------------");

console.log("Widget with id".includes("Widget"));// true
console.log("Hello".includes("Bye"));// false

//includes
console.log( "Widget".includes("id") ); // true
console.log( "Widget".includes("id", 3) ); // false, from position 3 there is no "id"


//startwith - endwith
console.log("Widget".startsWith("Wid"));// true, "Widget" starts with "Wid"
console.log("Widget".endsWith("get"));// true, "Widget" ends with "get"

/*------------------------Getting a substring------------------*/

console.log("----------Getting a substring---------------------");


//slice
let vi ="stringify";
console.log(vi.slice(0,5));// 'strin', the substring from 0 to 5 (not including 5)
console.log(vi.slice(0,1));// 's', from 0 to 1, but not including 1, so only character at 0


let v = "stringify";
console.log(v.slice(2) ); // 'ringify', from the 2nd position till the end

let viv ="stringify";// start at the 4th position from the right, end at the 1st from the right
console.log(viv.slice(-4,-1));// 'gif'


//substring
let x ="stringify";// these are same for substring
console.log(x.substring(2,6));// "ring"
console.log(x.substring(6,2));// "ring"
// ...but not for slice:
console.log(x.slice(2,6));// "ring" (the same)
console.log(x.slice(6,2));// "" (an empty string)

//substr
let y ="stringify";
console.log(y.substr(2,4));// 'ring', from the 2nd position get 4 characters

let z ="stringify";
console.log(z.substr(-4,2));// 'gi', from the 4th position get 2 characters


/*--------------------Comparing strings--------------------*/
console.log("----------Comparing strings------------");

console.log('a'>'Z');   //true


console.log('Österreich'>'Zealand');// true


//str.codePointAt(pos)
console.log("z".codePointAt(0));// 122
console.log("Z".codePointAt(0));// 90


//String.fromCodePoint(code)
console.log(String.fromCodePoint(90));// z


// 90 is 5a in hexadecimal system
console.log('\u005a');// Z


let q ='';
for(let i =65;i <=220;i++){
    q +=String.fromCodePoint(i);
}
console.log(q );// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ

/*------------------------Correct comparisons--------------------*/

console.log("------------Correct comparisons---------------------");

console.log('Österreich'.localeCompare('Zealand'));// -1

/*------------------Surrogate pairs------------*/

console.log("-----------Surrogate pairs-----------------");


//Surrogate pairs
console.log('𝒳'.length );// 2, MATHEMATICAL SCRIPT CAPITAL X
console.log('😂'.length );// 2, FACE WITH TEARS OF JOY
console.log('𩷶'.length );// 2, a rare Chinese hieroglyph


console.log('𝒳'[0]);// strange symbols...
console.log('𝒳'[1]);// ...pieces of the surrogate pair


// charCodeAt is not surrogate-pair aware, so it gives codes for parts
console.log('𝒳'.charCodeAt(0).toString(16));// d835, between 0xd800 and 0xdbff
console.log('𝒳'.charCodeAt(1).toString(16));// dcb3, between 0xdc00 and 0xdfff


/*-----------------------Diacritical marks and normalization---------------*/

console.log("--------------Diacritical marks and normalization-------------------");

//Diacritical marks and normalization
console.log('S\u0307');// Ṡ

console.log('S\u0307\u0323');// Ṩ


let s1 ='S\u0307\u0323';// Ṩ, S + dot above + dot below
let s2 ='S\u0323\u0307';// Ṩ, S + dot below + dot above
console.log(`s1: ${s1}, s2: ${s2}`);  //s1: Ṩ, s2: Ṩ
console.log(s1 ==s2 );// false though the characters look identical (?!)



console.log("S\u0307\u0323".normalize()=="S\u0323\u0307".normalize());// true


console.log( "S\u0307\u0323".normalize().length ); // 1

console.log( "S\u0307\u0323".normalize() == "\u1e68" ); // true