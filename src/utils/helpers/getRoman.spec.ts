import getRoman from './getRoman';

describe('Helper - getRoman', () => {
    it('convert arabic number to roman', () => {
        const value = 2020;
        const number = getRoman(value);
        const expected = 'MMXX';

        expect(number).toBe(expected);
    });
});
