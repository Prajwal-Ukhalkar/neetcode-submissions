class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prodLeft = 1;
        let prodRight = 1;
        let suff = [];
        let pref = []

        // left prefix of array element
        for (let i = 0; i < nums.length; i++) {
            pref[i] = prodLeft;
            prodLeft *= nums[i];
        }

        // left prefix of array element
        for (let i = nums.length-1; i >=0 ; i--) {
            suff[i] = prodRight;
            prodRight *= nums[i];
        }

        // now multiply two pref ans suff array elements

        let res = new Array(nums.length)
        for(let i = 0; i < nums.length; i++) {
            res[i] = pref[i] * suff[i];
        }


        return res;
    }
}
