// 01 - Spot the errors and fix them

let userName = "Brad";
userName = "Jenna";

function getUserNameLength(name) {
  return (result = name.length);
}

console.log(getUserNameLength(userName) > 4);
// ^______________ Should log true

//
// 02 - isString function

//Implement a isString function.

/*The function has one parameter which could be any kind of data type
 The function is written as a function expression
 The function returns a boolean. It returns only true, when the data type is a string otherwise it will return false
 */

function isString(isItAStringQuestionmark) {
  return typeof isItAStringQuestionmark === "string";
}
// test function calls
console.log(isString("a string"));
console.log(isString(5));

console.log(isString("Hello"));
// result should be true

console.log(isString(3));
// result should be false

console.log(isString(undefined));
// result should be false

console.log(isString(""));
// result should be true

console.log(isString("John" + "Doe"));
// result should be true
