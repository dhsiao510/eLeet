var reverseList = function(head) {
    let pre = null;
    while(head) {
        let next = head.next;
        head.next = pre;
        pre = head;
        head = next;
    }
    return pre;
};

//Runtime: 48 ms, faster than 98.19% of JavaScript online submissions for Reverse Linked List.
//Memory Usage: 34.9 MB, less than 73.91% of JavaScript online submissions for Reverse Linked List.