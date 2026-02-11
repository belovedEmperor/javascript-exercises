const removeFromArray = function (array, toBeRemoved) {
  const args = Array.from(arguments);
  for (let i = 1; i < arguments.length; i++) {
    const isToBeRemoved = (element) => element === args[i];
    const index = array.findIndex(isToBeRemoved);
    if (index !== -1) array.splice(index, 1);
    if (array.findIndex(isToBeRemoved) !== -1) {
      removeFromArray(array, args[i]);
    }
  }
  console.log(array);
  return array;
};

// I did this in an extremely overkill way.
// Just this would have worked.
// const removeFromArray = function (array, ...args) {
//   return array.filter((item) => !args.includes(item));
// };

// Do not edit below this line
module.exports = removeFromArray;
