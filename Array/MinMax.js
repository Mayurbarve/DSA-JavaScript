let arr  = [22,33,18,43,45]

function FindMinMax(arr){
    let Max = arr[0]
    let Min = arr[0]

    for(let i =0 ; i< arr.length; i++){
        if(arr[i] > Max){
            Max = arr[i];
        }

        if(arr[i]< Min){
            Min = arr[i];
        }
    }
    console.log("Maximum is",Max);
    console.log("Minimum is",Min);
}

FindMinMax(arr)