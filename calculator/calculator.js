function add (num1, num2) {
	return num1 + num2
}

function subtract (num1, num2) {
	return num1 - num2;
}

function sum (arr) {
    let total = 0;
    if (arr.length <= 0) {
        return total ;
    }
	return total = arr.reduce(add);

}

function multiply (arr) {
	let total = 0;
    if (arr.length <= 0) {
        return total ;
    }
	return total = arr.reduce((currentNum, total) => currentNum * total);
}

function power(num, exp) {
	return Math.pow(num, exp);
}



module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}