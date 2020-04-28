/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

var invertTree = function(root) {

    const reverse = (node) => {
        if(!node) {
            return;
        }
        let temp = node.right;
        node.right = node.left
        node.left = temp;
        reverse(node.right);
        reverse(node.left);
    }
    
    reverse(root);
    
    return root;
};

//Runtime: 52 ms, faster than 80.46% of JavaScript online submissions for Invert Binary Tree.
//Memory Usage: 33.9 MB, less than 20.00% of JavaScript online submissions for Invert Binary Tree.