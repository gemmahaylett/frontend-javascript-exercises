module.exports.sumNumbers = function(numArray){
  var sum = 0;
  for(var i = 0; i < numArray.length; i += 1){
    sum = sum + numArray[i];
  }
  return sum;
};

module.exports.splitAndLowerCaseString = function(inputString){
  var newArray = []
  if (inputString.indexOf(',') > 0){
    newArray = inputString.split(",");
  }
  else{
    newArray = inputString.split();
  }
  
  for(var i = 0; i < newArray.length; i += 1){
    newArray[i] = newArray[i].toLowerCase();
  }

  return newArray;
};

module.exports.addIndex = function(myArray){
  var newArray = [];
  for(var i = 0; i < myArray.length; i+= 1){
    newArray[i] = i + " is " + myArray[i];
  }

  return newArray;
};
