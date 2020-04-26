var rangeSumBST = function(root, L, R) {
    let result = 0;
    if(!root) {
        return result;
    }
    if(root.val >= L && root.val <= R) {
     result += root.val;   
    }
    return result + rangeSumBST(root.left, L, R) + rangeSumBST(root.right, L, R);    
};

//Runtime: 168 ms, faster than 50.08% of JavaScript online submissions for Range Sum of BST.
//Memory Usage: 71.3 MB, less than 11.54% of JavaScript online submissions for Range Sum of BST.