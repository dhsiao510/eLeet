var pathSum = function(root, sum) {
    if(!root) {
        return 0;
    }
    const fullPathSum = (root, sum) => {
        if(!root) {
            return 0;
        }
        let result = 0;
        if(root.val === sum) {
            result++;
        }
        result += fullPathSum(root.left, sum - root.val) + fullPathSum(root.right, sum - root.val);
        return result;        
    }
    let result = fullPathSum(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum);
    return result;
};

//Runtime: 96 ms, faster than 37.63% of JavaScript online submissions for Path Sum III.
//Memory Usage: 37.3 MB, less than 66.67% of JavaScript online submissions for Path Sum III.