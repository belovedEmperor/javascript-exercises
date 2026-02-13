const fibonacci = function (number) {
  number = Number(number);
  if (number < 0) return "OOPS";
  if (isNaN(Number(number))) return "OOPS";
  if (number === 0) return 0;
  if (number === 1 || number === 2) return 1;
  let numbers = [1, 1];

  for (let i = 1; i < number; i++) {
    numbers.push(numbers[i - 1] + numbers[i]);
    console.log(numbers);
  }
  return numbers[number - 1];
};

// Do not edit below this line
module.exports = fibonacci;
