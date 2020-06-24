var minSubArrayLen = function(s, nums) {
    let left = 0;
    let right = 0;
    let total = 0;
    let result = Infinity;
    
    while(left < nums.length) {
        if(total < s) {
            total += nums[right];
            right++;
        } else if(total >= s){
            result = Math.min(result, right - left)
            total -= nums[left];
            left++;
        } else{
            break;
        }
    }
    
    return result === Infinity? 0: result;
};

//Runtime: 64 ms, faster than 65.77% of JavaScript online submissions for Minimum Size Subarray Sum.
//Memory Usage: 36.8 MB, less than 22.36% of JavaScript online submissions for Minimum Size Subarray Sum.