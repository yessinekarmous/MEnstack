function countEvenNegatives(nums) { 
    s=0
        for(i=0;i<=nums.length-1;i++){
            if((nums[i]%2==0)&&(nums[i]<0)){
                s=s+1
            }
        }
        return s
    
}


const nums1 = [1, 5, -1, 2, -4, 9, -10, 0, -3, -2];
const expected1 = 3;
var result1= countEvenNegatives(nums1)

const nums2 = [];
const expected2 = 0;
var result2= countEvenNegatives(nums2)

const nums3 = [-4, -2, -6];
const expected3 = 3;
var result3= countEvenNegatives(nums3)

console.log(result3, "should be", expected3);