// ?1)Write a function that checks if the provided number is odd or even.

// for (let i = 1; i <= 50; i++) {
//   let reminder = i % 2;
//   if (reminder === 0) {
//     console.log(`${i} is an even number`);
//   } else {
//     console.log(`${i} is odd number`);
//   }
// }

// ?2)Write a function that takes a number and prints value from 0 to that number (use while loop).

// function inputNumber(num) {
//   let i = 0;
//   while (i <= num) {
//     console.log(i);
//     i++;
//   }
// }

// inputNumber(5);

// ?3)Write a function that takes “add”/“subtract”/”multiply”/”divide” and two numbers as parameters and perform appropriate operations.

// function calculateValue(operation, num1, num2) {
//   //   console.log(typeof operation);
//   //   console.log(operation);
//   if (operation === "add") {
//     console.log(`Addition of ${num1} and ${num2} =`, num1 + num2);
//   } else if (operation === "subtract") {
//     console.log(`Subtraction of ${num1} and ${num2} =`, num1 - num2);
//   } else if (operation === "multiply") {
//     console.log(`Multiplication of ${num1} * ${num2} =`, num1 * num2);
//   } else if (operation === "divide") {
//     console.log(`divide of ${num1} and ${num2} =`, num1 / num2);
//   }
// }
// calculateValue("add", 2, 5);
// calculateValue("subtract", 2, 5);
// calculateValue("multiply", 2, 5);
// calculateValue("divide", 2, 5);

// ?4)Write a function that takes day of week as parameter and returns 1,2,3,4,5,6. Example.. Provided sunday should return 1,monday returns 2

// function getDayOfWeekName(name) {
//   switch (name) {
//     case "sunday":
//       console.log(1);
//       break;
//     case "monday":
//       console.log(2);
//       break;
//     case "tuesday":
//       console.log(3);
//       break;
//     case "wednesday":
//       console.log(4);
//       break;
//     case "thursday":
//       console.log(5);
//       break;
//     case "friday":
//       console.log(6);
//       break;
//     case "saturday":
//       console.log(7);
//       break;
//     default:
//       console.log("invalid day name of week");
//       break;
//   }
// }

// getDayOfWeekName("sunday");
// getDayOfWeekName("monday");
// getDayOfWeekName("tuesday");
// getDayOfWeekName("thursday");
// getDayOfWeekName("wednesday");
// getDayOfWeekName("friday");
// getDayOfWeekName("january");

// ?5)Write a function that takes 10 numbers and calculates the average of the provided numbers.

// function calculateAverage(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10) {
//   let average = (n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10) / 10;
//   console.log(`Average value of 10 numbers is ${average}`);
// or return average;
// after return keyword nothing will be execute
// }
// calculateAverage(10, 10, 10, 10, 10, 10, 10, 10, 10, 10);//Argument=>concrete values and receive garne variable are parameter//Ask question when provided unequal parameter
//or console.log(calculateAverage(10, 10, 10, 10, 10, 10, 10, 10, 10, 10))//for return case

// ?6)Write a function that takes a number as a parameter and returns a sum from 0 to that number. E.g if number is 5 then function should return 0+1+2+3+4+5=15

// function getSum(number) {
//   let sum = 0;
//   for (let i = 0; i <= number; i++) {
//     sum += i;
//   }
//   console.log(`sum of given number is ${sum}`);
// }

// getSum(5);

// ?7)WAF that converts dollars into cents.

// function convertDollarToCents(dollar) {
//   let result = dollar * 100;
//   console.log(`${dollar}$ is equal to ${result}cents`);
// }

// convertDollarToCents(2.25);

// ?7)WAF that converts rupees into Paisa.

// function convertRupeesToPaisa(rupees) {
//   let paisa = rupees * 100;
//   return paisa;
// }

// const res = convertRupeesToPaisa(2.25);
// console.log(res);

// //?8WAF that converts temperature in Celsius into Fahrenheit.

// function convertCelsiusToFahrenheit(celsius) {
//   let fahrenheit = celsius * (9 / 5) + 32;
//   return fahrenheit;
//   // console.log(
//   //   `${celsius} degree celsius is  equal to ${fahrenheit} degree fahrenheit`
//   // );
// }

// const result = convertCelsiusToFahrenheit(-40);
// console.log(result);

// ?9 WAF that calculates the factorial of a number.

// function calculateFactorial(number) {
//   let factorial = 1;
//   if (number === 0 || number === 1) {
//     factorial *= 1;
//     console.log(`factorial of ${number} is ${factorial}`);
//   } else {
//     for (let i = 2; i <= number; i++) {
//       factorial *= i;
//     }
//     console.log(`factorial of ${number} is ${factorial}`);
//   }
// }
// calculateFactorial(0);
// calculateFactorial(1);
// calculateFactorial(2);
// calculateFactorial(3);
// calculateFactorial(4);
// calculateFactorial(5);

// ?10)WAF that calculates the given number is prime or not.

// function checkPrimeOrNot(number) {
//   let reminder = number % 2;
//   if (number === 1 || number === 0) {
//     console.log(`${number} is not a prime number`);
//   } else if (reminder !== 0 || number === 2) {
//     console.log(`${number} is a prime number`);
//   } else {
//     console.log(`${number} is not a prime number`);
//   }
// }
// checkPrimeOrNot(0);
// checkPrimeOrNot(1);
// checkPrimeOrNot(2);
// checkPrimeOrNot(3);
// checkPrimeOrNot(4);
// checkPrimeOrNot(5);
// checkPrimeOrNot(6);
// checkPrimeOrNot(9);

// function printValues(startvalue,endvalue){
//  if()
// }
// printValues(10,20)
