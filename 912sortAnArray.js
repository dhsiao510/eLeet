var sortArray = function(nums) {
    for(var i = nums.length; i > 0; i--) {
        var swapped = false;
        for(let j = 0; j < i - 1; j++) {
            swapped = true;
            if(nums[j] > nums[j + 1]) {
                let temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
        }
        if(!swapped) {
            break;
        }
    }
    
    return nums;
}; 

//Runtime: 3620 ms, faster than 8.94% of JavaScript online submissions for Sort an Array.
//Memory Usage: 40.6 MB, less than 100.00% of JavaScript online submissions for Sort an Array.