class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let longest = 0;

        for (const num of set) {
            // only start counting if its the first num in seq
            if(!set.has(num-1)) {
                let currentSeqNum = num;
                let currentSeqLen = 1

                // while the sequence present in set
                while(set.has(currentSeqNum+1)) {
                    currentSeqNum++;
                    currentSeqLen++
                }

                longest = Math.max(longest, currentSeqLen)
            }
        }

        return longest
    }
}
