/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 *
 * https://leetcode-cn.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (28.46%)
 * Likes:    1748
 * Dislikes: 0
 * Total Accepted:    181.4K
 * Total Submissions: 637K
 * Testcase Example:  '"babad"'
 *
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 * 
 * 示例 1：
 * 
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba" 也是一个有效答案。
 * 
 * 
 * 示例 2：
 * 
 * 输入: "cbbd"
 * 输出: "bb"
 * 
 * 
 */

// @lc code=start
// Manacher's Algorithm
// 对每个字符间 增加 ‘#’ 解决 奇数回文 和 偶数回文的问题

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
	var s_len=s.length
	if(s_len<2){
    	return s
    }
	var string=s[0]
    var s_len_1=s_len-1
    var start=0
    var end=0
    for(var i=0;i<s_len_1;i++){
    	let this_end_i=i
    	while(this_end_i<s_len_1&&s[this_end_i]==s[this_end_i+1]){
    		this_end_i++
    	}
    	let i2=this_end_i
    	while(i>0&&this_end_i<s_len_1&&s[i-1]==s[this_end_i+1]){
    		i--
    		this_end_i++
    	}
    	if(this_end_i-i>end-start){
    		start=i
    		end=this_end_i
    	}
    	i=i2
    }	
    string=s.slice(start,end+1)
    return string
};
// @lc code=end

