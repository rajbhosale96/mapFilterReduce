// squares of [1, 2, 3] => [1, 4, 9]
const squaresOf = function (numbers) {
  return numbers.map(number => Math.pow(number, 2));
};

// lengths of ["apple", "banana", "kiwi"] => [5, 6, 4]
const lengthsOf = function (strings) {
  return strings.map(string => string.length);
};

// uppercase of ["hello", "world"] => ["HELLO", "WORLD"]
const uppercaseOf = function (strings) {
  return strings.map(string => string.toUpperCase());
};

// first characters of ["apple", "banana", "kiwi"] => ["a", "b", "k"]
const firstCharactersOf = function (strings) {
  return strings.map(string => string.charAt(0));
};

// truth values of [0, 1, 2, 3] => [false, true, true, true]
// Assume non-zero numbers are true, and zero is false
const truthValuesOf = function (numbers) {
  return numbers.map(number => Boolean(number));
};

// reverse strings of ["hello", "world"] => ["olleh", "dlrow"]
const reverse = (element => element.reverse().join(""));

const reversedStringsOf = function (strings) {
  return strings.map(element => reverse([...element]));
};

// double letters of ["cat", "dog", "bat"] => ["ccaatt", "ddoogg", "bbaatt"]

const repeat = (element, times) => element.repeat(times);

const doubleEachLetter = function (string) {
  return [...string].map(char => repeat(char, 2)).join("");
};

const doubleLettersOf = function (strings) {
  return strings.map(doubleEachLetter);
};

// boolean negation of [true, false, true] => [false, true, false]
const negatedBooleansOf = function (booleans) {
  return booleans.map(boolean => !boolean);
};

// character codes of ["a", "b", "c"] => [97, 98, 99]
// Use the `charCodeAt` method on each string
const charCodesOf = function (strings) {
  return strings.map(char => char.charCodeAt());
};

// extract domain names from ["user1@gmail.com", "admin@yahoo.com"] => ["gmail.com", "yahoo.com"]
const domainNamesOf = function (emails) {
  return emails.map(email => email.split("@")[1]);
};

// split words in ["hello world", "goodbye moon"] => [["hello", "world"], ["goodbye", "moon"]]
const splitWordsOf = function (strings) {
  return strings.map(element => element.split(" "));
};

// join arrays of [["a", "b"], ["c", "d"]] => ["ab", "cd"]
const joinedArraysOf = function (arrayOfArrays) {
  return arrayOfArrays.map(array => array.join(""));
};

// repeat strings in ["hi", "bye"] => ["hihi", "byebye"]
const repeatedStringsOf = function (strings) {
  return strings.map(element => element.repeat(2));
};

// count vowels in ["apple", "banana", "grape"] => [2, 3, 2]
const isVowel = char => "aeiou".includes(char.toLowerCase());

const getVowelCount = function (vowelCount, char) {
  return isVowel(char) ? vowelCount + 1 : vowelCount;
};

const countVowels = (element => [...element].reduce(getVowelCount, 0));

const countVowelsOf = (strings => strings.map(countVowels));

// reverse arrays of [[1, 2, 3], [4, 5, 6]] => [[3, 2, 1], [6, 5, 4]]
const reversedArraysOf = function (arrays) {
  return arrays.map(elements => elements.reverse());
};

// remove vowels from ["apple", "banana", "grape"] => ["ppl", "bnn", "grp"]
const invert = function (f) {
  return function (...args) {
    return !f(...args);
  };
};

const isNotVowel = invert(isVowel);

const withoutVowelsOf = function (strings) {
  return strings.map(function (element) {
    return [...element].filter(isNotVowel).join("");
  });
};

// reverse words in ["hello world", "goodbye moon"] => ["olleh dlrow", "eybdoog noom"]
const reversedWordsOf = (strings => strings.map(element =>
  reversedStringsOf(element.split(" "))));

// extract unique characters from ["apple", "banana", "grape"] => ["apl", "ban", "gra"]
// Maintain the order of their first appearance in each string
const accumulateThreeUniqueChars = function (string, char) {
  if (string.length < 3 && !string.includes(char)) {
    string += char;
  }

  return string;
};

const extractThreeUniqueChars = function (element) {
  return [...element].reduce(accumulateThreeUniqueChars, "");
};

const uniqueCharactersOf = function (strings) {
  return strings.map(extractThreeUniqueChars);
};