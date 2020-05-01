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
var minDiffInBST = function(root) {
    let prev;
    let result = Infinity;
    
    const traverse = (node) => {
        if(!node) {
            return;
        }
        
        traverse(node.left);
        if(prev) {
            result = Math.min(result, node.val - prev.val)
        }
        prev = node;
        traverse(node.right);       
    }
    
    traverse(root);
    return result;
};

//Runtime: 56 ms, faster than 65.03% of JavaScript online submissions for Minimum Distance Between BST Nodes.
//Memory Usage: 34.5 MB, less than 100.00% of JavaScript online submissions for Minimum Distance Between BST Nodes.