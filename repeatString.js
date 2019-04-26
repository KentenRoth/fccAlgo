function repeatStringNumTimes(str, num) {
	let repeating = str.repeat(num);
	return repeating;
}

repeatStringNumTimes('abc', 3); //should return abcabcabc

module.exports = repeatStringNumTimes;

// string should repeat itself by the num number of times
