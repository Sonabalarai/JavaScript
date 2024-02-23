// Array=>object data type so {key,value}=>{index} for accessing array elements
// C language ma =>collection of same data type is an array
// JS ma =>collection different/mixed data types e.g const jsArray=[null,true,"hello",undefined]

// const studentList = ["jibana", "reena", "subu", "sumitra", true];

// console.log(studentList);
// console.log(typeof studentList);

// const scoreList = [45, 24, 60, 90, 200];
// We can access array elements by using array index where index starts with 0
// console.log(scoreList[3]);
// console.log(scoreList[6]);

// ? to print array length
// console.log(scoreList.length); //.length is a property not function

// const carBrands = ["Tata", "Tesla", "Toyota", "Hyundai"];

// for (let i = 0; i < carBrands.length; i++) { //i<car
//   console.log(carBrands[i]);
// }

// ?push() =>append  to the array list end
// const studentList = ["Prithvi"];

// studentList.push("subu");
// studentList.push("jibana");
// console.log(studentList);

// ?pop()=>array bata last item remove garxa
// const studentList = ["Prithvi", "rina", "sona"];
// console.log(studentList.pop());
// console.log(studentList);

// ?unshift=> adds items to start of array=>add can be done multiple items
// const studentList = ["Prithvi", "rina", "sona"];
// studentList.unshift("rohan");
// console.log(studentList);

// ?shift=>removes only item=1 from array start
// const studentList = ["Prithvi", "rina", "sona"];
// studentList.shift();
// console.log(studentList);

// ?map=>function ho it take arrow function  as parameter.This map function returns new array.Array ma value manipulate/modify garnu thyo vane use map function
// ?map function has power to modify array = in replace of for loop
// const scores = [20, 56, 89];

//  scores.map((item,index,self)=>{
//    console.log(item);
//   console.log(item, index);
//   console.log(item, index, self); //self=> shows whole array
//  })

// const scores = [20, 56, 89];
// const newScores = scores.map((item, index, self) => {
//   let newScore = item + 10;
//   return newScore;
// });

// console.log(newScores);

// ? return only when new array is needed

// const marks = [40, 50, 60, 90];

// const newMarks = marks.map((item, index, self) => {
//   let newItem = item - 10;
//   return newItem;
// });
// console.log(newMarks);

// ?If only items is required to print
// const nameList = ["Suman", "Prabin"];
// nameList.map((item, index, self) => {
//   let newItem = item.toLowerCase();
//   console.log(newItem);
// });

// ?If new array list is required
// const nameList = ["Suman", "Prabin"];
// let newnameList = nameList.map((item, index, self) => {
//   let newItem = item.toLowerCase();
//   let newItem = item.toUpperCase();
//   return newItem;
// });
// console.log(newnameList);

// ? if one item is to print same
// const nameList = ["Suman", "Prabin", "sona"];
// let newnameList = nameList.map((item, index, self) => {
//   if (item === "sona") {
//     return item;
//   }
//   let newItem = item.toUpperCase();
//   return newItem;
// });
// console.log(newnameList);

// ?filter,find,slice
// ? *KIM filter ma only truly equivalent or falsy value such as(false,null,undefined,0,-0)(except this in JS all are true value in filter) are check
// ?map return equal size array but not in filter =>can return different size array

// ?filter=>similar to map but it doesnot return equal size array as map(for manipulation) does which return equal size array
// const numList = [12, -23, 78, -90, 20, -50];

// const newNumList = numList.filter((item, index, self) => {
//   // return item > 0;
//   return item < 0;
// });
// console.log(newNumList);

// ?const scoreList = [25, 26, 78, 79, 35, 45, 47, 55];
//? get an array with even scores

// const scoreList = [25, 26, 78, 79, 35, 45, 47, 55];

// const newScoreList = scoreList.filter((item, index, self) => {
//   let rem = item % 2;
//   if (rem === 0) {
//     // return item;
//     return true;//we can write in this way since filter ma true equivalent check garxa(only checks condition either true or false) not to modify the value
//   }
// });
// console.log(newScoreList);

// ?
let laptopList = [
  {
    name: "TUF F15",
    brand: "asus",
    price: 1044,
  },
  {
    name: "GF63",
    brand: "msi",
    price: 900,
  },
  {
    name: "macbook air m2",
    brand: "apple",
    price: 1400,
  },
  {
    name: "nitro",
    brand: "acer",
    price: 800,
  },

  {
    name: "inspiron 55",
    brand: "dell",
    price: 700,
  },
];

const newlaptopList = laptopList.map((item, index, self) => {

  // item.price = item.price + (10 / 100) * item.price;
  // return item;
  let newPrice = item.price + (10 / 100) * item.price;
  let newItem = { ...item, price: newPrice };
  return newItem;
});
console.log(newlaptopList);
