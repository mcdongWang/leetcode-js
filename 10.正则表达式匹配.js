/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let sl = s.length
    let pl = p.length
    let dp = []

    // 判断相等  a == a  || a == .
    function check(si, pi){
        // si pi 代表第几个数字 不涉及0 开头的问题
        return s[si - 1] == p[pi - 1] || p[pi - 1] == '.'
    }

    // dp初始化
    for(let i = 0; i <= sl; i++){
        dp[i] = []
    }
    dp[0][0] = true
    for(let j = 2; j <= pl; j++){
        dp[0][j] = p[j - 1] == '*' && dp[0][j - 2]
    }
    
    // dp转移方程 空字符串或空正则的情况已经在上边处理了可能为true的情况
    // 利用js特性 undefined 为 false 无需显示声明
    for(let i = 1; i <= sl; i++){
        for(let j = 1; j <= pl; j++){
            // 状态转移方程 分类讨论
            if(p[j - 1] == '*'){
                dp[i][j] = dp[i][j - 2]
                    || dp[i - 1][j] && check(i, j-1)
            }else{
                // 当前正则字符不是 * 
                dp[i][j] = dp[i - 1][j - 1] && check(i, j)
            }
        }
    }
    return !!dp[sl][pl]
};
// @lc code=end
