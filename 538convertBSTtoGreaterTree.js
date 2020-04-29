var convertBST = function(root) {
    let sum = 0;
    let recurse = (node) => {
        if(!node) {
            return node;
        }
        if(node.right) {
            recurse(node.right);
        }
        sum += node.val;
        node.val = sum;
        
        if(node.left) {
            recurse(node.left)
        }
        return node;
    }
    
    return recurse(root);
};

//Runtime: 84 ms, faster than 74.30% of JavaScript online submissions for Convert BST to Greater Tree.
//Memory Usage: 40.3 MB, less than 25.00% of JavaScript online submissions for Convert BST to Greater Tree.