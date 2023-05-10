const reverseString = require('../reverseString');

describe('Task 2', () => {
  test('"Hi" should be ih', () => {
    expect(reverseString('Hi')).toBe('iH');
  });
});
