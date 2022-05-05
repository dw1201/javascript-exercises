const palindromes = function (word) {
    let removeNonAlpha = /[\W_]/g;
    let lowerCase = word.toLowerCase().replace(removeNonAlpha, "");
    let reverse = lowerCase.split('').reverse('').join('');
    return reverse === lowerCase;

};

// Do not edit below this line
module.exports = palindromes;
