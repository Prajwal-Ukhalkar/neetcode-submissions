class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        for(const ch of strs) {
            const sorted = ch.split("").sort().join("")
            if(!map.has(sorted)) {
                map.set(sorted,[ch])
            }
            else{
            map.get(sorted).push(ch)
            }
        }

        return [...map.values()]
    }
}
