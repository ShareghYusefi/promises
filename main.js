// What is a callback function?
// A callback function is a function that is passed as an argument to another function.

// What is Synchronous and Asyncronous code?
// Synchronous stands for events occureing at the same time. In programming, synchronous code is executed line by line and in order.
// Synchronous code is blocking, meaning that it will block further execution of code until it is done.

// Asynchronous code stands for events occuring at different times. In programming, asynchronous code is executed out of order and can be executed at the same time.
// Asynchronous code is non-blocking, meaning that it will not block further execution of code while it is being executed.
console.log("Before");

// This function gets a user from a database using a callback function.
function getUser(id, callbackFunctionToBeCalled) {
  // Simulate a database call using a setTimeout built in function.
  setTimeout(() => {
    // make a mock database call
    console.log(`Retrieving user with id: ${id}`);
    let user = {
      id: id,
      githubUsername: "ShareghYusefi",
    };
    // once we have our user from the database call, we can provide that to the callback function.
    callbackFunctionToBeCalled(user);
  }, 3000);
}

// a callback function takes the result of an asynchronous operation and does something with it.
// we call the getUser function to get the resulting user object with id 1 abd pass it to the callback function for processing.
getUser(1, (user) => {
  // processing the user object
  console.log(user);
});

console.log("After");
