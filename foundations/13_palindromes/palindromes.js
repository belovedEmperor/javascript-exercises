const palindromes = function (str) {
  let palindrome = str.replaceAll(" ", "");
  palindrome = palindrome.replaceAll(".", "");
  palindrome = palindrome.replaceAll("''", "");
  palindrome = palindrome.replaceAll('"', "");
  palindrome = palindrome.replaceAll(",", "");
  palindrome = palindrome.replaceAll("!", "");
  palindrome = palindrome.toLowerCase();

  let splitPalindrome = [];
  if (palindrome.length % 2 === 1) {
    splitPalindrome.push(palindrome.slice(0, palindrome.length / 2));
    splitPalindrome.push(
      palindrome.slice(palindrome.length / 2 + 1, palindrome.length),
    );
  } else {
    splitPalindrome.push(palindrome.slice(0, palindrome.length / 2));
    splitPalindrome.push(
      palindrome.slice(palindrome.length / 2, palindrome.length),
    );
  }
  console.log(
    splitPalindrome[0].split("").reverse().join("") === splitPalindrome[1],
  );

  if (splitPalindrome[0].split("").reverse().join("") === splitPalindrome[1])
    return true;
  return false;
};

palindromes("racecar");

// Do not edit below this line
module.exports = palindromes;
