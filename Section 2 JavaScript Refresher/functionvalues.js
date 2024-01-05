// Using setTimeout with an anonymous function
setTimeout(function() {
    console.log("Timed out");
}, 2000);

// Using setTimeout with a named function
function handleTimeout() {
    console.log("Timed out");
}
setTimeout(handleTimeout, 2000);

// Using setTimeout with an arrow function
const handleTimeout2 = () => {
    console.log("Timed out");
};
setTimeout(handleTimeout2, 2000);

// Creating a function that accepts another function
function greeter(greetFn) {
    greetFn(); // Execute the function received as a parameter
}

// Passing an arrow function to the greeter function
greeter(() => {
    console.log("Hi");
});


//Defining Functions Inside Of Functions

// Defining a function 'init'
const init = () => {
    // Defining a function 'greet' inside 'init'
    const greet = () => {
      console.log('Hi');
    };
  
    // Executing the 'greet' function inside 'init'
    greet();
  };
  
  // Executing the 'init' function
  init();