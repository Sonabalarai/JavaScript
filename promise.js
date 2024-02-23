// error handling

// console.log("Hi");
// const x = 6;
// // let x = 2;

// try {
//   x = 10;
// } catch (error) {
//   console.log(error.message);
// }

// let firstName = "sona";
// console.log(`My name is ${firstName} rai and roll number is ${x}`);

// const loadPosts = async () => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts"); //
//     const data = await response.json(); //conversion of response from API to json format
//     console.log(data);
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// loadPosts();

// fetching API

const fetchProducts = async () => {
  try {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};
fetchProducts();
