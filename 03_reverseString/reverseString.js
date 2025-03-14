const reverseString = function(word) {
    const myArray = word.split("");
    let finalWord = "";
    for (let i = myArray.length-1; i >= 0; i--) {
        finalWord = finalWord + myArray[i];
    }
    return finalWord;
};

// Do not edit below this line
module.exports = reverseString;
