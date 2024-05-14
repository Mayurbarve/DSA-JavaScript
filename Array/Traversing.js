let arr = [11,22,33,44,55,66];
let TargetElement = 55;
let found = false;

function Traversing(arr){
    for(let i =0; i<arr.length;i++){

        if(arr[i]==TargetElement){
            found = true;
            console.log("Target element found in index number ",i);
            break;
        }
    }
    if(!found){
        console.log("Target element not in the array");
    }
}

Traversing(arr)