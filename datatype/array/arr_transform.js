

/*--------------Array Transfrom------------------------*/

console.log("-----------map-------------------");


//map
let lengths =["Bilbo","Gandalf","Nazgul"].map(item=>item.length);
console.log(lengths);// 5,7,6


console.log("----------sort(fn)-----------------");

//sort(fn)
let arr =[1,2,15];// the method reorders the content of arr
arr.sort();
console.log(arr );// 1, 15, 2



function compare(a,b){
    if(a > b) return 1;// if the first value is greater than the second
    if(a == b) return 0;// if values are equal
    if(a <b) return -1;// if the first value is less than the second
}
let arr1 = [ 1, 2, 15 ];
arr1.sort(compare);
console.log(arr1);  // 1, 2, 15


[1,-2,15,2,0,8].sort(function(a,b){
    console.log(a +" <> "+b );
    return a - b;
});


let arr3 =[1,2,15];
arr3.sort(function(a,b){
    return a -b;
});
console.log(arr3);// 1, 2, 15


let countries = ['Österreich','Andorra','Vietnam'];
console.log(countries.sort((a,b)=>a >b ?1:-1));// Andorra, Vietnam, Österreich (wrong)
console.log(countries.sort((a,b)=>a.localeCompare(b)));// Andorra,Österreich,Vietnam (correct!)


/*----------------------reverse--------------------*/
console.log("------reverse--------------");

//reverse
let arr4 =[1,2,3,4,5];
arr4.reverse();
console.log(arr4 );// 5,4,3,2,1


/*-------------Split and Join---------------------*/

console.log("----------Split and Join-------------------");

//Split and Join
let names ='Bilbo, Gandalf, Nazgul';
let arr5 = names.split(', ');
for(let name of arr5){
    console.log(`A message to ${name}.`);// A message to Bilbo  (and other names)
}


let arr6 ='Bilbo, Gandalf, Nazgul, Saruman'.split(', ',2);
console.log(arr6);// Bilbo, Gandalf


//split in letter
let str ="test";
console.log(str.split(''));// t,e,s,t


let arr7 =['Bilbo','Gandalf','Nazgul'];
let str1 =arr7.join(';');// glue the array into a string using ;
console.log(str1);// Bilbo;Gandalf;Nazgul