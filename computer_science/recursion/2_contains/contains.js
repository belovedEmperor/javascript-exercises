const contains = function (input, expected) {
  if (input === expected) return true;
  else if (Number.isNaN(expected) && Number.isNaN(input)) return true;

  if (typeof input === "object" && input !== null) {
    for (const key in input) {
      if (contains(input[key], expected)) return true;
    }
  }
  return false;
};

// Do not edit below this line
module.exports = contains;
