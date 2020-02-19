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
        for(let j = 0; j <= pl; j++){
            // 初始化为null
            dp[i][j] = false
            if(i == 0 && j == 0){
                // dp[0][0] 代表空字符串和空正则 所以为true
                dp[i][j] = true
                continue
            }else if(j == 0){
                // 正则为空 则一定为false
                dp[i][j] = false                
            }else if(i == 0 && j >= 2){
                // 如果 X* 组合的连续 则 可匹配空字符串
                 dp[i][j] = p[j - 1] == '*' && dp[i][j - 2]
            }else if(i == 0 && j == 1){
                // 处理 dp[0][1]
                dp[i][j] = false
            }else{
                // 状态转移方程 分类讨论
                if(p[j - 1] == '*'){
                    
                    
                    // 当前正则字符是 *
                    // dp[i][j] = 
                    //     // a/a => a/ab*
                    //     dp[i][j - 2]
                    //     // 
                    //     || dp[i][j - 1]
                    //     // a/ab* => aa/ab*a*
                    //     || (dp[i - 1][j - 2] && check(i, j - 1)) 
                    //     // a/a => aa/a*
                    //     || dp[i - 1][j - 1] && check(i, j - 1)
                    //     // ' '/.* => ... =>  aaa/.*
                    //     || dp[i - 1][j] && s[i - 1] == s[i - 2] 
                }else{
                    // 当前正则字符不是 * 
                    dp[i][j] = dp[i - 1][j - 1] && check(i, j)
                }
            }

        }
    }
    console.log(dp)
    return !!dp[sl][pl]
};
// @lc code=end
