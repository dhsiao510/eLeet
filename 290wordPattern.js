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