//Objects
const obj = {
    name: "Mayura",
    age: 22,
    city: "Nagpur"
}
console.log(obj);

//get keys from object
console.log(Object.keys(obj)); //Complexity O(n)

//get values from object
console.log(Object.values(obj)); //Complexity O(n)

//get entries from object
console.log(Object.entries(obj)); //Complexity O(n)

//Object has own Properties
console.log(Object.hasOwnProperty("name")); //Complexity O(1)


//Array
let arr =[1,2,3];

//Constant time oprations
arr.push(11) // [1, 2, 3, 11] Complexity O(1) 
arr.pop(); // [1, 2, 3] Complexity O(1)


//unsift change the indexing of all elements
arr.unshift(4) // [4, 1, 2, 3] Complexity O(n) 

console.log(arr);