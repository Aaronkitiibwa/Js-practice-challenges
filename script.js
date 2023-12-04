
// section II number III
function singleNumber(nums){
    for(const num of nums){
      // If occurance is the same as the last occurance,the element is unique
      if(nums.indexOf(num) === nums.lastIndexOf(num)){
        return num;
      }
    }
    return null;
  }
  
  const nonemptyArray = [5,3,4,2,4,6];
  console.log(singleNumber(nonemptyArray));