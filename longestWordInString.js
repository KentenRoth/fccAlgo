function findLongestWordLength(str) {
	let longestWord = str.split(' ').sort(function(a, b) {
		return b.length - a.length;
	});
	return longestWord[0].length;
}

findLongestWordLength('The quick brown fox jumped over the lazy dog'); //should return 6

module.exports = findLongestWordLength;
