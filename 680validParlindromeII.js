var validPalindrome = function(s) {
    let i = 0; j = s.length -1; deleted = false; 
    while(i < j) {
        if(s.charAt(i) === s.charAt(j)) {
          if(i + 1 < j- 1){
            i++;
            j--;
          } else{
            break;
          }
        } else if ((s.charAt(i + 1) === s.charAt(j)) && !deleted) {
            deleted = true;
            if((i + 2) < j - 1) {
              i = i + 2;
              j--;
            } else {
                break;
            }
        } else if ((s.charAt(i)=== s.charAt(j - 1)) && !deleted) {
            deleted = true;
            if((j - 2) > i + 1) {
                j = j - 2;
                i++;  
            } else {
                break;
            }
        }  else {
            return false;
        }
    }
    return true; 
};