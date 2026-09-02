class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
     twoSum(nums, target) {
        let map = new Map()
        for(let i = 0; i < nums.length; i++) {
            let complementary = target - nums[i];
            if(map.has(complementary)) return [i, map.get(complementary)]
            map.set(nums[i], i)
        }
    }
}
