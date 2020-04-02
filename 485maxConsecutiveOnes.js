var findMaxConsecutiveOnes = function(nums) {
    let result = 0;
    let count = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 1) {
            count++;
        } else {
            result = Math.max(result, count);
            count = 0;
        }
    }
    
    return Math.max(result, count);
};

//Runtime: 56 ms, faster than 98.10% of JavaScript online submissions for Max Consecutive Ones.
//Memory Usage: 37.5 MB, less than 11.11% of JavaScript online submissions for Max Consecutive Ones.