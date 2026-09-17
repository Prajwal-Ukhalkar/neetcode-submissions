class Solution {
    public int maxArea(int[] heights) {
        int len = heights.length;
        int ans = 0;
        int area = 0;

        int left = 0;
        int right = len-1;

        while(left<right){
            int mini = Math.min(heights[left], heights[right]);
            int diff = right-left;

            area = mini*diff;
            ans = Math.max(area, ans);

            if(heights[right]<heights[left]){
                right--;
            }
            else{
                left++;
            }
        }

        return ans;
    }
}
