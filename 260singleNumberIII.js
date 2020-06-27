var singleNumber = function(nums) {
    let count = {};
    let result = [];
    for(var i = 0; i < nums.length; i++) {
        if(!count[nums[i]]) {
            count[nums[i]] = 1;
        } else {
            count[nums[i]]++;
        }
    }
    
    for(var key in count) {
        if(count[key] === 1) {
            result.push(key);
        }
    }
    
    return result;
};

//Runtime: 84 ms, faster than 32.61% of JavaScript online submissions for Single Number III.
//Memory Usage: 38.9 MB, less than 15.53% of JavaScript online submissions for Single Number III.