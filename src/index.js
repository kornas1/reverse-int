module.exports = function reverse (n) {
let str = n.toString().split('').reverse().join('');
let Number = parseInt(str, 10);
 return Number;
}  

