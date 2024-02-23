//? object destructure

// const laptop1 = {
//   name: "Mac Book Pro",
//   brand: "Apple",
//   model: 2023,
//   storage: {
//     ram: 18,
//     ssd: 512,
//   },
// };

// ?destructure

// const {
//   name,
//   brand,
//   model,
//   storage: { ram, ssd }, //1)double destructure
// } = laptop1;
// console.log(brand);
// console.log(ram, ssd);
// console.log(storage); it doesnot work

let firstName = "nisha";
const student1 = {
  firstName: "sona",
  address: {
    temp: "lalitpur",
    permanent: "ilam",
  },
};

const {
  firstName: fname, //1)renaming the key if this key is in used/initalized before
  address: { temp }, //2)double structure
} = student1;

// console.log(temp);
// console.log(firstName); //print nisha
console.log(fname); //print sona

// binding is done by 'this' keyword but doesnot work by =>(arrow function)
// object inside ko function is call method
