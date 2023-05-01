// 01 - Greet function

function welcomeMsg(name) {
  return "Welcome " + name + "!";
}

var person = "Jane";
console.log(welcomeMsg(person));

var person = "Marc";
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

function addPositive(a, b) {
  if (a < 0) {
    a *= -1;
  }
  if (b < 0) {
    b *= -1;
  }
  result = a + b;
  return result;
}

console.log(addPositive(2, 3));
console.log(addPositive(3, -5));
console.log(addPositive(-1, -8));

// alternative solution
function altAddPositive(a, b) {
  result = Math.abs(a) + Math.abs(b);
  return result;
}
console.log(altAddPositive(2, 3));
console.log(altAddPositive(3, -5));
console.log(altAddPositive(-1, -8));
