var mergeTwoLists = function(l1, l2) {
    let list = new ListNode();
    let head = list;
    
    while(l1 && l2) {
        if(l1.val < l2.val) {
            list.next = l1;
            l1 = l1.next;
        } else {
            list.next = l2;
            l2 = l2.next;
        }
        list = list.next;
    }
    
    if(l1) {
        list.next = l1
    }
    if(l2) {
        list.next = l2
    }
    
    return head.next;
};

//Runtime: 68 ms, faster than 39.32% of JavaScript online submissions for Merge Two Sorted Lists.
//Memory Usage: 35.6 MB, less than 71.79% of JavaScript online submissions for Merge Two Sorted Lists.