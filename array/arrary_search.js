

/*--------------------------indexOf/lastIndexOf and includes--------------*/

console.log("-------indexOf/lastIndexOf and includes---------------");

//indexOf/lastIndexOf and includes
let arr12 =[1,0,false];
console.log(arr12.indexOf(0));          // 1
console.log(arr12.indexOf(false));      // 2
console.log(arr12.indexOf(null));       // -1
console.log(arr12.includes(1));         // true


const arr13 = [NaN];
console.log(arr13.indexOf(NaN));         // -1 (should be 0, but === equality doesn't work for NaN)
console.log(arr13.includes(NaN));       // true (correct)




arr8 = [ 2, 6, 7, 8 ];
let findIndex3 = arr8.indexOf(6, 2);
console.log(findIndex3);


/*--------------find and findIndex----------------*/
console.log("----------find and findIndex-----------------");


//find and findIndex
let users =[
    {id:1,name:"John"},
    {id:2,name:"Pete"},
    {id:3,name:"Mary"}];
let user = users.find(item => item.id == 1);
console.log(user.name);                          // John



arr8 = [ 2, 6, 7, 8 ];
				
let findValue = arr8.find(function(e) { 
    return e === 6
});

let findValue2 = arr8.find(e => e === 10);
console.log(findValue, findValue2);                 //6 undefined