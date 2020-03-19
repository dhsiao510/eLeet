var isSymmetric = function(root) {
    if(!root) {
        return true;
    }
    const isSymmetric = (l, r) => {
        if(!l && !r) {
            return true;
        }
        if(!l || !r) {
            return false;
        }
        if(l.val !== r.val) {
            return false;
        }
        return isSymmetric(l.left, r.right) && isSymmetric(l.right, r.left) 
    }
    return isSymmetric(root.left, root.right)
};

//Runtime: 56 ms, faster than 91.60% of JavaScript online submissions for Symmetric Tree.
//Memory Usage: 35.6 MB, less than 70.00% of JavaScript online submissions for Symmetric Tree.