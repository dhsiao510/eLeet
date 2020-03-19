var minDepth = function(root) {
    if(!root) {
        return 0;
    };
    let left = minDepth(root.left);
    let right = minDepth(root.right);
    if(left === 0 || right === 0) {
        return left + right + 1;
    }
    return Math.min(left, right) + 1;
};

//Runtime: 64 ms, faster than 63.38% of JavaScript online submissions for Minimum Depth of Binary Tree.
//Memory Usage: 37.1 MB, less than 80.00% of JavaScript online submissions for Minimum Depth of Binary Tree.