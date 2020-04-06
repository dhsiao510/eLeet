var climbStairs = function(n) {
    if(n <= 2) {
        return n; 
    }
    let onePrior = 2;
    let twoPrior = 1;
    let current;
    for(let i = 2; i < n; i++) {
        current = onePrior + twoPrior;
        twoPrior = onePrior;
        onePrior = current; 
    }
    return onePrior;
};

//Runtime: 56 ms, faster than 37.67% of JavaScript online submissions for Climbing Stairs.
//Memory Usage: 33.7 MB, less than 100.00% of JavaScript online submissions for Climbing Stairs.