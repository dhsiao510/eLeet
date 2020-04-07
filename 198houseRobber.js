var rob = function(nums) {
    let onePrior = 0;
    let twoPrior = 0;
    for(let i = 0; i < nums.length; i++) {
        let current = Math.max(twoPrior + nums[i], onePrior);
        twoPrior = onePrior;
        onePrior = current;
    }
    return onePrior;
};

//Runtime: 48 ms, faster than 91.22% of JavaScript online submissions for House Robber.
//Memory Usage: 33.9 MB, less than 14.29% of JavaScript online submissions for House Robber.