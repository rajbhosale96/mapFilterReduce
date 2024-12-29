// even numbers [1, 2, 3, 4, 5] => [2, 4]
const isEven = number => number % 2 === 0;

const filterEvenNumbers = function (numbers) {
  return numbers.filter(isEven);
};

// numbers greater than 10 [5, 12, 7, 18, 3] => [12, 18]
const filterNumbersGreaterThanTen = numbers => numbers.filter(number =>
  number > 10);