// Switch=> This is === case ko condition ho
// let dayNumber = " 8";

// switch (dayNumber) {
//   case 1:
//     console.log("sunday");
//     break;
//   case 2:
//     console.log("monday");
//     break;
//   case 3:
//     console.log("Tuesday");
//     break;
//   case 4:
//     console.log("Wednesday");
//     break;
//   case 5:
//     console.log("Thursday");
//     break;
//   case 6:
//     console.log("Friday");
//     break;
//   case 7:
//     console.log("Saturday");
//     break;
//   default:
//     console.log("Invalid");
// }

// backtic(Tamplate literal)

let number = -5;
let reminder = number % 2;
switch (reminder) {
  case 0:
    console.log(`${number} is Even`);
    break;
  case 1:
    console.log(`${number} is Odd`);
    break;

  default:
    console.log("Invalid");
    break;
}

// %%%%%%%%%%%%%%%%%%%%%%%%%%Ternary Operator$$$$$$$$$$$$$$$

let x = 1; //0 or 1
let rem = x % 2;
rem === 0 ? console.log("even") : console.log("odd");

// ?Q)find greatest
let num1 = 5;
let num2 = 6;
let y = num1 > num2;
y
  ? console.log("num1 is greater than num2")
  : console.log("num2 is greater than num1 ");


