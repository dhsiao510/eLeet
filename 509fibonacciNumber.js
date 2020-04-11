var fib = function(N) {
    if(N === 0) {
        return 0;
    }
    if(N === 1) {
        return 1;
    }
    let onePrior = 1;
    let twoPrior = 0;
    while(N > 1) {
        let current = twoPrior + onePrior;
        twoPrior = onePrior;
        onePrior = current;
        N--;
    }
    return onePrior;
};

//Runtime: 56 ms, faster than 58.74% of JavaScript online submissions for Fibonacci Number.
//Memory Usage: 33.9 MB, less than 68.18% of JavaScript online submissions for Fibonacci Number.