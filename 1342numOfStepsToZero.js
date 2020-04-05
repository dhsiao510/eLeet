var numberOfSteps  = function(num) {
    let count = 0;
    while(num > 0) {
        if(num % 2 === 0) {
            num = num / 2;
            count++;
        } else {
            num = num - 1;
            count++;
        }
    }
    return count;
};

//Runtime: 52 ms, faster than 82.67% of JavaScript online submissions for Number of Steps to Reduce a Number to Zero.
//Memory Usage: 34.1 MB, less than 100.00% of JavaScript online submissions for Number of Steps to Reduce a Number to Zero.