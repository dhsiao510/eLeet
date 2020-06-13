var invertTree = function(root) {
    const revert = (node) => {
        if(!node) {
            return;
        }
        let temp = node.left;
        node.left = node.right;
        node.right = temp;
    }

    revert(root);
    return root;
};