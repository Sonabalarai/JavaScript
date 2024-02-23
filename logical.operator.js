// logical operator
// 1Q
let a = 2;
let b = -3;
let c = 5;
let d = 10;
let e = 9;

// let firstCondition = a > b;
// let secondCondition = c <= d;

// console.log(firstCondition && secondCondition);

// // b
// console.log(a + b < c || d * a >= c);

// console.log((a ** c == d && d === e + a - 1) || d % e !== 1);

// let fCondition = 2 ^ (a + b > d);
// let sCondition = c - d > b;
// console.log(2 ** a + b > d || c - d > b);

// #######Important in And and OR gate##############
// ##Short Circuit => in && gate if one condition is false than after that condition there
//is no futher checking so this  condition is short  circuit..
//and in OR gate if first condition is true then no futher checking so it's said to have short circuit

let c1 = true;
let c2 = true;
let c3 = false;
let c4 = true;

console.log(c1 || c2 || c3 || c4);
console.log(c1 && c2 && c3 && c4);
