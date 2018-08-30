const palindromes = function(word) {
    let arr = []
    let str = word.toLowerCase().replace(/[^A-Za-z]/g, "");
    // let new_arr = []
    arr = str.split("").reverse().join("")
    // console.log(arr)
    // new_arr = arr.reverse()
    // console.log(arr)
    // new_arr = new_arr.join("")
    if (arr === str) {
        return true;    
    } else {
        return false;
    }
    
}

module.exports = palindromes
