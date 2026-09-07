class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
     
        const res = new Array(nums.length);
    let prodRight = 1;
    let prodLeft = 1;

    for(let i=0; i < nums.length; i++) {
        res[i] = prodLeft;
        prodLeft = prodLeft * nums[i]
    }

    for(let i = nums.length - 1; i >= 0; i--) {
        res[i] = prodRight * res[i];
        prodRight = prodRight * nums[i]
    }
        return res;
    }
}
