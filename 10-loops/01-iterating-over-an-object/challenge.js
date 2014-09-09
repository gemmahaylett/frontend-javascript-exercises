module.exports.getKeys = function(myObject){
  var propArray = [];
  for (var property in myObject){
    propArray.push(property);
  }

  return propArray;
};

module.exports.getValues = function(myObject){
  var valueArray = [];
  for (var property in myObject){
    valueArray.push(myObject[property]);
  }

  return valueArray;
};

module.exports.objectToArray = function(myObject){
  var stringArray = [];
  for (var property in myObject){
    stringArray.push(property + " is " + myObject[property]);
  }

  return stringArray;

};