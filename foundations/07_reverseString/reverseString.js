const reverseString = function (string) {
  let newString = "";
  for (let i = -1; i >= -string.length; i--) {
    newString = `${newString}${string.at(i)}`;
  }
  return newString;
};

// Do not edit below this line
module.exports = reverseString;
