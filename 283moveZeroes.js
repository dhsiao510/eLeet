var moveZeroes = function(nums) {
    let zeroCount = 0
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) {
            nums.splice(i, 1);
            i--;
            zeroCount++;
        }
    }

    while(zeroCount > 0) {
        nums.push(0);
        zeroCount--;
    }
    return nums;
};

//Runtime: 60 ms, faster than 84.83% of JavaScript online submissions for Move Zeroes.
//Memory Usage: 35.9 MB, less than 34.04% of JavaScript online submissions for Move Zeroes.