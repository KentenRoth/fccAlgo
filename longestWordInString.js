function findLongestWordLength(str) {
	let newString = str.split(' ').sort(function(a, b) {
		if (a.length < b.length) {
			return 1;
		} else if (b.length > a.length) {
			return -1;
		} else {
			return 0;
		}
	});
	return newString[0].length;
}

findLongestWordLength('The quick brown fox jumped over the lazy dog'); //should return 6

module.exports = findLongestWordLength;
