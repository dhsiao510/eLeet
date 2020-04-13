var middleNode = function(head) {
    let slow = head, fast = head;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};

//Runtime: 56 ms, faster than 33.22% of JavaScript online submissions for Middle of the Linked List.
//Memory Usage: 33.7 MB, less than 88.89% of JavaScript online submissions for Middle of the Linked List.