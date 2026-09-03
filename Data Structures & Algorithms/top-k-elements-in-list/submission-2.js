class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map()
        for(const n of nums) {
            map.set(n, (map.get(n) || 0) + 1)
        }

        const arr = [...map.entries()]
        const freq =  arr.sort((a,b) => b[1]-a[1]).slice(0,k).map((top) => top[0]);
        return freq;
       
    }
}
