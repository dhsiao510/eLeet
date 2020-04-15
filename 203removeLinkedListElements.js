var removeElements = function(head, val) {
    let prev = null, actual = head
    
    while(actual) {
        if(actual.val === val) {
            if(!prev) {
                head = actual.next;
            } else {
                prev.next = actual.next;
            }
        } else {
            prev = actual;
        }
        actual = actual.next;          

    }
        
    return head;
};

//Runtime: 68 ms, faster than 88.63% of JavaScript online submissions for Remove Linked List Elements.
//Memory Usage: 37 MB, less than 50.00% of JavaScript online submissions for Remove Linked List Elements.