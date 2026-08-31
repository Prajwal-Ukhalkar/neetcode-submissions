class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
           if (s.length !== t.length) {
            return false;
        }

        const isSsorted = s.split("").sort().join("");
        const isTsorted = t.split("").sort().join("")   

        if(isSsorted === isTsorted) return true;
        return false

    }
}
