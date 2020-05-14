var sortArray = function(nums) {
    for(var i = 1; i < nums.length; i++) {
        let current = nums[i]
        for(var j = i - 1; j >= 0 && nums[j] > current; j--) {
            nums[j + 1] = nums[j];
        }
        nums[j + 1] = current;
    }
    
    return nums;
}; 

//Runtime: 664 ms, faster than 16.15% of JavaScript online submissions for Sort an Array.
//Memory Usage: 40.3 MB, less than 100.00% of JavaScript online submissions for Sort an Array.