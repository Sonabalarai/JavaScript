// object=>{key value pair}
// primitive data types
// 1.string
//2. boolean
// 3.number
//4. undefined
//5. null

// Non-primitivr(proper organized form of primitive datatype or collection of primitive data types like we can keep null,boolean,string etc)
// 1)object (complex data structure)

//  syntax let student={} yo object ho

let student = {
  firstName: "sona",
  lastName: "rai",
  college: "everest",
  age: "24",
  address: "ilam",
  isMarried: false,
  height: undefined,
  sport: null, //type object aunxa that is bug
};
// console.log(student);
// console.log(typeof student);

// ?CRUD
// ?Read operator are dot and [ square bracket]
// &&=>ampersand

// console.log(student.age, student.isMarried);
// console.log(student.firstName);
// console.log(student["address"]);
// console.log(student["address"]);
// console.log(student.address);
// console.log(typeof student.sport);

//?Delete Operation

// delete student.firstName;
// console.log(student);

// ?upsert update operation or insert

// student.firstName = "nisha";
// console.log(student);

// ?add operation
// student.country = "Nepal";
// console.log(student);

// ?
const laptopDetails = {
  name: "GF75",
  brand: "MSI",
  ram: 16,
  ssd: 512,
  display: "15.3",
  graphics: "NVIDIA GetForce RTX 3060",
  battery: "51 Whr",
  processor: "i7 10750H",
};
// ?display laptop name with battery capacity
// console.log(`${laptopDetails.name} has ${laptopDetails.battery} battery`);

// ?change ram size to 18 gigs

// laptopDetails.ram = 18; or laptopDetails["ram"]=18
// console.log(`${laptopDetails.ram} gigs`);

// ?add another property called  memoryFrequency with 3200MHz value

// laptopDetails.memoryFrequency = "3200MHZ";
// console.log(laptopDetails);

// ? add another property called weight whose value is 3kg

// laptopDetails.weight = "3kg";
// console.log(laptopDetails);

// ? update ssd size by 300 GB @@@@@@@@@@@@@@@@@@

// laptopDetails.ssd = laptopDetails.ssd + 300;
// console.log(laptopDetails);

// ?2.Create an object named myHouseDetails and add following properties
// ?numberOfRooms
// numberOfMembers
// colorOfHouse
// builtYear
// numberOfStorey

// let myHouseDetails = {
//   numberOfMembers: 6,
//   c: 9,
//   colorOfHouse: "green",
//   builtYear: 2000,
//   numberOfStorey: 5,
// };

// ?A.Delete numberOfMembers property

// delete myHouseDetails.numberOfMembers;
// console.log(myHouseDetails);

// ?B.Update numberOfRooms by new value

// myHouseDetails.numberOfRooms = 12;
// console.log(myHouseDetails);

// ?  C.Add a  new property called estimatedPriceOfHouse

// myHouseDetails.estimatedPriceOfHouse = 3000000;
// console.log(myHouseDetails);

// ?D.Print out all properties on the console like “I have a green coloured house
// ? res.  with 9 rooms where 10 people are  living. The house is 3 storey and was built in 2011 with an estimated budget of 2 cro

// console.log(
//   `i have a ${myHouseDetails.colorOfHouse} with ${myHouseDetails.numberOfRooms} rooms where ${myHouseDetails.numberOfMembers} people are living.The house is ${myHouseDetails.numberOfStorey} and was built in ${myHouseDetails.builtYear} with an estimated budget of ${myHouseDetails.estimatedPriceOfHouse} `
// );

// ?%%%%%%%%%%%%%%%nested object%%%%%%%%%%%%%%%%%

// const studentDetails = {
//   firstName: "sona",
//   lastName: "rai",
//   age: 23,
//   college: "Everest",
//   address: {
//     temporary: "lalitpur",
//     permanent: "ilam",
//   },
// };
// console.log(studentDetails.address.temporary);
// delete studentDetails.address["permanent"];
// console.log(studentDetails);

// studentDetails.address["temporary"] = "Mangalbazar";
// console.log(studentDetails);

//? %%%%%%%%%%%%%%%%%%%%Assignment%%%%%%%%%%%%%%%%%%%%%%%
//? 5. hospital Details
//? add field => name,location,patientCapacity, numberOfBed, numberOfBlock,
//? numberOfDoctor,numberOfNurse

// let hospitalDetails = {
//   name: "BNC",
//   location: "Birtamode",
//   patientCapacity: 3000,
//   numberOfBed: 5000,
//   numberOfBlock: 200,
//   numberOfDoctor: 100,
//   numberOfNurse: 250,
// };
// console.log(hospitalDetails);

// ?delete numberOfBed and numberOfNurse

// delete hospitalDetails.numberOfBed;
// delete hospitalDetails.numberOfNurse;
// console.log(hospitalDetails);

// ?update/upsert numberOfBlock if no then it adds

// hospitalDetails.numberOfBlock = 30;
// console.log(hospitalDetails);

// ?add new field named numberOfAmbulance

// hospitalDetails.numberOfAmbulance = 50;
// console.log(hospitalDetails);

// ?copy the object to new variable named newHospitalDetails
// ?The three dots ... in JavaScript is known as the spread syntax, and it is commonly used to make shallow copies of JavaScript objects.
// ? It does this by taking in an iterable and expanding it into its individual elements.Dec

// let hospitalDetails = {
//   name: "BNC",
//   location: "Birtamode",
//   patientCapacity: 3000,
//   numberOfBed: 5000,
//   numberOfBlock: 200,
//   numberOfDoctor: 100,
//   //   numberOfNurse: 250,
// };

// let newHospitalDetails = { ...hospitalDetails };
// console.log(newHospitalDetails);

// ? print out results like "There is a hospital named ABC with...."
// console.log(
//   `There is a hospital named ${hospitalDetails.name} with ${hospitalDetails.patientCapacity} patient capacity,${hospitalDetails.numberOfBed} number of bed, ${hospitalDetails.numberOfBlock} number of blocks ${hospitalDetails.numberOfDoctor} number of doctor and ${hospitalDetails.numberOfNurse} number of nurses   `
// );

const laptop1 = {
  name: "Mac Book Pro",
  brand: "Apple",
  model: 2023,
  storage: {
    ram: 18,
    ssd: 512,
  },
};
// const laptop2 = laptop1;
// laptop2.name = "windows";
// // console.log(laptop2);
// console.log(laptop1);

// let laptop2 = { ...laptop1 }; //shallow copy const laptop2= labtop1
// console.log(laptop2);

// laptop2.model = 2024; //no change in model of old laptop
// laptop2.storage.ram = 15; // change in old laptop1
// console.log(laptop2);
// console.log(laptop1);

let laptop2 = structuredClone(laptop1); //(deep copy)yesma two object are maded and change in nested object doesnot make chage in 1st object
// console.log(laptop2);
laptop2.model = 2024;
laptop2.storage.ram = 28;
// console.log(laptop2);

console.log(laptop1);
