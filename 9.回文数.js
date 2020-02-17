/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0){
        return false
    }
    if(x < 10){
        return true
    }
    let length = x.toString().length
    let b = Math.pow(10, length - 1)

    while(x != 0){
        if(Math.floor(x / b) == x % 10){
            x = Math.floor((x % b) / 10)
            // 特殊情况 去头去尾后 开头都是0的问题 但是通过数学因素 可以避免 神奇 在推导理论中
            b /= 100

        }else{
            return false
            break
        }
    }
    return true
};
// @lc code=end
