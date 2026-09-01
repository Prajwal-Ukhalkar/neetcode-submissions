class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const freq = new Map();
        for (const ch of s) {
            freq.set(ch, (freq.get(ch) || 0) + 1)
        }

        for(const ch of t) {
            if(!freq.get(ch)) return false

            freq.set(ch, freq.get(ch) - 1)

            if(freq.get(ch) === 0) {
                freq.delete(ch)
            }
        }

        return freq.size === 0;
    }
}
