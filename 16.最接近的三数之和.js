/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 *
 * https://leetcode-cn.com/problems/3sum-closest/description/
 *
 * algorithms
 * Medium (43.02%)
 * Likes:    365
 * Dislikes: 0
 * Total Accepted:    74.6K
 * Total Submissions: 173.5K
 * Testcase Example:  '[-1,2,1,-4]\n1'
 *
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target
 * 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
 * 
 * 例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.
 * 
 * 与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let len = nums.length
    nums.sort((a, b) => a - b)
    let max = target - (nums[0] + nums[1] + nums[2])
    if(nums.length == 3){
        return target - max
    }
    for(let i = 0; (i < nums.length -1) && max != 0; i++){
        let l = i + 1
        let r = len - 1
        while(l < r){
            let sum = nums[i] + nums[l] + nums[r]
            max = Math.abs(target - sum) > Math.abs(max) ? max : target - sum
            if(sum > target){
                r--
            }else{
                l++
            }
        }
    }
    return target - max
};
// @lc code=end

