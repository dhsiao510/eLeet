/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if(!nums.length) {
        return null;
    }
    
    let mid = Math.floor(nums.length / 2);
    let root = new TreeNode(nums[mid])
    
    root.left = sortedArrayToBST(nums.slice(0, mid))
    root.right = sortedArrayToBST(nums.slice(mid + 1))
    
    return root;
};

//Runtime: 88 ms, faster than 9.78% of JavaScript online submissions for Convert Sorted Array to Binary Search Tree.
//Memory Usage: 37.8 MB, less than 25.00% of JavaScript online submissions for Convert Sorted Array to Binary Search Tree.