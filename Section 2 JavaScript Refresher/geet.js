function greet() {
    console.log("Hello");
  }
  
  greet();
  
  function createGreeting(userName, message) {
    //   console.log(userName);
    //   console.log(message);
    return "Hi, I am " + userName + "." + message;
  }
  
  // createGreeting("Mix", "Hello");
  
  const greeting1 = createGreeting("Mix");
  console.log(greeting1);
  
  // createGreeting("Nipun", "Yo, what's up?");
  const greeting2 = createGreeting("Nipun", "Yo, what's up?");
  console.log(greeting2);