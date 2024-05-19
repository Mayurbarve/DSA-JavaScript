function commonItem(arr1, arr2){
    let obj = {};

    for(let i = 0; i< arr1.length; i++){
        obj[arr1[i]] = true
    }

    for (let j =0; j< arr2.length; j++){
        if(obj[arr2[j]]){
            return true
        }
    }
    return false
}

console.log(commonItem([1,2,3],[3,4,5]));