const getTheTitles = function (books) {
  let titlesList = [];
  for (const book of books) {
    titlesList.push(book.title);
  }
  return titlesList;
};

// Do not edit below this line
module.exports = getTheTitles;
