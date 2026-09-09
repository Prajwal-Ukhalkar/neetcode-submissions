class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
     
        const res = new Array(nums.length);
    let prodRight = 1;
    let prodLeft = 1;

    // use same res array for storing the prefix
    for(let i=0; i < nums.length; i++) {
        res[i] = prodLeft;
        prodLeft = prodLeft * nums[i];
    }

    
    for(let i = nums.length - 1; i >= 0; i--) {
        res[i] = prodRight * res[i];       // Use  the suffix product for this index.
        prodRight = prodRight * nums[i]    // Update suffix product for the next index.
    }
        return res;
    }
}
