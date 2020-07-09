var isUgly = function(num) {
    if(num <= 0) {
        return false;
    }
    
    while(num > 1) {
        if(num % 5 === 0) {
            num /= 5;
        } else if (num % 3 === 0) {
            num /= 3;
        } else if (num % 2 === 0) {
            num /= 2;
        } else {
            return false;
        }
    }
    return true;
};

//Runtime: 92 ms, faster than 45.76% of JavaScript online submissions for Ugly Number.
//Memory Usage: 36 MB, less than 57.46% of JavaScript online submissions for Ugly Number.