const factorial = function (number) {
  if (typeof number !== "number" || number < 0 || String(number).includes("."))
    return undefined;
  if (number === 0) return 1;

  return factorial(number - 1) * number;
};

// Do not edit below this line
module.exports = factorial;

