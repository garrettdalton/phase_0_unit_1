
// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}



// __________________________________________
// Write your code below.
var adam = {
};
adam.name = "adam";
terah.spouse = adam;
terah.weight = 125;
delete terah.eyeColor;
adam.spouse = terah;
terah.children = {};
terah.children.carson = { name : "Carson"};
terah.children.carter = { name : "Carter"};
terah.children.colton = { name : "Colton"};
adam.children = terah.children;

//final terah object
 console.log(terah)
{ name: 'Terah',
  age: 32,
  height: 66,
  weight: 125,
  hairColor: 'brown',
  spouse: 
   { name: 'Adam',
     spouse: [Circular],
     children: { carson: [Object], carter: [Object], colton: [Object] } },
  children: 
   { carson: { name: 'Carson' },
     carter: { name: 'Carter' },
     colton: { name: 'Colton' } } }






// __________________________________________
// Reflection: Use the reflection guidelines
// What parts of your strategy worked? What problems did you face?
// My strategy for this exercise was to go through each of the test code lines and try to directly solve those problems written in the strings. 
// Using the terminal, I would then repeated test that code until the test came out true, and then copied that code to the solution file.

// What questions did you have while coding? What resources did you find to help you answer them?
// It took me a little bit to figure out how to make new objects within an object variable.  I used the intro to javascript at the beginning of this phase to figure it out.

// What concepts are you having trouble with, or did you just figure something out? If so, what?
// At first I was treating object literals as if they were a weird type of class.  I figured out eventually that a literal is making an object while skipping the class middleman.

// Did you learn any new skills or tricks?
// how to delete and add new variables to previously made objects.

// How confident are you with each of the Learning Competencies?
// very!

// Which parts of the challenge did you enjoy?
// Yet again I loved getting into the code and just going for it.  It is so refreshing to get the answers right!

// Which parts of the challenge did you find tedious?
// Copying the test code into the terminal messed me up once or twice.
// 
// 
// 
// 
// 


// __________________________________________
// Driver Code:  Do not alter code below this line.
function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)