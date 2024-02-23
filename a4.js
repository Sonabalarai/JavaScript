// Conditional Practice
//?5.Perform arithmetic operation based on the option provided.
// Set two variables with numbers. Create another variable called “option”
// which can be add/subtract/multiply/divide/power.
//Based upon the value of the option. Perform appropriate operation.

let num1 = 2;
let num2 = 3;
let option = "subtraction";

if (option === "add") {
  console.log(`Addition of ${num1}+${num2} is`, num1 + num2);
} else if (option === "subtraction") {
  console.log(`Subtraction of ${num1}-${num2} is`, num1 - num2);
} else if (option === "multiplication") {
  console.log(`Multiplication of ${num1}*${num2} is`, num1 * num2);
} else if (option === "division") {
  console.log(`Division of ${num1}/${num2} is`, num1 / num2);
} else if (option === "power") {
  console.log(`Power of ${num1}^${num2} is`, num1 ** num2);
} else if (option === "reminder") {
  console.log(`Reminder of ${num1}%${num2} is`, num1 % num2);
} else {
  console.log("Invalid Option Please try again....");
}

// switch (option) {
//   case "add":
//     console.log("Addition", num1 + num2);
//     break;
//   case "subtract":
//     console.log("Subtraction", num1 - num2);
//     break;
//   case "multiply":
//     console.log("Multiply", num1 * num2);
//     break;
//   case "divide":
//     console.log("divide", num1 / num2);
//     break;
//   case "power":
//     console.log("power", Math.pow(num1, num2));
//     break;
//   default:
//     console.log("invalid option");
// }

//?6)Find grades for student marks.
//? If the mark is greater than or equal to 90, the grade is “A plus”.
// ?If the mark is greater than or equal to 80,the grade is “A”.
// ? Grade “B”  from marks greater than equal to 70.
// ?“C” for marks greater than equal to 60.
//? “F” for marks  less than 60.

const mark = 1010;

if (mark >= 90) {
  console.log("You have got Grade A+");
} else if (mark >= 80) {
  console.log("You have got Grade A");
} else if (mark >= 70) {
  console.log("You have got Grade B");
} else if (mark >= 60) {
  console.log("You have got Grade B");
} else if (mark < 60) {
  console.log("You have got Grade F");
} else if (mark > 100 || mark < 0) {
  console.log("out of range");
}

// 2Q
let inputValue = 3;
if (typeof inputValue === "number") {
  console.log("its a number");
} else {
  console.log("it's not a number");
}

// OR
let x = "23";
let type = typeof x;
if (type === "number") {
  console.log("IT is a number");
} else {
  console.log("IT's not a number");
}
