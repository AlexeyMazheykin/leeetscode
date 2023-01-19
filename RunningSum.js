const nums = [1,2,3,4]

const runningSum = function(nums) {
   return nums.reduce((acc, cur, i)=>{
       if (i === 0) return [...acc, cur]
       return [...acc, acc[i-1]+cur]

    }, [])
};
const res = runningSum(nums)
console.log(res)