var hasPathSum = function(root, sum) {
    if(!root){
        return false;
    }
    if(!root.left && !root.right && root.val === sum) {
        return true;
    }
    return(hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val))
};

//Runtime: 64 ms, faster than 71.59% of JavaScript online submissions for Path Sum.
//Memory Usage: 37.2 MB, less than 77.78% of JavaScript online submissions for Path Sum.