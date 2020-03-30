var findLHS = function(nums) {
    const obj = {};
    for(let i = 0; i < nums.length; i++) {
        obj[nums[i]] = obj[nums[i]] + 1 || 1; 
    }

    let result = 0;
    for(let key in obj) {
        let count = obj[key] + obj[key - 1] || 0;
        result = Math.max(result, count)
    }
    
    return result > 1 ? result : 0
}; 

//Runtime: 112 ms, faster than 69.37% of JavaScript online submissions for Longest Harmonious Subsequence.
//Memory Usage: 46.2 MB, less than 33.33% of JavaScript online submissions for Longest Harmonious Subsequence.