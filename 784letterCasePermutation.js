var letterCasePermutation = function(S) {
    let result = [];
    
    const permute = (current, i) => {
        if(current.length === S.length) {
            result.push(current);
            return;
        }
        
        if(S.charAt(i) >= '0' && S.charAt(i) <= '9') {
            permute(current.concat(S.charAt(i)), i + 1);
        } else {
            permute(current.concat(S.charAt(i).toUpperCase()), i + 1);
            permute(current.concat(S.charAt(i).toLowerCase()), i + 1)
        }
    }
    
    permute('', 0)
    return result;
};

//Runtime: 64 ms, faster than 95.55% of JavaScript online submissions for Letter Case Permutation.
//Memory Usage: 38.2 MB, less than 33.33% of JavaScript online submissions for Letter Case Permutation.