// js
// string to number
// only numeric string can be converted to number use parseInt or number()

const a = "45";
const c = "24";
// let d = parseInt(c); //old method
let b = Number(a); //Or +a
console.log(typeof b);
let d = +c; //+ vaneko conversion of number ho
console.log(typeof d);

let x = "10sona";
let y = Number(x);
let z = parseInt(x);
console.log(typeof y);
console.log(z);
console.log(typeof y, x);
console.log(typeof z, x);
