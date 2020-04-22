var permuteUnique = function(nums) {
    nums.sort((a, b) => a - b);
    let result = [];
    
    
    const findPerm = (current, leftover) => {
        current = current || [];
        
        if(!leftover.length) {
            result.push(current);
        }
        
        for(let i = 0; i < leftover.length; i++) {
            findPerm(current.concat(leftover[i]), leftover.slice(0, i).concat(leftover.slice(i + 1)))
            while(leftover[i] === leftover[i + 1]) i++;
        }
    }
    
    findPerm([], nums)
    return result;
};

//Runtime: 72 ms, faster than 88.10% of JavaScript online submissions for Permutations II.
//Memory Usage: 37.1 MB, less than 61.11% of JavaScript online submissions for Permutations II.