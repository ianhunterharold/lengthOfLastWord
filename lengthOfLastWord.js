var lengthOfLastWord = function(s) {
  let count = 0; 

  if (!s.length){
    return 0;
  }
  let splitIntoChar = s.split('');

  for (let i = splitIntoChar.length - 1; i >= 0; i--){
    if (splitIntoChar[i] !== ' '){
      count++ 
    }

    if (count >= 1 && splitIntoChar[i] === ' '){
      break;
    }
  }
  return count;
};

const str = 'pizzapie';
lengthOfLastWord(str)
// if last word doesnt exist '' return zero 

//solve as human
// end of string word is defined by a word with a blank space in the front 
// look through the string from the rear to the first blank space, return the count of the number of characters in that space 
// say the length outloud 

// solve as dev
// iterate from the back of the word by one char each iteration 
//have a count 
// if you see a blank space as a char, then return the length 
// if not increase count by 1 andcontinue 