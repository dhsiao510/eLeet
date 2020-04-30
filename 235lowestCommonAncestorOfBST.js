var lowestCommonAncestor = function(root, p, q) {
    if(p.val > q.val) {
        const temp = p;
        p = q;
        q = temp;
    }
    let result;
    
    const traverse = (node) => {
        if(!node) {
            return;
        }
            
        if(p.val <= node.val && node.val <= q.val) {
            result = node;
        }
        if(p.val < node.val && q.val < node.val) {
            traverse(node.left);
        }
        if(p.val > node.val && q.val > node.val) {
            traverse(node.right);
        }
    }

    traverse(root)
    return result;
};

//Runtime: 72 ms, faster than 91.62% of JavaScript online submissions for Lowest Common Ancestor of a Binary Search Tree.
//Memory Usage: 43.6 MB, less than 100.00% of JavaScript online submissions for Lowest Common Ancestor of a Binary Search Tree.