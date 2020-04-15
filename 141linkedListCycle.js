var hasCycle = function(head) {
    if(!head) {
        return false;
    }
    let hash = {};
    while(head) {
        if(hash[head.val]) {
            for(let i = 0; i < hash[head.val].length; i++) {
                if(head === hash[head.val][i]) {
                   return true; 
                }
            }
            hash[head.val].push(head);
        } else {
             hash[head.val] = [head];
        }
        head = head.next;
    }
    
    return false;
};

//Runtime: 80 ms, faster than 10.09% of JavaScript online submissions for Linked List Cycle.
//Memory Usage: 40.3 MB, less than 6.25% of JavaScript online submissions for Linked List Cycle.