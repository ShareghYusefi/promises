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

// What is a Promise?
// A promise is an object that represents the eventual completion (or failure) of an asynchronous operation.
// a promise can be in one of three states: pending, fulfilled, or rejected.
// a new promise starts off in a pending state. It can then transition to a fulfilled state if the operation is successful, or to a rejected state if the operation fails.

console.log("Before Promise");

// get user function that returns a promise object.
function getUserPromise(id) {
  // return a new promise object
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // make a mock database call
      console.log(`Retrieving user with id: ${id}`);
      let user = {
        id: id,
        githubUsername: "ElonMusk",
      };
      if (user) {
        // if the user is found, resolve (fulfill) the promise with the user object value.
        resolve(user);
      } else {
        // if the user is not found, reject the promise with an error object containing a message.
        reject(new Error("User not found"));
      }
    }, 3000);
  });
}

// .then method is used to handle the resolved value of a promise.
// .catch method is used to handle the rejected value of a promise.
getUserPromise(2)
  .then((user) => {
    // this is the fullfilled state
    console.log("User: ", user);
  })
  .catch((error) => {
    // this is the rejected state
    console.log("Error: ", error);
  });

console.log("After Promise");

// Async and Await
// Async and Await are a modern way to handle asynchronous code in JavaScript.
// Async functions are functions that return a promise.

console.log("Before Async/Await");

// async keyword is used to define an async function.
async function getUserAsync(id) {
  // reutrn a promise object
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // make a mock database call
      console.log(`Retrieving user with id: ${id}`);
      let user = {
        id: id,
        githubUsername: "ElonMusk",
      };
      if (user) {
        // if the user is found, resolve (fulfill) the promise with the user object value.
        resolve(user);
      } else {
        // if the user is not found, reject the promise with an error object containing a message.
        reject(new Error("User not found"));
      }
    }, 3000);
  });
}

//1. traditional way to access result of promise object
getUserAsync(4)
  .then((user) => {
    console.log("User: ", user);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });

//2. more modern way of accessing the result of a promise object.
// display user object using async/await
async function displayUser(id) {
  // try block replaces the .then method
  try {
    // await keyword if used to wait for the result of a resolved promise.
    const user = await getUserAsync(id); // this part replaces the .then methods callback function.
    console.log("User: ", user);
  } catch (error) {
    // catch block replaces the .catch method
    console.log("Error: ", error);
  }
}

displayUser(3);

console.log("After Async/Await");
