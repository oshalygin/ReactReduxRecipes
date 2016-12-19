import expect from 'expect';

describe('Client Sanity Check', () => {
  describe('Simple math', () => {
    it('5+5 = 10', () => {
      const expected = 10;

      const firstValue = 5;
      const secondValue = 5;
      const actual = firstValue + secondValue;

      expect(actual).toEqual(expected);
    });
  });
});