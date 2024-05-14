//Insertion using splice

let arr= [22,33,44,66,77];

function Insertion(arr,index,element){
    arr.splice(index,0,element);
    console.log(arr);
}

Insertion(arr,3,55);

//Insertion using for loop
let arra =[1,2,3,5,6];

function InsertionElement(arra,index,element){
    let newArr = [];

    for(let i=0; i < arra.length; i++){

        if(i === index){
            newArr.push(element);
        }
        newArr.push(arra[i])
    }
    console.log(newArr);
}

InsertionElement(arra,3,4)