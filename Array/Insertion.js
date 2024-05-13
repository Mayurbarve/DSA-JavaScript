let arr = [1,2,3,4,5];

//insert method 1
function insertElement(arr,index,element){
    arr.splice(index,0,element)
    console.log(newArr);
}

insertElement(arr,2,8);



//insert method 2
let arrr = [11,22,33,44,55];
function insertElement(arrr,index,element){
    let newArr1 = [];

    for(let i = 0; i < arrr.length; i++){
        if(i === index){
            newArr1.push(element);
        }
        newArr1.push(arrr[i])
    }
    console.log(newArr1)
}

insertElement(arrr,2,88);
