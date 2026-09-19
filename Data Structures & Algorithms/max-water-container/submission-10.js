class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxwater=0;
        let l = 0;
        let r = heights.length-1;

        while(l < r) {
           const w = r-l;
           const h = Math.min(heights[l],heights[r])
            const currentWater = w*h;
            maxwater = Math.max(maxwater,currentWater)

            heights[l] < heights[r] ? l++ : r--;
        }

        return maxwater
    }
}
