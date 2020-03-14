var diameterOfBinaryTree = function(root) {
    let result = 0;
    const maxDepth = (root) => {
        if(!root) {
            return 0;
        }
        let leftSide = maxDepth(root.left);
        let rightSide= maxDepth(root.right);
        result = Math.max(result, leftSide + rightSide)
        return Math.max(leftSide, rightSide) + 1; 
    }
    maxDepth(root);
    return result;
};

//Runtime: 68 ms, faster than 49.85% of JavaScript online submissions for Diameter of Binary Tree.
//Memory Usage: 37 MB, less than 87.50% of JavaScript online submissions for Diameter of Binary Tree.