var validPalindrome = function(s) {
  let deleted = false;
  const isParlindrome = function(str,stI, edI) {
    while(edI > stI) {
      if(str[stI++] !== str[edI--]) {
          return false;
      }
    }

      return true;
  }
  
  for(let i = 0, j = s.length - 1; i < j; i++, j--) {
      if(s.charAt(i) !== s.charAt(j)) {
          return isParlindrome(s, i, j - 1) || isParlindrome(s, i + 1, j);
      }
  }
  
  return true;
};

//Runtime: 84 ms, faster than 73.73% of JavaScript online submissions for Valid Palindrome II.
//Memory Usage: 42.9 MB, less than 25.00% of JavaScript online submissions for Valid Palindrome II.