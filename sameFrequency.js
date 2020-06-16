function sameFrequency(int1, int2){
    let str1 = int1.toString();
    let str2 = int2.toString();
    
    let count1 = {};
    let count2 = {};
    
    for(let i = 0; i < str1.length; i++) {
        if(!count1[str1[i]]) {
            count1[str1[i]] = 1;
        } else {
            count1[str1[i]]++;
        }
    }
    
    for(let j = 0; j < str2.length; j++) {
        if(!count2[str2[j]]) {
            count2[str2[j]] = 1;
        } else {
            count2[str2[j]]++;
        }
    }
    
    for(let key in count1) {
        if(count1[key] !== count2[key]) {
            return false;
        } 
    }
    return true;
}