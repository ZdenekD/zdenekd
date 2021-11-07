import initialState from './initialState';
import reducer from './reducer';
import {ICursor} from './types';
import {ActionsEnum} from './types/actions';

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
        const action = {type: ActionsEnum.set, payload: value};
        const state = reducer(initialState, action);

        expect(state).toEqual(value);
    });

    it('change to initial cursor state on `unsetCursor` action', () => {
        const value: ICursor = initialState;
        const action = {type: ActionsEnum.unset};
        const state = reducer(initialState, action);

        expect(state).toEqual(value);
    });
});
