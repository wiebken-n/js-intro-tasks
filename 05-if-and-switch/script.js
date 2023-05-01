// 01 - Spot the errors and fix them

const size = 25;
let result;
// solution option 1
if (size > 10 && size <= 20) {
  result = "Greater than 10";
} else if (size > 20) {
  result = "Greater than 20";
} else {
  result = "Lower than 10";
}
console.log(result);
// Returns Greater than 10 but should return Greater than 20

// solution option 2
if (size > 20) {
  result = "Greater than 20";
} else if (size > 10) {
  result = "Greater than 10";
} else {
  result = "Lower than 10";
}
console.log(result);

//
// 02 - oddEven function
/*
Implement a oddEven function.
 The function has one parameter which is a number
 If the number is an even number, the function returns the string even
 If the number is an odd number, the function returns the string odd */

function oddEven(number) {
  if (number % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
console.log(oddEven(4));
// result should be even
console.log(oddEven(3));
// result should be odd
console.log(oddEven(-1));
// result should be odd
console.log(oddEven(10));
// result should be even

//
// 03 - oldYoung function

/* Implement an oldYoung function.
 The function has one parameter which is a number
 If the number is less than 16, return "children"
 If the number is less than 50, return "young person"
 Otherwise return "elder person"
 If the number is not a number or a negative number a string invalid parameter */

function oldYoung(number) {
  if (typeof number !== "number" || number < 0) {
    return "invalid parameter";
  }
  if (number < 16) {
    return "child";
  } else if (number < 50) {
    return "young person";
  } else {
    return "elder person";
  }
}

console.log(oldYoung(27));
// result should be young person
console.log(oldYoung(6));
// result should be children
console.log(oldYoung(-1));
// result should be invalid parameter
console.log(oldYoung(86));
// result should be elder person
