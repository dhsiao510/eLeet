/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    let prev;
    let result = Infinity;
    
    const traverse = (node) => {
        if(!node) {
            return ;
        }
        
        traverse(node.left);
        if(prev !== undefined && result > node.val - prev) {
            result = node.val - prev;
        }
        prev = node.val;
        traverse(node.right);
    }
    
    traverse(root);
    return result;
};

//Runtime: 64 ms, faster than 91.18% of JavaScript online submissions for Minimum Absolute Difference in BST.
//Memory Usage: 37.5 MB, less than 100.00% of JavaScript online submissions for Minimum Absolute Difference in BST.