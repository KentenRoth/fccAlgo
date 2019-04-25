function confirmEnding(str, target) {
	let string = str.toLowerCase();
	let cut = string.length - target.length;
	let sliced = string.slice(cut, str.length);

	return sliced === target.toLowerCase() ? true : false;
}

console.log(confirmEnding('Bastian', 'n')); // should return true

module.exports = confirmEnding;

// Checks to see if the target matches the ending of the string
