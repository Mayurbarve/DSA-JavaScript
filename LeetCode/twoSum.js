//1 Two Sum 
function twoSum(nums, target){
    const numSet = new Set() //unique set 

    for ( let i = 0; i< nums.length; i++){
        let complement = target - nums[i]

        if (numSet.has(complement)){ 
            const complementIndex = nums.indexOf(complement)
            return [complementIndex, i]
        }
        numSet.add(nums[i])
    }
    return[]
}

const nums1 = [2,7,6,8], target1 = 9;
const nums2 = [2,7,4,8], target2 = 6;
const nums3 = [4,3,3], target3 = 6;

console.log(twoSum(nums1,target1));
console.log(twoSum(nums2,target2));
console.log(twoSum(nums3,target3));