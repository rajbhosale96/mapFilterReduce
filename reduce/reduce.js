// sumOf([1, 2, 3, 4]) => 10
const add = (num1, num2) => num1 + num2;
const sumOf = (numbers => numbers.reduce(add, 0));

// productOf([1, 2, 3, 4]) => 24
const multiply = (num1, num2) => num1 * num2;
const productOf = numbers => numbers.reduce(multiply, 1);

// averageOf([1, 2, 3, 4, 5]) => 3
const averageOf = function (numbers) {
  return sumOf(numbers) / numbers.length;
};

// minOf([3, 1, 4, 1, 5, 9, 2]) => 1
const min = (num1, num2) => Math.min(num1, num2);
const minOf = (numbers) => numbers.reduce(min, Infinity);

// maxOf([3, 1, 4, 1, 5, 9, 2]) => 9
const max = (num1, num2) => Math.max(num1, num2);
const maxOf = (numbers => numbers.reduce(max, -Infinity));

// sumPositiveNumbers([1, -2, 3, -4]) => 4
const isPositive = (number => number > 0);

const sumPositiveNumbers = function (numbers) {
  return sumOf(numbers.filter(isPositive));
};

// sumOfSquares([1, 2, 3, 4]) => 30
const squares = (number => Math.pow(number, 2));

const sumOfSquares = function (numbers) {
  const squaresOfNumbers = numbers.map(squares);
  return sumOf(squaresOfNumbers);
};

// sumOfOddNumbers([1, 2, 3, 4, 5]) => 9
const isOdd = (number => number % 2 !== 0);

const sumOfOddNumbers = function (numbers) {
  const oddNumbers = numbers.filter(isOdd);
  return sumOf(oddNumbers);
};

// countNegativeNumbers([1, -2, 3, -4]) => 2
const invert = function (f) {
  return function (...args) {
    return !f(...args);
  };
};

const isNegative = invert(isPositive);

const countNegativeNumbers = function (numbers) {
  return numbers.filter(isNegative).length;
};

// findSumOfEvenSquares([1, 2, 3, 4]) => 20
const findSumOfEvenSquares = function (numbers) {
  const isEven = invert(isOdd);
  const evenNumbers = numbers.filter(isEven);
  return sumOfSquares(evenNumbers);
};

// concatenateWords(["hello", "world"]) => "helloworld"
const concatenateWords = function (words) {
  return words.reduce((appendedWords, word) => appendedWords + word, "");
};

// longestWord(["apple", "banana", "cherry", "kiwi"]) => "banana"
const findLongestString = (string1, string2) => {
  return string1.length >= string2.length ? string1 : string2;
};

const longestWord = (words) => words.reduce(findLongestString, words[0]);

// shortestWord(["apple", "banana", "cherry", "kiwi" ""]) => "kiwi"
const findShortestString = (s1, s2) =>
  s1.length <= s2.length ? s1 : s2;

const shortestWord = (words) => words.reduce(findShortestString, words[0]);

// joinWithComma(["apple", "banana", "cherry"]) => "apple,banana,cherry"
// const joinWithComma = (words) => words.join(",");
const concatWith = (char) => (string, word) => string.concat(char, word);
const joinWithComma = (words) => words.reduce(concatWith(","));

// reverseWords(["hello", "world"]) => "world hello"
// const reverseWords = (words) => words.reverse().join(" ");

const reverseWords = (words) => words.reduce((string, word) =>
  word.concat(" ", string));

// joinWordsWithSpace(["apple", "banana", "cherry"]) => "apple banana cherry"
const joinWordsWithSpace = (words) => words.reduce(concatWith(" "));

// concatenateNames(["John", "Jane", "Doe"]) => "JohnJaneDoe"
const concatenateNames = (words) => words.reduce(concatWith(""), "");

// vowelsInWords(["hello", "world"]) => "eoo"
const isVowel = char => "aeiou".includes(char.toLowerCase());

const getVowels = function (vowels, char) {
  return isVowel(char) ? vowels + char : vowels;
};

const countVowelsInWords = function (words) {
  const concatenatedWords = concatenateNames(words);
  return [...concatenatedWords].reduce(getVowels, "");
};

// makeCamelCase(["hello", "world", "how", "are", "you"]) => "helloWorldHowAreYou"
const makeCamelCase = function (words) {
};

// reverseString(["apple", "banana", "cherry"]) => "elppaananabyrrehc"
const reverse = ((reversedString, element) => {
  return reversedString + [...element].reverse().join("");
});

const reverseString = words => words.reduce(reverse, "");


// duplicateNumbers([1, 2, 3]) => [1, 1, 2, 2, 3, 3]
const duplicate = ((duplicateNumbersList, number) => {
  duplicateNumbersList.push(number, number);
  return duplicateNumbersList;
}
);
const duplicateNumbers = numbers => numbers.reduce(duplicate, []);

// concatenateArrays([[1, 2], [3, 4], [5, 6]]) => [1, 2, 3, 4, 5, 6]
const concatArray = (array, elements) => (elements.concat(array));

const concatenateArrays = (arrays) => (arrays.reduce(concatArray, []));

// flattenArray([[1, 2], [3, 4], [5, 6]]) => [1, 2, 3, 4, 5, 6]
const flattenArray = (arrays) => (arrays.reduce(concatArray, []));

// uniqueNumbers([1, 2, 2, 3, 4, 4, 5]) => [1, 2, 3, 4, 5]

const removeDuplicates = (array, number) => {
  if (!array.includes(number)) {
    array.push(number);
  }
  return array;
};

const uniqueNumbers = (numbers) => (numbers.reduce(removeDuplicates, []));
