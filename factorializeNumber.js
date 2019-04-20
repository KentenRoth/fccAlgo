function factorialize(num) {
	if (num === 0) return 1;

	for (i = num - 1; i >= 1; i--) {
		num = num * i;
	}
	return num;
}

module.exports = factorialize;

// factorial of 5 would be 5 * 4 * 3 * 2 * 1
