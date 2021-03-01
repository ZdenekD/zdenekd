import regex from './regex';

describe('Helper - regex', () => {
    it('returns `true` if text contains only valid characters', () => {
        const value = 'Toto je nejneobhospodařovávanější útočná puška! Je to tak?';

        expect(regex.text.test(value)).toBe(true);
    });

    it('returns `false` if text contains forbidden characters', () => {
        const value = 'Na 100% je použit zakázaný znak.';

        expect(regex.text.test(value)).toBe(false);
    });

    it('returns `true` if name contains only valid characters', () => {
        const value = 'Jméno a příjmení';

        expect(regex.name.test(value)).toBe(true);
    });

    it('returns `false` if name contains forbidden characters', () => {
        const value = 'Jméno a příjmení!';

        expect(regex.name.test(value)).toBe(false);
    });

    it('returns `true` if phone is in correct format', () => {
        const value = '+421712345678';

        expect(regex.phone.test(value)).toBe(true);
    });

    it('returns `false` if phone length is not correct', () => {
        const value = '12345678';

        expect(regex.phone.test(value)).toBe(false);
    });

    it('returns `false` if phone national code is not correct', () => {
        const value = '+450123456789';

        expect(regex.phone.test(value)).toBe(false);
    });

    it('returns `false` if phone starts with zero', () => {
        const value = '012345678';

        expect(regex.phone.test(value)).toBe(false);
    });

    it('returns `true` if e-mail is in correct format', () => {
        const value = 'email@email.com';

        expect(regex.email.test(value)).toBe(true);
    });

    it('returns `false` if e-mail is not in correct format', () => {
        const value = 'email@email';

        expect(regex.email.test(value)).toBe(false);
    });
});
