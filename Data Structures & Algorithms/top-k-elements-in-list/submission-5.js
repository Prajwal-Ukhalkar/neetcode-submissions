class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        
        // better sol (O(nlogn))
        // const map = new Map()
        // for(const n of nums) {
        //     map.set(n, (map.get(n) || 0) + 1)
        // }

        // const arr = [...map.entries()]
        // const freq =  arr.sort((a,b) => b[1]-a[1]).slice(0,k).map((top) => top[0]);
        // return freq; 

        const map = new Map();

        //count the frequency of array elements
        for(const n of nums) {
            map.set(n,(map.get(n) || 0) + 1)
        }

        // initialize the bucket
        const bucket = new Array(nums.length + 1).fill().map(() => [])

        // loop over the map and insert it in bucket
        for(const [n,freq] of map) {
            bucket[freq].push(n)
        }

        // traverse the bucket in reverse uptil k
        const res = []
        for(let i = bucket.length-1; i>0; i--) {
           for(const n of bucket[i]) {
            res.push(n)

            if(res.length == k) return res
           }

        }
    }
}
