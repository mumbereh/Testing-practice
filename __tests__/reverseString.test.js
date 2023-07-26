
const reverseString = require('../src/reverseString');

describe('reverseString function', () => {
  test('should reverse the input string', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('racecar')).toBe('racecar');
    expect(reverseString('12345')).toBe('54321');
  });
});
