// find=>returns first matching item based on condition but filter ley only true value return new array
//find doesnot return new array
// const scores = [2, 5, 8, 9, 10, 19];

// const newScores = scores.find((item, index, self) => {
//   if (item > 9) {
//     return item;
//   }
// });
// console.log(newScores);

// ?push=>last ma add garxa array ko
// const nations = ["nepal", "chaina", "india"];
// nations.push("Thailand");
// console.log(nations);

// ?pop=> last ko remoove garxa
// const nations = ["nepal", "chaina", "india"];
// nations.pop();
// console.log(nations);

// ?map()

// const prices = [100, 200, 300, 50];

// const newRecord = prices.map((item, index, self) => {
//   let newPrices = item - 20;
//   return newPrices;
// });
// console.log(newRecord);

// ? make 200 to 250
// const prices = [100, 200, 300, 50];

// const newPrice = prices.map((item, index, self) => {
//   if (item === 200) {
//     let newItem = item + 50;
//     return newItem;
//   } else {
//     return item;
//   }
// });
// console.log(newPrice);

// ? array with object item
// const studentData = [
//   {
//     name: "A",
//     score: 85,
//   },
//   {
//     name: "B",
//     score: 91,
//   },
//   {
//     name: "C",
//     score: 75,
//   },
// ];

// const newStudentData = studentData.map((item, index, self) => {
//   let newScore = item.score + 5;
//   let newItem = { ...item, score: newScore };
//   return newItem;
// });
// console.log(newStudentData);

// ?Filter
// ?score greater than or equals to 32
// const marksList =[25,78,4,80]

// ?
// const studentData = [
//   {
//     name: "A",
//     score: 85,
//   },
//   {
//     name: "B",
//     score: 91,
//   },
//   {
//     name: "C",
//     score: 75,
//   },
// ];

// const newRecord = studentData.filter((item, index, self) => {
//   if (item.score > 80) {
//     return item;
//   }
// });
// console.log(newRecord);

// ?sort=>dictionary order ma  sorting garxa
// ? sorting for strings

// const nameList = [
//   "Nepal",
//   "India",
//   "China",
//   "Bhutan",
//   "America",
//   "Zimbabwe",
//   "Australia",
//   "Argentina",
// ];
// nameList.sort();
// console.log(nameList);

// ?sorting for numbers
// const nums = [1, 24, 69, 70, 45];
// nums.sort((a, b) => {
//   //   return a - b;//ascending order and 'b-a' for descending order
//   return b - a; //descending order
// });
// console.log(nums);

// const studentName = ["sona", "subu", "reena", "rajkumar"]; //const name="sona"=>["s",] in this string to print character on by one do as

// const newRecord = studentName.filter((item, index, self) => {
//   if (item.length > 6) {
//     return item;
//   }
// });
// console.log(newRecord);

// ?string ko character read in array by "sona"=>["s","o","n","a"]
// ?reduce=>no need to make variable outside function

// const scores = [10, 30, 59];

// const newScore = scores.reduce((sum, item, index, self) => {
//   sum = sum + item;
//   return sum;
// }, 0);
// console.log(newScore);

// ?
const scores = [10, 25, 35, 5];
const newProduct = scores.reduce((product, item, index, self) => {
  product = product * item;
  return product;
}, 1);
console.log(newProduct);
