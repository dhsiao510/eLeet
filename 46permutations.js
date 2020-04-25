var permute = function(nums) {
    let results = [];
    const permute = (current, leftover) => {
        if(current.length === nums.length) {
            results.push(current);
        }
        for(let i = 0; i < leftover.length; i++) {
            permute(current.concat(leftover[i]), leftover.slice(0, i).concat(leftover.slice(i + 1)))
        }
    }
    permute([], nums)
    
    return results; 
}

//Runtime: 64 ms, faster than 85.68% of JavaScript online submissions for Permutations.
//Memory Usage: 36.9 MB, less than 24.00% of JavaScript online submissions for Permutations.