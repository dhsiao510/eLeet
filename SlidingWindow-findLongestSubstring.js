function findLongestSubstring(str){
    let result = 0;
    let obj = {};
    for(var i = 0; i < str.length - 1; i++) {
        let tracker = 1; 
        obj[str[i]] = 1;
        for(var j = i + 1; j < str.length; j++) {
            if(!obj[str[j]]) {
                obj[str[j]] = 1;
                tracker++;                
            } else {
                obj = {};
                break;
            }
        }
        result = Math.max(result, tracker);
    }

    return result;
}