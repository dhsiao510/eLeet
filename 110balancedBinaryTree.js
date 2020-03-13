function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var isBalanced = function(root) {
    let result = true;
    const maxDepth = (root) => {
        if(!root) {
            return 0;
        }
        let left = maxDepth(root.left);
        let right = maxDepth(root.right);
        Math.abs(left - right) > 1 ? result = false:result = result;
        return Math.max(left, right) + 1;
    }
    
    maxDepth(root);
    return result;
};

//Runtime: 72 ms, faster than 51.20% of JavaScript online submissions for Balanced Binary Tree.
//Memory Usage: 37.9 MB, less than 7.14% of JavaScript online submissions for Balanced Binary Tree.