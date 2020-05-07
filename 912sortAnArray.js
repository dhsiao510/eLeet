var sortArray = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        let minIndex = i;
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[j] < nums[minIndex]) {
                minIndex = j;
            }
        }
        let temp = nums[i];
        nums[i] = nums[minIndex];
        nums[minIndex] = temp;
    }
    
    return nums;
}; 

//Runtime: 1384 ms, faster than 12.42% of JavaScript online submissions for Sort an Array.
//Memory Usage: 40.4 MB, less than 100.00% of JavaScript online submissions for Sort an Array.