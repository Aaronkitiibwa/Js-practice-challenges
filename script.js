
//section II number II
function containsDuplicate(nums){
    
    const duplicateSet = new Set();
  
    for(const num of nums){
      //if the set already has the current element, its duplicate
      if(duplicateSet.has(num)){
        return true;
      }
      // if not add current element to the duplicateSet
      duplicateSet.add(num);
    }
  
    return false;
  }
  
  const inputArray =[3,1,2,5,8,2];
  console.log(containsDuplicate(inputArray));