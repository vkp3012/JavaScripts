
// spread operator
// it is used to split up arr element or object properties

const nums = [1, 2, 3];
// const newNums = [...nums, 4];
const newNums = [nums, 4];
console.log(newNums); //[[1,2,3],4]

const oObj = {
    name: "Mohit",
    age:23

}
const nobj = { ...oObj, age: 32 };
console.log(nobj);
console.log(oObj);