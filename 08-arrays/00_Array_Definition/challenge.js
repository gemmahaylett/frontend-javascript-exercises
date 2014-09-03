module.exports.newArray = function(num1, num2, num3, num4){
  var numbers = [num1, num2, num3, num4];
  return numbers;
};

module.exports.firstAndLast = function(array){
  var firstLastArray = [];
  firstLastArray.push(array[0]);
  firstLastArray.push(array[array.length-1]);
  return firstLastArray;
};