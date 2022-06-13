import VariantsEnum from '@/enums/VariantsEnum';
import handleResponseStatus from './handleResponseStatus';

describe('Helper - handleResponseStatus', () => {
    it('returns `success` variant on status 2**', () => {
        const value = handleResponseStatus(200);

        expect(value).toBe(VariantsEnum.success);
    });

    it('returns `warning` variant on status 4**', () => {
        const value = handleResponseStatus(404);

        expect(value).toBe(VariantsEnum.danger);
    });

    it('returns `danger` variant on status 5**', () => {
        const value = handleResponseStatus(500);

        expect(value).toBe(VariantsEnum.danger);
    });

    it('returns `info` variant if no status match', () => {
        const value = handleResponseStatus(304);

        expect(value).toBe(VariantsEnum.info);
    });
});
