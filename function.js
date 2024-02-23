// Functions=>Block of code which perform specific operation
//It reduces code repetition
// It enhances code reuse

//? Syntax
//? function functionName(){} and to execute it call by functionName
// ?Function name start with verb such as get,do etc..

// function getSum() {
//   let num1 = 10;
//   let num2 = 20;
//   let sum = num1 + num2;
//   console.log(sum);
// }

// getSum();

// ?Making Dynamic function

// function getSum(num1, num2) {
//   let sum = num1 + num2;
//   console.log(sum);
// }

// getSum(12, 12);

// ?WAP that multiplies 3 numbers

// function getProduct(num1, num2, num3) {
//   let result = num1 * num2 * num3;
//   console.log(`Product of 3 numbers is ${result}`);
// }
// getProduct(5, 5, 5);

// ?WAP that checks if provide number is odd or even

function checkOddOrEven(num) {
  let rem = num % 2;

  if (rem === 0) {
    console.log(`${num} is even number`);
  } else {
    console.log(`${num} is odd number`);
  }
}
checkOddOrEven(7);
checkOddOrEven(10);
