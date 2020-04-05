var smallerNumbersThanCurrent = function(nums) {
    let result = [];
    for(let i = 0; i < nums.length; i++) {
        let counter = 0;
        for(j = 0; j < nums.length; j++) {
            if(j == i) {
                j++;
            } 
            if(nums[i] > nums[j]) {
                counter++;
            }
        }
        result.push(counter);
    }
    return result;
}; 

//Runtime: 180 ms, faster than 5.02% of JavaScript online submissions for How Many Numbers Are Smaller Than the Current Number.
//Memory Usage: 35.6 MB, less than 100.00% of JavaScript online submissions for How Many Numbers Are Smaller Than the Current Number.