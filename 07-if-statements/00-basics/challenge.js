module.exports.favoriteNumber = function(favNum, guess) {
  if (guess > favNum) {
    return "Too high";
  }
  else if (guess < favNum) {
    return "Too low";
  }
  else { 
    return "You got it!";
  }
};

module.exports.checkLock = function(num1, num2, num3, num4) {
  var answer1 = false;
  var answer2 = false;
  var answer3 = false;
  var answer4 = false;

  if ((num1 === 3) || (num1 === 5) || (num1 === 7)) {
    answer1 = true;
  }
  
  if (num2 === 2) {
    answer2 = true;
  }
  
  if ((num3 >= 5) && (num3 <= 100)) {
    answer3 = true;
  }
  
  if ((num4 < 9) || (num4 > 20)) {
    answer4 = true;
  }

  if (answer1 && answer2 && answer3 && answer4){
    return 'correct';
  }
  else {
    return 'incorrect';
  }
};

module.exports.canIGet = function(item, money){

  var answer = false;
 
  if((money >= 999) && (item === 'MacBook Air')){
    answer = true;
  }
  else if((money >= 1299) && (item ==='MacBook Pro')){
    answer = true;
  }
  else if((money >= 2499) && (item === 'Mac Pro')){
    answer = true;
  }
  else if((money >= 1) && (item === 'Apple Sticker')){
    answer = true;
  }
  else{
    answer = false;
  }

  return answer;
};