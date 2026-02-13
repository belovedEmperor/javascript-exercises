const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (numbers) {
  if (numbers.length === 0) return 0;
  return numbers.reduce((sum, element) => sum + element);
};

const multiply = function (numbers) {
  if (numbers.length === 0) return 0;
  return numbers.reduce((sum, element) => sum * element);
};

const power = function (base, exponent) {
  return base ** exponent;
};

const factorial = function (number) {
  if (number === 0) return 1;
  let total = number;
  for (let currentNumber = number - 1; currentNumber > 0; currentNumber--) {
    total *= currentNumber;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
