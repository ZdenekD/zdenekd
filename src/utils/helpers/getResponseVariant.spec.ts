import {VariantsEnum} from '@/enums';
import getResponseVariant from './getResponseVariant';

describe('Helper - handleResponseStatus', () => {
    it('returns `success` variant on status 2**', () => {
        const value = getResponseVariant(200);

        expect(value).toBe(VariantsEnum.success);
    });

    it('returns `warning` variant on status 4**', () => {
        const value = getResponseVariant(404);

        expect(value).toBe(VariantsEnum.danger);
    });

    it('returns `danger` variant on status 5**', () => {
        const value = getResponseVariant(500);

        expect(value).toBe(VariantsEnum.danger);
    });

    it('returns `info` variant if no status match', () => {
        const value = getResponseVariant(304);

        expect(value).toBe(VariantsEnum.info);
    });
});
