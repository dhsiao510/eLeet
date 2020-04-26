var rob = function(nums) {
    if(!nums || !nums.length){ 
        return 0;
    }
    if(nums.length == 1) {
        return nums[0];
    } else if (nums.length < 3) {
        return Math.max(nums[0], nums[1]);
    }
    
    const robHelper = (nums, start, end) => {
        let onePrior = 0;
        let twoPrior = 0; 
        for(let i = start; i < end; i++) {
            let current = Math.max(twoPrior + nums[i], onePrior)
            twoPrior = onePrior;
            onePrior = current;
        }
        return onePrior
    }
    

    return Math.max(robHelper(nums, 0, nums.length - 1), robHelper(nums, 1, nums.length));
};

//Runtime: 52 ms, faster than 78.85% of JavaScript online submissions for House Robber II.
//Memory Usage: 33.8 MB, less than 66.67% of JavaScript online submissions for House Robber II.