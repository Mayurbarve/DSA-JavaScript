//Deletion
let arr = [1,2,3,4,5];

function deleteElement(arr,index){
    arr.splice(index,1);
    console.log(arr);
}

deleteElement(arr,2)