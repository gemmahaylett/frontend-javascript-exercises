module.exports.addItem = function(item, array){

  if(array.indexOf(item) < 0){
    array.push(item);
  }

  return array;
};

module.exports.reverseSortedList = function(array){
  return array.sort().reverse();
};