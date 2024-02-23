// Operators
// 1. arithmetic operator +,-,*,/,%,**(power)
// x+y=>expression and x+y=5 (equation)

// let x = 2;
// let y = 5;
// console.log(x + y);
// console.log(y - x);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y);

let x = 3;
let y = 2;

let result1 = 3 * x - 2 * y + 2 * x * y;
let result2 = (x + y) * 2 - 1;
let result3 = (x ** 3 + y ** 2) / 3; //
const res = (Math.pow(x, 3) + Math.pow(y, 2)) / 3;
let c = `${res}`.toFixed(2);
console.log(`result is ${c}`);
console.log(result1);
console.log(result2);
console.log(result3);
// console.log(result14);
