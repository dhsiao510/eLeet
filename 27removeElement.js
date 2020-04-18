var removeElement = function(nums, val) {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === val) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
};

//Runtime: 52 ms, faster than 84.15% of JavaScript online submissions for Remove Element.
//Memory Usage: 33.8 MB, less than 50.00% of JavaScript online submissions for Remove Element.