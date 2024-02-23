// ?Create an array called friendsList and add your friends name.
// ? Print out your friend's name one by one.

// const friendsList = [];
// friendsList.push("Reena", "Subu", "Jivana");
// console.log(friendsList);
// friendsList.map((item, index, self) => {
//   console.log(item, index);
// });
// ? map() and forEach is same but map returns new array but forEach doesnot return
// ?Create an array called favourite sportsPerson and use a for loop to print the player's name.
// const sportsPerson = ["Messi", "Nemayer", "Ronaldo", "Ronaldino", "zidan"];

// for (let i = 0; i <= sportsPerson.length - 1; i++) {
//   console.log(sportsPerson[i]);
// }

// ?Create an array called myFavourite actors and print out who is your best actor among all actors.

// const myFavouriteActors = [
//   "Salman",
//   "Akshya",
//   "Sharuk",
//   "Biraj Bhatta",
//   "Dayahang",
// ];
// for (let i = 0; i <= myFavouriteActors.length - 1; i++) {
//   if (myFavouriteActors[i] === "Sharuk") {
//     console.log(`my favourite actor name is ${myFavouriteActors[i]}`);
//   }
// }

// ?Next approach using map function

// const myFavouriteActors = [
//   "Salman",
//   "Akshya",
//   "Sharuk",
//   "Biraj Bhatta",
//   "Dayahang",
// ];

// myFavouriteActors.map((item, index, self) => {
//   if (item === "Dayahang") {
//     console.log(`my favourite actor name is ${item}`);
//   }
// });

// ?Make an array of numbers that double the items.

// const numberDouble = [1, 2, 3, 4, 5];

// const result = numberDouble.map((item, index, self) => {
//   return item * 2;
// });
// console.log(result);

// ?Make an array of numbers and print whether the numbers are odd or even.

// const checkOddOrEven = (num) => {
//   let reminder = num % 2;
//   if (reminder === 0) {
//     return `${num} is even `;
//   } else {
//     return `${num} is odd`;
//   }
// };

// const randomNumber = [2, 1, 45, 18, 27, 97, 10, 5];

// randomNumber.forEach((item, index, self) => {
//   const result = checkOddOrEven(item);
//   console.log(result);
// });

// ?Create an array called laptopPriceList and run map,filter, find, slice,splice,every,some,findIndex,reverse on it.

// ?%%%%%%%%%%%filter%%%%%%%%%%%%
// ?filter=>filter out value from array
