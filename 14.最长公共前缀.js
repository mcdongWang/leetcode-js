/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length == 0){
        return ''
    }
    strs.sort(function (a, b){return a.length - b.length})
    let max = strs[0].length

    for(let i = 1; max != 0 && i < strs.length; i++){
        for(let j = 0; j < max; j++){
            if(strs[i][j] != strs[0][j]){
                max = j
                if(max == 0){
                    return ''
                }
                break
            }
        }
    }

    return strs[0].substring(0, max)
};
// @lc code=end
