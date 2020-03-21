function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var longestUnivaluePath = function(root) {
    let path = 0;
    const sameValueNodeSum = (node) => {
        if(!node) {
            return 0;
        }
        let left = sameValueNodeSum(node.left);
        let right = sameValueNodeSum(node.right);
        let leftPathSum = node.left && node.left.val === node.val ? left + 1 : 0;  
        let rightPathSum = node.right && node.right.val === node.val ? right + 1 : 0;
        path = Math.max(path, leftPathSum + rightPathSum);
        return Math.max(leftPathSum, rightPathSum);
    }
    sameValueNodeSum(root);
    return path;
};

//Runtime: 176 ms, faster than 50.33% of JavaScript online submissions for Longest Univalue Path.
//Memory Usage: 52.1 MB, less than 14.29% of JavaScript online submissions for Longest Univalue Path.