/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 *
 * https://leetcode-cn.com/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (36.78%)
 * Likes:    2158
 * Dislikes: 0
 * Total Accepted:    141.9K
 * Total Submissions: 385.6K
 * Testcase Example:  '[1,3]\n[2]'
 *
 * 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
 * 
 * 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
 * 
 * 你可以假设 nums1 和 nums2 不会同时为空。
 * 
 * 示例 1:
 * 
 * nums1 = [1, 3]
 * nums2 = [2]
 * 
 * 则中位数是 2.0
 * 
 * 
 * 示例 2:
 * 
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * 
 * 则中位数是 (2 + 3)/2 = 2.5
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let tmp = []
    let length = nums1.length + nums2.length
    let status = length % 2     // 偶数 0 奇数 1 
    length = Math.floor(length / 2)
    for(let i = 0; i <= length; i++){
        if(!nums1.length){
            tmp.push(nums2.shift())
            continue;
        }
        if(!nums2.length){
            tmp.push(nums1.shift())
            continue;
        }
        if(nums1[0] > nums2[0]){
            tmp.push(nums2.shift())
        }else{
            tmp.push(nums1.shift())
        }
    }

    if(status){
        return tmp.pop()
    }else{
        return (tmp.pop() + tmp.pop()) / 2;
    }
};
// @lc code=end

