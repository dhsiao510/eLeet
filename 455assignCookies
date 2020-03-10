var findContentChildren = function(g, s) {
    let gi = 0, si = 0;
    if(s.length === 0) {
        return 0;
    }
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    while(gi < g.length && si < s.length ) {
        if(g[gi] <= s[si]) {
            gi++;
        }
        si++;
    }

    return gi;
};

//Runtime: 88 ms, faster than 69.70% of JavaScript online submissions for Assign Cookies.
//Memory Usage: 37.9 MB, less than 100.00% of JavaScript online submissions for Assign Cookies.