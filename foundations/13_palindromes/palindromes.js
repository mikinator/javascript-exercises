const palindromes = function (word) {
    word = [...word].filter(char => char.toLowerCase() != char.toUpperCase() 
    || /[0-9]/.test(char)).join('').toLowerCase();
    let wordLength = word.length - 1;
    for (let i = 0; i < word.length; i++) {
        if (word[i] != word[wordLength--]) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
