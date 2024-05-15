//Remove Given Element
function removeElement(arr, val) {
    let i = 0;

    for (let j = 0; j < arr.length; j++) {
        if (arr[j] !== val) {
            arr[i] = arr[j];
            i++
        }
    }
    console.log(i);
}

let arr = [3, 2, 2, 3];
let val = 2


let len = removeElement(arr, val);
