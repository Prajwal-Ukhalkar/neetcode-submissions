class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b)
        let ans = []
        for(let i=0; i < nums.length-1; i++) {
             // Skip duplicate values for the first element to avoid duplicate triplets
        if (i > 0 && nums[i] === nums[i - 1]) continue;
            let j = i+1;
            let k = nums.length - 1;
            
            while(j<k) {
                let sum = nums[i]+nums[j]+nums[k]
                if(sum > 0) {
                    k--
                } else if (sum < 0) {
                    j++
                }
                else {
                    ans.push([nums[i], nums[j], nums[k]]);
                    // Skip duplicate values for the second element
                    while (j < k && nums[j] === nums[j + 1]) j++;
                    // Skip duplicate values for the third element
                    while (j < k && nums[k] === nums[k - 1]) k--;
                    j++,k--
                }
            }
        }
        return ans;
    }
}
