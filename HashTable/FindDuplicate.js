function findDuplicates(nums){
    const numCount ={};

    for(let num of nums){
        numCount[num] = (numCount[num] || 0) +1
    }
    const duplicate =[];

    for (let key in numCount){
        if(numCount[key]> 1){
            duplicate.push(Number(key))
        }
    }
    return duplicate
}

console.log(findDuplicates([1,2,3,3,4,4,4]));