const hobbies = ["sports", "Cooking", "Reading"];
console.log(hobbies[0]);

hobbies.push("Working");
console.log(hobbies);

hobbies.findIndex((item) => {
  return item === "Sports";
});

//simplified shortest
const index = hobbies.findIndex((item) => item === "Sports");
console.log(index);

// const editedHobbies = hobbies.map((item) => item + "!");
// console.log(editedHobbies);

const editedHobbies = hobbies.map((item) => ({ text: item }));
console.log(editedHobbies);