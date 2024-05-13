function FindLargestString(stringArray) {
    let longestString = "";

    for (let i = 0; i < stringArray.length; i++) {
        const currentString = stringArray[i];

        if (currentString.length > longestString.length) {
            longestString = currentString;
        }
    }
    console.log(longestString);
}

let myString = ['apple', 'banana', 'pineapple'];
FindLargestString(myString)
