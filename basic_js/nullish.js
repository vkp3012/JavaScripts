
// result = (a !== null && a !== undefined) ? a : b;


let user;
console.log(user ?? "Anonymous");// Anonymous (user not defined)


let user1 ="John";
console.log(user1 ?? "Anonymous");// John (user defined)


// let firstName =null;
// let lastName =null; 
// let nickName ="Supercoder";// shows the first defined value:
// console.log(firstName ??lastName ??nickName ??"Anonymous");// Supercoder


//Comparison with ||

let firstName =null;
let lastName =null;
let nickName ="SuperCoder";// shows the first truthy value:
console.log(firstName || lastName || nickName || "Anonymous"); // SuperCoder


let height =0;
console.log(height || 100);// 100
console.log(height ?? 100);// 0


//Precedence
let height1 =null;
let width =null;// important: use parentheses
let area =(height1 ??100)*(width ??50);
console.log(area);// 5000


//Using ?? with && or ||
// let x =1 && 2 ?? 3;// SyntaxError: Unexpected token '??'


let x =(1&&2)??3;// Works
console.log(x);// 2