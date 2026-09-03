class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map()
        for(const words of strs) {
            const count = new Array(26).fill(0);
            for(const ch of words) {
                const index = ch.charCodeAt(0) - "a".charCodeAt(0);
                count[index]++
            }
            const key = count.join("@")

            if(!map.has(key)) {
                map.set(key, [])
            }
            map.get(key).push(words)
        }

        return [...map.values()]
    }
}
