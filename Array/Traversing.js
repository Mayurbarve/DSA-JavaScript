//Traversing 
//target = 4
let arr = [1, 2, 3, 4, 5, 6];
let TargetNumber = 7;
let found = false;

for (let i = 0; i <= arr.length; i++) {
    //console.log(arr[i])

    if (arr[i] == TargetNumber){
        found = true;
        console.log("Target Number are Found at inde",i);
        break;
    }
    
}

if(!found){
    console.log("Target Not Found in this array");
}

