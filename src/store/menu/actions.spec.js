import {getStore} from '../../__test__/utils/helpers';
import {toggleMenu, handleMenuAnimation} from './actions';

describe('Menu', () => {
    const initialState = {
        menu: {
            isOpen: false,
            isAnimated: false,
        },
    };

    it('handle toggle menu action', () => {
        const store = getStore(initialState);
        const value = true;
        const expected = {
            isOpen: value,
            isAnimated: false,
        };

        store.dispatch(toggleMenu(value));

        const state = store.getState().menu;

        expect(state).toEqual(expected);
    });

    it('handle menu animation action', () => {
        const store = getStore(initialState);
        const value = true;
        const expected = {
            isOpen: false,
            isAnimated: value,
        };

        store.dispatch(handleMenuAnimation(value));

        const state = store.getState().menu;

        expect(state).toEqual(expected);
    });
});
