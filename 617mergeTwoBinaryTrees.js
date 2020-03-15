var mergeTrees = function(t1, t2) {
    if(!t1 && !t2) {
        return null
    };
    if(!t1) {
        return t2;
    }
    if(!t2) {
        return t1;
    }
    let result = new TreeNode(t1.val + t2.val);
    result.left = mergeTrees(t1.left, t2.left);
    result.right = mergeTrees(t1.right, t2.right);
    return result;
};

//Runtime: 92 ms, faster than 56.59% of JavaScript online submissions for Merge Two Binary Trees.
//Memory Usage: 40.6 MB, less than 7.69% of JavaScript online submissions for Merge Two Binary Trees.