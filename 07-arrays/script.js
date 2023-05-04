//
// 01- removeItem function

/*Implement a removeItem function.

 The first parameter is an array.
 The second parameter is a number. It's the non-zero-based index of the item that should get deleted.
 Remove the item and return an array.
 Ensure that the original array was not mutated.*/

function removeItem(array, number) {
  // copy array-values into new array
  const arrayCopy = [];
  for (let i = 0; i < array.length; i++) {
    arrayCopy[i] = array[i];
  }
  // remove item at index number from copied array
  arrayCopy.splice(number - 1, 1);
  // return mutated copied array
  return arrayCopy;
}

// Testing
const ainmals = ["Dog", "Cat", "Lion"];
console.log(removeItem(ainmals, 1));
// result should be: ["Cat", "Lion"]
console.log(ainmals);
// result should be still: ["Dog", "Cat", "Lion"]

const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];
console.log(removeItem(fruits, 3));
// result should be: ["Watermelon", "Banana", "Kiwi", "Pineapple", "Apple"]
console.log(fruits);
// result should be still: ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"]

//
// 03 - sumOfCharacters function

/*Implement a sumOfCharacters function.

 The function has one parameter, which is an array.
 Check the type of each array entry. If it's a string then store the count of characters.
 The function returns the total sum of all characters.*/

function sumOfCharacters(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "string") {
      count += array[i].length;
    }
  }
  return count;
}

// Testing

const arr1 = ["Luke", "Anakin", true, "Obi Wan", 333];
console.log(sumOfCharacters(arr1));
// result should be: 17

const arr2 = [
  "Code is",
  "like humor",
  ".",
  "When you have",
  "to explain it, it's bad!",
];
console.log(sumOfCharacters(arr2));
// result should be: 55
