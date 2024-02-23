//? hof=>higher order function

// 1.function returning function
// 2.function which accepts another function as argument (e.g map(),filter(),reduce(),find())

// ?pass vayeko function as argument is callback function and function containing function as argument than it is called HOF
// ?2 no. ko e.g
// const getSum = (x, y, printValue) => { //here printValue is callback function and getSum is higher order function
//   const sum = x + y;
//   printValue(sum);
// };

// const printValue = (value) => {
//   console.log(value);
// };

// getSum(2, 3, printValue);//

// ?case 1 ko e.g
// const getSum = (x, y) => {//outer function=getSum()
//   const calculateSum = () => {// internal function =calculateSum()
//     let sum = x + y;

//     return sum;
//   };

//   return calculateSum;// it is returned function by getSum function
// };

// const func=getSum(3,5)
// const result=func()
// console.log(result);
// ?or can be called as below

// const result = getSum(4, 5)(); //calling function in one line
// console.log(result);


// ?closure=>function with it's lexical environment(function should remember the before value)
// ?how array is an object it is because array[key,value]=[index,item]

const obj={//which is object that is
    0:5,
    1:8,
}
// is equivalent to const obj=[5,8] which is an arary