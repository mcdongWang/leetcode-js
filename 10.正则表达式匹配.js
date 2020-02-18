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
        return s[si] == p[pi] || p[pi] == '.'
    }

    // dp初始化
    for(let i = 0; i <= sl; i++){
        dp[i] = []
        for(let j = 0; j <= pl; j++){
            // 初始化为null
            dp[i][j] = false
            if(i == 0 && j == 0){
                // dp[0][0] 代表空字符串和空正则 所以为true
                dp[i][j] = true
                continue
            }else if(i = ){
                
            }else if(i == 0 && j >= 2){
                //
                dp[i][j] = p[j - 1] == '*' && dp[0][j - 2]
            }else if(){

            }else{
                // 状态转移方程 分类讨论
                if(p[j - 1] == '*'){
                    // 如果当前正则字符是 *
                    dp[i][j] = dp[i][j - 2] || (dp[i - 1][j - 1] && check(i - 1, j - 2))
                }else{
                    dp[i][j] = dp[i - 1][j - 1] && check(i - 1, j - 1)
                }
            }

        }
    }
    return !!dp[sl][pl]
};
// @lc code=end
