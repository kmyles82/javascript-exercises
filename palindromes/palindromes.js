const palindromes = function(word) {
    let new_word = word.toLowerCase().replace(/[^A-Za-z]/g, "");
    if (new_word.split("").reverse().join("") == new_word) {
        return true;
    } else {
        return false;
    }
}

module.exports = palindromes
