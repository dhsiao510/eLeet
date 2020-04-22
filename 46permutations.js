var permute = function(nums) {
    let result = [];
    
    const findPerm = (curr,leftover) => {
        curr = curr || [];
        
        if(!leftover.length) {
            result.push(curr);
        }
        
        for(let i = 0; i < leftover.length; i++) {
            findPerm(curr.concat(leftover[i]), leftover.slice(0, i).concat(leftover.slice(i + 1)));
        }
    }
    
    findPerm([], nums);
    return result;
};

//Runtime: 64 ms, faster than 85.68% of JavaScript online submissions for Permutations.
//Memory Usage: 36.9 MB, less than 24.00% of JavaScript online submissions for Permutations.