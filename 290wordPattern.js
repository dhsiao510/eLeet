var wordPattern = function(pattern, str) {
    let arr = str.split(" ");
    if(pattern.length !== arr.length) {
        return false;
    }
    let obj = {};
    let usedStr = [];
    for(var i = 0; i < arr.length; i++) {
        if(!obj[pattern[i]] && usedStr.indexOf(arr[i]) === -1) {
            obj[pattern[i]] = arr[i];
            usedStr.push(arr[i]);
        } else if(obj[pattern[i]] !== arr[i]) {
            return false;
        } 
    }
    return true;
};

//Runtime: 68 ms, faster than 29.64% of JavaScript online submissions for Word Pattern.
//Memory Usage: 33.3 MB, less than 79.14% of JavaScript online submissions for Word Pattern.