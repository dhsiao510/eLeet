var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};

//Runtime: 52 ms, faster than 98.92% of JavaScript online submissions for Delete Node in a Linked List.
//Memory Usage: 35.7 MB, less than 41.67% of JavaScript online submissions for Delete Node in a Linked List.