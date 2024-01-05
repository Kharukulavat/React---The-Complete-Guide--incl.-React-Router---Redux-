const hobbies = ["Sports", "Cooking"];

const user = {
  name: "Nipun",
  age: 20,
};

const newHobbies = ["Reading"];

const mergedHobbies = [...hobbies, ...newHobbies];
console.log(mergedHobbies);
// Output: ['Sports', 'Cooking', 'Reading']

const extendedUser = {
  isAdmin: true,
  ...user,
};
console.log(extendedUser);
// Output: {isAdmin: true, name: 'Nipun', age: 20} 


// Without spread operator
const mergedArrayWithoutSpread = [hobbies, newHobbies];
// Output: [['Sports', 'Cooking'], ['Reading']]

// With spread operator
const mergedArrayWithSpread = [...hobbies, ...newHobbies];
// Output: ['Sports', 'Cooking', 'Reading']

