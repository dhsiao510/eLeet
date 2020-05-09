var sortArray = function(nums) {
    for(let i = 1; i < nums.length; i++) {
        let curr = nums[i]
        for(var j = i - 1; j > -1 && nums[j] > curr; j--) {
            nums[j + 1] = nums[j];
        }
        nums[j + 1] = curr;
    }
    
    return nums;
}; 


//Runtime: 680 ms, faster than 16.65% of JavaScript online submissions for Sort an Array.
//Memory Usage: 40.4 MB, less than 100.00% of JavaScript online submissions for Sort an Array.