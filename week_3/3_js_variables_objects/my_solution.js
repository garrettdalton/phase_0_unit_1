// I worked by myself on this challenge.

// __________________________________________
// Write your code below.
var secretNumber = 1;
var secretNumber = 7;
var password = "string";
var password = "just open the door.";
var allowedIn = true;
var allowedIn = false;
var members = [];
members [0] = "John";
members [3] = "Mary";





// // __________________________________________
// // Reflection: Use the reflection guidelines to write a reflection here. 
// // What parts of your strategy worked? What problems did you face?
// //The strategy was straightforward on this challenge, keep adding to the code so the test code came up true.

// What questions did you have while coding? What resources did you find to help you answer them?
// //It took me a little bit to understand that the test code was just for testing, and that I had to create my own code to have them work.  I thought I was editing the snippets at first.  I solved this problem by taking a minute to break then re reading the instructions.

// What concepts are you having trouble with, or did you just figure something out? If so, what?
// //I didn't have any trouble on this challenge, everything clicked once I realized I had to start my code from scratch.

// Did you learn any new skills or tricks?
// //I learned the reasoning and good techniques to use test code.

// How confident are you with each of the Learning Competencies?
// //100% confident

// Which parts of the challenge did you enjoy?
// //I liked that we started to get into the meat and potatoes of javascript.  Reading about it doesn't always get the syntax ingrained in my head.

// Which parts of the challenge did you find tedious?
// //None
// // 
// 
// 
// 
// 


// __________________________________________
// Test Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

