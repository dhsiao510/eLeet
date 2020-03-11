function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var maxDepth = function(root) {
    if(!root) {
        return 0;
    }
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

//Runtime: 68 ms, faster than 34.59% of JavaScript online submissions for Maximum Depth of Binary Tree.
//Memory Usage: 37.2 MB, less than 34.38% of JavaScript online submissions for Maximum Depth of Binary Tree.