var isSubtree = function(s, t) {
    if(!s) {
        return false;
    }

    const sameTree = (s, t) => {
        if(!t && !s) {
            return true;
        }
        if(!t || !s) {
            return false;
        }
        if(t.val !== s.val) {
            return false;
        }
        return sameTree(s.left, t.left) && sameTree(s.right, t.right)
    }
    return sameTree(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t)
};

//Runtime: 76 ms, faster than 85.73% of JavaScript online submissions for Subtree of Another Tree.
//Memory Usage: 39.6 MB, less than 100.00% of JavaScript online submissions for Subtree of Another Tree.