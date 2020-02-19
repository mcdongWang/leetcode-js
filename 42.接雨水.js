/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 *
 * https://leetcode-cn.com/problems/trapping-rain-water/description/
 *
 * algorithms
 * Hard (48.48%)
 * Likes:    861
 * Dislikes: 0
 * Total Accepted:    54.1K
 * Total Submissions: 111.4K
 * Testcase Example:  '[0,1,0,2,1,0,1,3,2,1,2,1]'
 *
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 * 
 * 
 * 
 * 上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 感谢
 * Marcos 贡献此图。
 * 
 * 示例:
 * 
 * 输入: [0,1,0,2,1,0,1,3,2,1,2,1]
 * 输出: 6
 * 
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    // dp方案
    let len = height.length
    let l = [height[0]]     // 初始化左侧最高点数组
    let r = []      // 初始化右侧最高点数组
    r[len - 1] = height[len - 1]
    let v = [0]     // 初始化高度数组
    v[len - 1] = 0
    let result = 0

    for(let i = 1; i < len; i++){
        l[i] = Math.max(l[i - 1], height[i])
    }
    for(let i = len - 2; i >= 0; i--){
        r[i] = Math.max(r[i + 1], height[i])
    }
    for(let i = 1; i < len - 1; i ++){
        v[i] = Math.max((Math.min(l[i], r[i]) - height[i]), 0)
        result += v[i]
    }

    // 求和
    return result
};
// @lc code=end

