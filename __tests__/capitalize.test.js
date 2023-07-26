
const capitalize = require('../src/capitalize');

describe('capitalize function', () => {
  test('should capitalize the first character of the string', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('world')).toBe('World');
  });
});
