var maxSubArrayLen = function(nums, k) {
    let map = {};
    map[0] = -1;
    let result = 0;
    let sum = 0;
    
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
        
        if(!(sum in map)) {
            map[sum] = i
        }
        
        if(sum - k in map) {
            result = Math.max(result , i- map[sum - k])
        }
    }
    
    return result;
};

//Runtime: 100 ms, faster than 46.99% of JavaScript online submissions for Maximum Size Subarray Sum Equals k.
//Memory Usage: 44.9 MB, less than 10.89% of JavaScript online submissions for Maximum Size Subarray Sum Equals k.