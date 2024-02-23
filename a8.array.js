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
// ? due to sudden rise in tax, add 10% to the price of each laptop

// const newLaptopList = laptopList.map((item, index, self) => {
//   let newPrice = item.price + (10/100) * item.price;

//   let newItem = {
//     ...item,
//     price: newPrice, //replaces price with newPrice
//   };

//   return newItem;
// });

// console.log(newLaptopList);

// ?1 decrease price of each laptop by 20 percent forEach=>same as map but doesnot return new array

// const newLaptopList = laptopList.map((item, index, self) => {
//   let newPrice = item.price - (20 / 100) * item.price;
//   let newItem = {
//     ...item, //object copy using spread operator
//     price: newPrice,
//   };

//   return newItem;
// });
// console.log(newLaptopList);

// ?2 remove laptops whose price is greater than 1000

const newLaptopList = laptopList.filter((item, index, self) => {
  if (item.price <= 1000) {
    return item;
  }
});

console.log(newLaptopList);

// ?3 remove laptops whose brand is apple

// const newLaptopList = laptopList.filter((item, index, self) => {
//   if (item.brand !== "apple") {
//    return item;
//   }
// });

// console.log(newLaptopList);

// ? increase price of asus laptop by 5%

// const newLaptopList = laptopList.map((item, index, self) => {
//   if (item.brand === "asus") {
//     let newPrice = item.price + (5 / 100) * item.price;
//     let newItem = { ...item, price: newPrice };
//     return newItem;
//   } else {
//     return item;
//   }
// });

// console.log(newLaptopList);
