// ?Array destructure

// const fulName=["sona","rai"]
//console.log(fulName[0])
// console.log(fulName[1])

// ?do destructure to above array
// const [firstName, lastName] = ["sona", "rai"];
// console.log(firstName, lastName);

// const [num1, num2, num3] = [1, 4, 6];
// console.log(num1, num2, num3);

// const [value, func] = [
//   5,
//   () => {
//     console.log("Hello");
//   },
// ];
// console.log(value);
// func();

// ?Array copy
// if in array there is onlyn primitive data type (such as null , string) than use spread operator
// but if there is non primitive datatypes(such as object) than use structureClone

// ?spread operator

// let scores=[10,20]

// let newNumber =[...scores]
// console.log(newNumber)

const studentData = [{ name: "A" }, { name: "B" }];

const newStudent = structuredClone(studentData);
newStudent[0].name = "J";
// console.log(newStudent);
console.log(studentData);

// ?reverse()=

// const name = ["sona", "subu","reena","jivana"];
// name.reverse();
// console.log(name);

// ?reverse() ko use case
const name = ["sona", "subu", "reena", "jivana", "bibek"];
// name.sort();

name.sort().reverse();
console.log(name);
