var singleNumber = function(nums) {
    let result = {};
    for(let i = 0; i < nums.length; i++) {
        if(!result[nums[i]]){
            result[nums[i]] = 1;
        } else {
            delete result[nums[i]];
        }
    }

    for(key in result) {
       return key;
    }
};

//Runtime: 60 ms, faster than 72.26% of JavaScript online submissions for Single Number.
//Memory Usage: 37.3 MB, less than 50.00% of JavaScript online submissions for Single Number.