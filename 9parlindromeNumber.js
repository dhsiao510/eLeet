var isPalindrome = function(x) {
    if(x < 0 || (x !== 0 && x % 10 === 0)) {
        return false;        
    }

    let og = x;
    let result = 0;
    
    while(og) {
        result = og % 10 + result * 10;
        og = Math.floor(og / 10)
    }
   
    return x === result;
};

//Runtime: 192 ms, faster than 67.93% of JavaScript online submissions for Palindrome Number.
//Memory Usage: 44.8 MB, less than 98.28% of JavaScript online submissions for Palindrome Number.