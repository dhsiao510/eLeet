var permuteUnique = function(nums) {
    let result = [];
    nums.sort((a, b) => a - b);
    
    const permutation = (current, leftover) => {
        if(current.length === nums.length) {
            result.push(current)
        }
        
        for(let i = 0; i < leftover.length; i++) {
            permutation(current.concat(leftover[i]), leftover.slice(0, i).concat(leftover.slice(i + 1)));
            while(leftover[i] === leftover[i + 1]) {
                i++;
            }
        }
    }
    
    permutation([], nums);
    return result;
};

//Runtime: 72 ms, faster than 88.10% of JavaScript online submissions for Permutations II.
//Memory Usage: 37.1 MB, less than 61.11% of JavaScript online submissions for Permutations II.