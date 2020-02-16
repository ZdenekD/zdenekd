import {getStore} from '../../__test__/utils/helpers';
import {handleAppAnimation} from './actions';

describe('App', () => {
    const initialState = {app: {isAnimated: false}};

    it('handle app animation action', () => {
        const store = getStore(initialState);
        const value = true;
        const expected = {isAnimated: value};

        store.dispatch(handleAppAnimation(value));

        const state = store.getState().app;

        expect(state).toEqual(expected);
    });
});
