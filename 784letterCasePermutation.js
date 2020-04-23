var letterCasePermutation = function(S) {
    let result = [];
    
    const permutation = (current, i) => {
        if(current.length === S.length) {
            result.push(current);
            return;
        }
        
        if(S.charAt(i) >= '0' && S.charAt(i) <= '9') {
            permutation(current += S.charAt(i), i + 1);
        } else{
            permutation(current + S.charAt(i).toUpperCase(), i + 1);
            permutation(current + S.charAt(i).toLowerCase(), i + 1);
        }
    }
    
    permutation("", 0);
    
    return result;
};