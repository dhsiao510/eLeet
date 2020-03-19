function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var sumOfLeftLeaves = function(root) {
    if(!root) {
        return 0;
    };
    const isLeaf = (node) => {
        if(!node) {
            return false;
        }
        return (!node.left && !node.right)
    }
    if(isLeaf(root.left)) {
        return root.left.val + sumOfLeftLeaves(root.right)
    }
    return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
};

//Runtime: 56 ms, faster than 73.15% of JavaScript online submissions for Sum of Left Leaves.
//Memory Usage: 34.9 MB, less than 100.00% of JavaScript online submissions for Sum of Left Leaves.