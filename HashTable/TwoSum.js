function TowSum(arr,target){
    const NumObj={};

    for (let i = 0; i< arr.length; i++){
        const num = arr[i];
        const Complement = target - num;

        if(NumObj.hasOwnProperty(Complement)){
            return[NumObj[Complement],i];
        }
        NumObj[num] = i;
    }
    return []

}
let arr = [4,5,9];
TowSum(arr,9);