const reverseString = function(newWord) {
    let firstWord = "";
    newWord = "";

    if (firstWord != null) {
         // built in functions: split string into array, reverse array, join array into new string
    newWord = firstWord.split("").reverse("").join("");

    // Reverse using decrementing loop
    // for (i = firstWord.length - 1; i >= 0; i--) {
    //     newWord += firstWord[i];
    // }

    return(newWord);

    } else return("");

   
};

// Do not edit below this line
module.exports = reverseString;
