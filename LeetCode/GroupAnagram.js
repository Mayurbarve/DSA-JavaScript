//49. Groop Anagram 

var groupAnagrams = function (str){
    const anagramMap = new Map();

    for (let word of str){

        const sortedStr = word.splip('').sort().join('')

        if(anagramMap.has(sortedStr)){
            anagramMap.get(sortedStr).push(word)
        }
        else{
            anagramMap.set(sortedStr,[word]);
        }
    }
    return Array.from(anagramMap.values())
}
const strs1 = ["eat","tea","tan","ate","nat","bat"]
const strs2 = [""]
const strs3 = ["a"]

console.log(groupAnagrams(strs1))
console.log(groupAnagrams(strs2))
console.log(groupAnagrams(strs3))