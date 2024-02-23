//?Write a arrow function that checks if the provided number is odd or even.

// let checkEvenOrOdd = (num) => {
//   const reminder = num % 2;
//   let result;
//   if (reminder === 0) {
//     result = "even";
//   } else {
//     result = "odd";
//   }
//   return result;
// };

// const result = checkEvenOrOdd(90);
// console.log(result);

// ?Write a function that takes a number and prints value from 0 to that number (use while loop).

// const printValues = (num) => {
//   let i = 0;
//   while (i <= num) {
//     console.log(i);
//     i++;
//   }
// };
// printValues(10);

// ?Write a function that takes “add”/“subtract”/”multiply”/”divide” and two numbers as parameters and perform appropriate operations.

// let calculateValues = (option, num1, num2) => {
//   if (option === "add") {
//     return num1 + num2;
//   } else if (option === "subtract") {
//     return num1 - num2;
//   } else if (option === "multiply") {
//     return num1 * num2;
//   } else if (option === "divide") {
//     return num1 / num2;
//   } else {
//     console.log("invalid option");
//   }
// };

// const result = calculateValues("subtract", 12, 15);
// console.log(result);

// ?Write an arrow function that takes day of week as parameter and returns 1,2,3,4,5,6. Example.. Provided sunday should return 1,monday returns 2

// const getDaysNumber = (dayname) => {
//   switch (dayname) {
//     case "sunday":
//       return 1;
//     case "monday":
//       return 2;
//     case "tuesday":
//       return 3;
//     case "wednesday":
//       return 4;
//     case "thursday":
//       return 5;
//     case "friday":
//       return 6;
//     case "saturday":
//       return 7;
//     default:
//       console.log("invalid option");
//   }
// };

// const result = getDaysNumber("monday");
// console.log(result);

// ?Write a function that takes 5 numbers and calculates the average of the provided numbers.

// const calculateAverage = (num1, num2, num3, num4, num5) => {
//   let average = (num1 + num2 + num3 + num4 + num5) / 5;
//   return average;
// };

// const result = calculateAverage(5, 5, 5, 5, 5);
// console.log(result);

// ?Write a function that takes a number as a parameter and returns a sum from 0 to that number. E.g if number is 5 then function should return 0+1+2+3+4+5=15

// const getSum = (num) => {
//   let totalsum = 0;
//   for (let i = 0; i <= num; i++) {
//     totalsum += i;
//   }
//   return totalsum;
// };

// let result = getSum(5);
// console.log(result);

// ?WAF that converts dollars into cents.

// const convertDollarToCents = (dollar) => {
//   let cents = dollar * 100;
//   return cents;
// };

// const result = convertDollarToCents(10);
// console.log(result);

// ?WAF that converts temperature in Celsius into Fahrenheit.
// const convertCelsiusToFahrenheit = (celcius) => {
//   let fahrenheit = celcius * (9 / 5) + 32;
//   return fahrenheit;
// };

// let result = convertCelsiusToFahrenheit(36);
// console.log(result);

// ?WAF that calculates the factorial of a number.
// const calculateFactorial = (num) => {
//   if (num === 0 || num === 1) {
//     return 1;
//   } else if (num === 2) {
//     return 2;
//   } else {
//     factorial = 1;
//     for (let i = 1; i <= num; i++) {
//       factorial *= i;
//     }
//     return factorial;
//   }
// };
// const result = calculateFactorial(3);
// console.log(result);

// ? WAF that calculates the given number is prime or not.
let count = 0;
function checkPrimeOrNot(num) {
  if (num < 2) {
    return "not prime";
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return "not prime";
    }
  }
  return "prime";
}
const result = checkPrimeOrNot(301);
console.log(result);
