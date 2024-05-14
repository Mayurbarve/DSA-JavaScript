let arr =["apple", 'Microsoft', 'Google'];


function FindLargestElemnet(ArrayString){
    let longestString= "";

    for(let i = 0; i< ArrayString.length; i++){
        const currentSting = ArrayString[i];

        if (currentSting.length > longestString.length){
            longestString = currentSting;
        }
    }
    console.log(longestString);

}

FindLargestElemnet(arr)