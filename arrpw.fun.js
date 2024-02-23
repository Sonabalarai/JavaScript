// js => function can treated as first citizen class
//arrow function
//is anonymous function =>function that does not have name, ()=>{}

// let getSubtract = (num1, num2) => {
//   const sub = num1 - num2;

//   return sub;
// };

// const result = getSubtract(2, 3);
// console.log(result);
// Advantages
// 1)more cleaner and conscise and  code readable

// ?WA arrow function that checks if provided number is odd or even

// const checkNumber = (num) => {
//   const reminder = num % 2;
//   let result;
//   if (reminder === 0) {
//     // console.log("its a even number");
//     result = "even";
//   } else {
//     result = "odd";
//     // console.log("odd");
//   }
//   return result;
// };

// const value = checkNumber(7);
// console.log(value);
// ?$$$$$$$$$$$$$$Next(Alternative code) process if only one sentance is to be return&&&&&&&&&&&&&&&&&&&&&
// let getSubtract = (num1, num2) => num1 - num2;
// const result = getSubtract(2, 3);
// console.log(result);

// ?write and arrow function that prints average of any 3 numbers

// const calculateAverage = (num1, num2, num3) =>
//   ((num1 + num2 + num3) / 3).toFixed(3);

// const result = calculateAverage(5, 3, 5);
// console.log(result);

// const calculateFactorial = (n) => {
//   let factorial = 1;
//   for (let i = 1; i <= n; i++) {
//     factorial *= i;
//   }
//   return factorial;
// };

// const result = calculateFactorial(5);
// console.log(result);

// ?WAF that accepts first name and last name as argument and return full name

// const printFullName = (f_name, l_name) => {
//   return `My name is ${f_name}  ${l_name}`;
// };
// const result = printFullName("Sona", "Rai");
// console.log(result);

// ? WAF that takes "Bearer abcd12345" as argument and return "abcd12345"
let getString = (name) => "abcd12345";

let result = getString("Bearer abcd12345");
console.log(result);
