import {getStore} from '../../__test__/utils/helpers';
import {toggleMenu, handleMenuAnimation} from './actions';

describe('Menu', () => {
    const defaultProps = {
        menu: {
            isOpen: false,
            isAnimated: false,
        },
    };

    it('handle toggle menu action', () => {
        const store = getStore(defaultProps);
        const value = {
            isOpen: true,
            isAnimated: false,
        };

        store.dispatch(toggleMenu(value));

        const {menu} = store.getState();

        expect(menu).toEqual(value);
    });

    it('handle menu animation action', () => {
        const store = getStore(defaultProps);
        const value = {
            isOpen: false,
            isAnimated: true,
        };

        store.dispatch(handleMenuAnimation(value));

        const {menu} = store.getState();

        expect(menu).toEqual(value);
    });
});
