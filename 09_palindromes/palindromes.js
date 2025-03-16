const palindromes = function (word) {
 let cleanWord = word.replace(/[^\w]/g, '').toLowerCase(); //[^\w] matches everything except letters (A-Z, a-z), numbers (0-9), and underscores (_)
 return cleanWord === cleanWord.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
