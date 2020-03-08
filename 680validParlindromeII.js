var validPalindrome = function(s) {
    let i = 0; j = s.length -1; deleted = false; 
    while(i < j) {
        if(s.charAt(i) === s.charAt(j)) {
            i++;
            j--;
        } else if ((s.charAt(i)=== s.charAt(j - 1)) && !deleted) {
            deleted = true;
            if((j - 2) > i++) {
                j = j - 2;
                 i++;  
            } else {
                break;
            }

        } else if ((s.charAt(i + 1) === s.charAt(j)) && !deleted) {
            deleted = true;
            if((i + 2) < j--) {
              i = i + 2;
              j--;
            } else {
                break;
            }

        } else {
            return false;
        }
    }
    return true; 
};