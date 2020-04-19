var binaryTreePaths = function(root) {
    let result = [];
    
    const dfs = (root, str) => {
        if(!root) {
            return;
        }
        
        if(!root.left && !root.right) {
            result.push(str + root.val);
        }
        
        if(root.left) {
            dfs(root.left, str + root.val + "->");
        }
        
        if(root.right) {
            dfs(root.right, str + root.val + "->")
        }
    }
    
    dfs(root, "")      
    return result;
};

//Runtime: 64 ms, faster than 27.16% of JavaScript online submissions for Binary Tree Paths.
//Memory Usage: 34.2 MB, less than 100.00% of JavaScript online submissions for Binary Tree Paths.