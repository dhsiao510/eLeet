var isAnagram = function(s, t) {
    if(s.length !== t.length) {
        return false;
    }
    let obj = {};
    
    for(let i = 0; i < s.length; i++) {
        if(!obj[s[i]]) {
            obj[s[i]] = 1;
        } else {
            obj[s[i]]++;
        }
    }
    
    for(let j = 0; j < t.length; j++) {
        if(!obj[t[j]]) {
            return false;
        } else {
            obj[t[j]]--;
        }
    }
    
    for(key in obj) {
        if(obj[key] !== 0) {
            return false;
        }
    }
    return true;
}; 

//Runtime: 96 ms, faster than 48.75% of JavaScript online submissions for Valid Anagram.
//Memory Usage: 38.1 MB, less than 57.85% of JavaScript online submissions for Valid Anagram.