function isPalindrome(word) {
  for(let index = 0; index < word.length / 2; index++){
    if(word[index] !== word[word.length - 1 - index]){
      return false
    }
  }

  return true
}

/* 
  Add your pseudocode here
  
  function isPalindrome(word) {
    for(initialize counter; counter < length of word string / 2; counter++){
      if(current letter is not equal to word (n - counter)th letter){
        return false
      }
    }
    
    if we made it this far, the word is a palindrome, so we should return true...
    return true
  }
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("noon"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("keep"));

  console.log("");
}

module.exports = isPalindrome;
