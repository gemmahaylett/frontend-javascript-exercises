module.exports.copy = function(myObject){
  var newObject = {};
  for( var property in myObject ){
    newObject[property] = myObject[property];
  }
  return newObject;
};

module.exports.extend = function(des, src){
  for(var property in src ){
    des[property] = src[property];
  }
  return des;
};

module.exports.hasElems = function(myObject, myArray){

  for(var n in myArray){
    if(!(myArray[n] in myObject)){
      return false;
    };
  }

  return true
};