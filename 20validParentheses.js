var isValid = function(s) {
    const closingBrackets = {
       ')': '(',
       ']': '[',
       '}': '{'
    }
    let result = [];
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(' || s[i] === '[' || s[i] === '{') {
            result.push(s[i]);
        } else{
            if(closingBrackets[s[i]] === result[result.length - 1]) {
                result.pop();
            } else{
                return false;
            }
        }
    }
    return result.length === 0 ? true: false;    
};

//Runtime: 44 ms, faster than 99.09% of JavaScript online submissions for Valid Parentheses.
//Memory Usage: 33.8 MB, less than 78.33% of JavaScript online submissions for Valid Parentheses.