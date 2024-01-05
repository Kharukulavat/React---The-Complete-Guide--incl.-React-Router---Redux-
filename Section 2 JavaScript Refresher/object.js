const user = {
    name: "Pun",
    age: 20,
    greet() {
      console.log("Hello!");
      console.log(this.age);
    },
  };
  
  console.log(user.name);
  user.greet();
  
  class User {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    greet() {
      console.log("Hi!");
    }
  }
  
  const user1 = new User("Plutonium", 35);
  console.log(user1);
  user1.greet();
  