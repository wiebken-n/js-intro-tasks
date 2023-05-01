// 01 - Greet function

function welcomeMsg(name) {
  return "Welcome " + name + "!";
}

let person = "Jane";
console.log(welcomeMsg(person));

person = "Marc";
console.log(welcomeMsg(person));

//
// 02 - Gross price function

function calcGrossPrice(netPrice, taxRate) {
  grossPrice = (netPrice * (taxRate + 1)).toFixed(1);
  return grossPrice;
}

console.log(calcGrossPrice(20, 0.19));

console.log(calcGrossPrice(40, 0.16));

//
// 03 - Add positive function

function addPositive(NumberOne, NumberTwo) {
  if (NumberOne < 0) {
    NumberOne *= -1;
  }
  if (NumberTwo < 0) {
    NumberTwo *= -1;
  }
  result = NumberOne + NumberTwo;
  return result;
}

console.log(addPositive(2, 3));
console.log(addPositive(3, -5));
console.log(addPositive(-1, -8));

// alternative solution
function altAddPositive(NumberOne, NumberTwo) {
  result = Math.abs(NumberOne) + Math.abs(NumberTwo);
  return result;
}
console.log(altAddPositive(2, 3));
console.log(altAddPositive(3, -5));
console.log(altAddPositive(-1, -8));
