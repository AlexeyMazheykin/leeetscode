// const nums = [1,2,3]
//
// function findPivot(nums = []) {
//
//     for (let i = 0; i <= nums.length-1; i++) {
//         var leftSum = 0
//         var rightSum = 0
//         leftSum = nums.slice(0, -(nums.length-i)).reduce(function(sum, elem) {
//             return sum + elem;
//         }, 0)
//         rightSum = nums.slice(i+1).reduce(function(sum, elem) {
//             return sum + elem;
//         }, 0);
//         if (leftSum === rightSum) {
//             return i
//         }
//     }
//     return -1
// }
//
// console.log(findPivot(nums));

const nums = [1,7,3,6,5,6]
var pivotIndex = function(nums) {
    total = nums.reduce((acc, item) => acc += item, 0);
    let leftSum = 0;

    for (let i = 0; i < nums.length; i++){
        rightSum = total - nums[i] - leftSum
        if (leftSum == rightSum)
            return i
        leftSum += nums[i]
    }
    return -1
};
pivotIndex(nums)