let containDuplicate = function (nums) {
    let UniqueSet = new Set();

    for (let num of nums) {
        if (UniqueSet.has(num)) {
            return true;
        }
        UniqueSet.add(num);
    }
    return false;
}

//test cases
let inp1 = [1, 2, 3, 1]  //true
let inp2 = [1, 2, 3, 4]  //false
let inp3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]  //true

//Pass test cases to funtion and print
console.log(containDuplicate(inp1));
console.log(containDuplicate(inp2));
console.log(containDuplicate(inp3));