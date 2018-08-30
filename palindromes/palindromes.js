const palindromes = function(word) {
    let arr = []
    let new_arr = []
    arr = word.split("")
    // console.log(arr)
    new_arr = arr.reverse()
    // console.log(arr)
    new_arr = new_arr.join("")
    return new_arr;
}

module.exports = palindromes
