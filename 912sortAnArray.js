var sortArray = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        let minIndex = i;
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[j] < nums[minIndex]) {
                minIndex = j;
            }
        }
        if(i !== minIndex) {
            let temp = nums[i];
            nums[i] = nums[minIndex];
            nums[minIndex] = temp;
        }
    }
    
    return nums;
}; 

//Runtime: 1332 ms, faster than 13.03% of JavaScript online submissions for Sort an Array.
//Memory Usage: 40.3 MB, less than 100.00% of JavaScript online submissions for Sort an Array.