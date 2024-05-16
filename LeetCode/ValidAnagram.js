//242. Valid Anagram


var inAnagram = function(s,t){
    if(s.length !== t.length){
        return false;
    }

    //Now Split Sort and join the string and then compare it
    const SortedS = s.split('').sort().join('');
    const SortedT = t.split('').sort().join('');

    return SortedS == SortedT
}

//test Example 
const s1 = "anagram", t1 = "nagaram"
const s2 = "rat", t2 = "car"


console.log(inAnagram(s1,t1));
console.log(inAnagram(s2,t2));