var createTargetArray = function(nums, index) {
    let result = [];
    for(var i = 0; i < nums.length; i++) {
        result.splice(index[i], 0, nums[i])
    }
    return result;    
};

//Runtime: 60 ms, faster than 26.28% of JavaScript online submissions for Create Target Array in the Given Order.
//Memory Usage: 34 MB, less than 100.00% of JavaScript online submissions for Create Target Array in the Given Order.