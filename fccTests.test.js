const convertToF = require('./convertCtoF');
const reverseString = require('./reverseString');
const factorialize = require('./factorializeNumber');

describe('Convert Fahrenheit to Celsius', () => {
	it('should return -22 if it is -30 celsius', () => {
		expect(convertToF(-30)).toEqual(-22);
	});

	it('should return 14 if it is -10 celsius', () => {
		expect(convertToF(-10)).toBe(14);
	});

	it('should return 32 if it is 0 celsius', () => {
		expect(convertToF(0)).toEqual(32);
	});

	it('should return 68 if it is 20 celsius', () => {
		expect(convertToF(20)).toEqual(68);
	});

	it('should return 86 if it is 30 celsius', () => {
		expect(convertToF(30)).toEqual(86);
	});
});

describe('Reverse a String', () => {
	it('should return "olleh" if the string is hello', () => {
		expect(reverseString('hello')).toEqual('olleh');
	});

	it('should return "ydwoH" if the string is Howdy', () => {
		expect(reverseString('Howdy')).toEqual('ydwoH');
	});

	it('should return the string in reverse', () => {
		expect(reverseString('Greetings from Earth')).toBe(
			'htraE morf sgniteerG'
		);
	});
});

describe('Factorialize a Number', () => {
	it('should equal 120', () => {
		expect(factorialize(5)).toBe(120);
	});

	it('should equal 3628800', () => {
		expect(factorialize(10)).toBe(3628800);
	});

	it('should equal 2432902008176640000', () => {
		expect(factorialize(20)).toBe(2432902008176640000);
	});

	it('should equal 1', () => {
		expect(factorialize(0)).toBe(1);
	});
});
