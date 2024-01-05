const [firstName, lastName] = ["Nipun", "Kharuehapaisarn"];
// const firstName = userNameData[0];
// const lastName = userNameData[1];

console.log(firstName);
console.log(lastName);

// const user = {
//   name: "Nipun",
//   age: 20,
// };

const { name: userName, age } = {
  name: "Nipun",
  age: 20,
};

console.log(userName);
console.log(age);