module.exports.stream = function(conditionalFn, actionFn){
  while(conditionalFn()){
    actionFn();
  }
};

module.exports.sumNumbers = function(numArray){
  var i = 0;
  sum = 0;
  while (i < numArray.length){
    sum += numArray[i];
    i += 1;
  }
  return sum;
};

