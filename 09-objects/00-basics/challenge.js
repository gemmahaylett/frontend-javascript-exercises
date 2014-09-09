module.exports.createCourse = function(courseTitle, courseDuration, courseStudents){
  var course = {
    title : courseTitle,
    duration: courseDuration,
    students: courseStudents
  };

  return course;
};

module.exports.addProperty = function(myObj, newProp, newValue){

  if(myObj[newProp] === undefined){
    myObj[newProp] = newValue;
    return myObj;
  }
  else{
    return myObj;
  }
};

module.exports.formLetter = function(letter){
  var text = "Hello " + letter.recipient +',\n\n' + letter.msg + '\n\nSincerely,\n' + letter.sender;
  return text;
};

module.exports.canIGet = function(item, money){
  var store = {
    "MacBook Air" : 999 ,
    "MacBook Pro" : 1299 ,
    "Mac Pro" : 2499 ,
    "Apple Sticker" : 1
  };

  return store[item] <= money;
};
