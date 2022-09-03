

let area = function (a) {
    return a * a;
  };
  
let perimeter = function (a) {
    return 4 * a;
};
  
let diagonal = function (a) {
    return Math.sqrt(2) * a;
};


//implementation of our own map 
Array.prototype.myMap = function (logic) {
    let res = [];

    for (let i = 0; i < this.length; i++) {
      res.push(logic(this[i]));
    }
    return res;
}
  
var narr = [1, 2, 3, 4];
var ans = narr.myMap(area);
console.log(ans);
  
var ans = narr.myMap(function (num) {
    return num * 3;
});
  
console.log(ans);
  
Array.prototype.mySize = 8;
console.log(narr.mySize);