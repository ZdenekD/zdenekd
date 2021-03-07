import reducer from './reducer';
import ICursor, {initialState} from './type';
import {setCursor, unsetCursor} from './actions';

describe('Cursor reducer', () => {
    it('change state on `setCursor` action', () => {
        const value: ICursor = {
            cursor: {
                isStuck: true,
                props: {
                    width: 100,
                    height: 100,
                    top: 10,
                    left: 10,
                },
            },
        };
        const state = reducer(initialState, setCursor(value));

        expect(state).toEqual(value);
    });

    it('change to initial cursor state on `unsetCursor` action', () => {
        const value: ICursor = initialState;
        const state = reducer(initialState, unsetCursor());

        expect(state).toEqual(value);
    });
});
