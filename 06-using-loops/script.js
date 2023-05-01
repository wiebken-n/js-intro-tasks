// 06 - using loops

/* 01 - oddNumbers function
Implement an oddNumbers function.

 The function has two parameters, both are numbers.
 Iterate over all numbers between first number and the second number.
 Store all oddNumbers in string, seperated by a comma and return the string.
 Allowed are only positive numbers, add a check. */

function oddNumbers(numberOne, numberTwo) {
  let oddNumberstring = "";
  if (numberOne < 0 || numberTwo < 0) {
    return "Invalid input";
  } else {
    if (numberOne < numberTwo) {
      for (i = numberOne; i <= numberTwo; i++) {
        if (i % 2 != 0) {
          oddNumberstring += i;
          if (i === numberTwo) {
            continue;
          } else {
            oddNumberstring += ", ";
          }
        }
      }
      // iterate over numbers and return odd numbers
    } else {
      for (i = numberTwo; i <= numberOne; i++) {
        if (i % 2 != 0) {
          oddNumberstring += i;
          if (i === numberTwo) {
            continue;
          } else {
            oddNumberstring += ", ";
          }
        }
      }
      // iterate over numbers and return odd numbers
    }
    return oddNumberstring;
  }
}

console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11

// check if invalid input is handled correctly
console.log(oddNumbers(-2, -5));

//
//
// 02 - charCount function

/*The function has a first parameter for a word which is a string.
 *The function has a second parameter which contains the character to search for which is a string.
 *Check if the second parameter consists of only one character, if not, quit the function.
 *The function returns the number of times the character from the second parameter is present in the word.
 *The function should be case insensitive. */

function charCount(word, character) {
  if (character.length > 1) {
    return "Invalid input";
  } else {
    let count = 0;
    word = word.toUpperCase();
    character = character.toUpperCase();
    for (let i = 0; i < word.length; i++) {
      if (word[i] === character) {
        count += 1;
      }
    }
    return count;
  }
}

// check if invalid input message works
console.log(charCount("hello", "ll"));

console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3

// check if invalid input message works
console.log(charCount("hello", "ll"));
