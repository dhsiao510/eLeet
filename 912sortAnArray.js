var sortArray = function(nums) {
    for(var i = nums.length; i > 0; i--) {
        for(var j = 0; j < i - 1; j++) {
            if(nums[j] > nums[j + 1]) {
                let temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp
            }
        }
    }
    
    return nums
};

//Runtime: 3708 ms, faster than 7.60% of JavaScript online submissions for Sort an Array.
//Memory Usage: 40.6 MB, less than 100.00% of JavaScript online submissions for Sort an Array.