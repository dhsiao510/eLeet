var findSecondMinimumValue = function(root) {
    if(!root) {
        return -1;
    }
    if(!root.left && !root.right) {
        return -1;
    }
    let leftVal = root.left.val;
    let rightVal = root.right.val;
    if(leftVal === root.val) {
        leftVal = findSecondMinimumValue(root.left);
    }
    if(rightVal === root.val) {
        rightVal = findSecondMinimumValue(root.right);
    }
    if(leftVal !== -1 && rightVal !== -1) {
        return Math.min(leftVal, rightVal);
    }
    if(leftVal !== -1) {
        return leftVal;
    }
    return rightVal;
};

//Runtime: 48 ms, faster than 90.50% of JavaScript online submissions for Second Minimum Node In a Binary Tree.
//Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions for Second Minimum Node In a Binary Tree.