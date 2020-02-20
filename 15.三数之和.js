/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // 数组长度不足时 直接返回
    if(nums.length < 3){
        return []
    }
    let result = []
    nums = nums.sort(function (a, b){
        return a - b
    })
    let len = nums.length
    for(let i = 0; nums[i] <= 0; i++){
        if(nums[i] == nums[i - 1]){
            continue
        }
        // 双指针
        let l = i + 1
        let r = len - 1
        while(l < r){
            let sum = nums[i] + nums[l] + nums[r]
            if(sum > 0) {
                r--
            }else if(sum < 0){
                l++
            }else{
                result.push([nums[i], nums[l], nums[r]])
                // 重复数字直接跳过
                while(l < r && nums[l] == nums[l + 1]){
                    l += 1
                }
                while(l < r && nums[r] == nums[r - 1]){
                    r -= 1
                }
                l++
                r--
            }
        }
    }
    return result
};
// @lc code=end
