var sortArray = function(nums) {
    for(let i = 0; i < nums.length - 1; i++) {
        let min = i;
        for(var j = i + 1; j < nums.length; j++) {
            if(nums[min] > nums[j]) {
                min = j
            }
        }
        if(min !== i) {
            let temp = nums[i];
            nums[i] = nums[min];
            nums[min] = temp; 
        }

    }
    
    return nums;
}; 


//Runtime: 1076 ms, faster than 13.84% of JavaScript online submissions for Sort an Array.
//Memory Usage: 40.6 MB, less than 100.00% of JavaScript online submissions for Sort an Array.