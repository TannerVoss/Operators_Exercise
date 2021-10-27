console.log("Hello World!\n==========\n");
console.log(
    "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
console.log("EXERCISE 1:\n==========\n");

let a = 20;
let b = 4;
let add = a + b; // could be considered "sum"
let minus = a - b; // could be considered "difference"
let multiply = a * b; // "product"
let dividing = a / b; // "quotient"

console.log(add)
console.log(minus)
console.log(multiply)
console.log(dividing)

console.log(add, minus, multiply, dividing)


// YOUR CODE HERE

// Exercise 2
console.log("EXERCISE 2:\n==========\n");

let a1 = 11;
let str = "11";
let str2 = "eleven";
let isPresent = true;
let firstName = "Jackie";
let lastName = "Chan";

console.log("what is the value of a1 + str");

let a1PlusStr = a1 + str;
console.log(a1PlusStr);

console.log("\n==========\n")

console.log("what is the value of a1 + str2");
let a1PlusStr2 = a1 + str2;
console.log(a1PlusStr2);

console.log("\n==========\n")

console.log("what is the value of a1 + isPresent");
let a1PlusIsPresent = a1 + isPresent;
console.log(a1PlusIsPresent)

console.log("\n==========\n")

console.log("what is the value of a1 + firstName");
let a1PlusfirstName = a1 + firstName;
console.log(a1PlusfirstName)

console.log("\n==========\n")


console.log("what is the value of a1 + lastName");
let a1PluslastName = a1 + lastName;
console.log(a1PluslastName)

console.log("\n==========\n")





// YOUR CODE HERE

// Exercise 3
console.log("EXERCISE 3:\n==========\n");

let d = 5;
let str3 = "5";
let str4 = "five";
let isPresent2 = false;
let firstName2 = "Robin";
let lastName2 = "Williams";

console.log("What is the value of: d == str3?");
let question1 = d == str3; //true
console.log(question1);

console.log("\n==========\n")
console.log("What is the value of: d === str3?");
let question2 = d === str3; // false
console.log()

console.log("\n==========\n")
console.log("What is the value of: !isPresent2?");
let question3 = !isPresent2; // true
console.log()

console.log("\n==========\n")
console.log("What is the value of: (“eleven” == str4 && d >= str3)?");
let question4 = "eleven" == str4 && d >= str3;
console.log()

console.log("\n==========\n")
console.log("What is the value of: (!isPresent2 || isPresent2)?");
let question5 = !isPresent2 || isPresent2;
console.log(question5)

console.log("\n==========\n")
console.log("What is the value of: 0 == false?");
let question6 = 0 == false; // true becuase 0 is falsy (type coercion)
console.log(question6)

console.log("\n==========\n")
console.log("What is the value of: 0 === false?");
let question7 = 0 === false;
console.log(question7)

console.log("\n==========\n")
console.log("What is the value of: 0 != false?");
let question8 = 0 != false;
console.log(question8)

console.log("\n==========\n")
console.log("What is the value of 0 !== false?");
let question9 = 0 !== false;
console.log(question9)

// YOUR CODE HERE