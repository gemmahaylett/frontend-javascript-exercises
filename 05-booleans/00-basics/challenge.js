module.exports.equalStrings = function(stringOne, stringTwo) {
  return stringOne === stringTwo;
};

module.exports.notEqual = function(one, two) {
  return !(one === two);
};

module.exports.inBetween = function(lower, middle, upper) {
  return (lower < middle) && (middle < upper);
};

module.exports.outsideRanges = function(number) {
  condition1 = (number < 10) || (number > 20);
  condition2 = (number <= 42) || (number > 75);
  condition3 = (number <= 1) || (number >= 6);

  return condition1 && condition2 && condition3;
};

module.exports.nameAndPrice = function(name, price) {
  return ((name === 'NYTimes') || (name === 'LATimes')) && (price >= 1);
};