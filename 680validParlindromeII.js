var validPalindrome = function(s) {
    let i = 0; j = s.length -1; deleted = false; result = true;
    while(i !== j) {
        if(s.charAt(i) === s.charAt(j)) {
            i++;
            j--;
        } else if ((s.charAt(i)=== s.charAt(j - 1)) && !deleted) {
            deleted = true;
            j = j - 2;
            i++;
        } else if ((s.charAt(i + 1) === s.charAt(j)) && !deleted) {
            deleted = true;
            i = i + 2;
            j--;
        } else {
            result = false;
            break;
        }
    }
    return result; 
};