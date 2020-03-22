function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var rob = function(root) {
    if(!root) {
        return 0;
    }
    let fromRoot = root.val;
    if(root.left) {
        fromRoot += rob(root.left.left) + rob(root.left.right);
    }
    if(root.right) {
        fromRoot += rob(root.right.left) + rob(root.right.right);
    }
    let afterRoot = rob(root.left) + rob(root.right);
    return Math.max(fromRoot, afterRoot);
};

//Runtime: 1544 ms, faster than 20.93% of JavaScript online submissions for House Robber III.
//Memory Usage: 36.9 MB, less than 100.00% of JavaScript online submissions for House Robber III.