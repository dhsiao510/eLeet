function validAnagram(str1, str2){
    if(str1.length !== str2.length) {
        return false;
    }
    
    let check = {};
    
    for(let i = 0; i < str1.length; i++) {
        if(!check[str1[i]]) {
            check[str1[i]] = 1;
        } else {
            check[str1[i]]++;
        }
    }
    
    for(let j = 0; j < str2.length; j++) {
        if(!check[str2[j]]) {
            return false;
        } else {
            check[str2[j]]--;
        }
    }
    
    return true;
}