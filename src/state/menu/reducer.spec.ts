import reducer from './reducer';
import IMenu, {initialState} from './type';
import setMenu from './actions';

describe('Menu reducer', () => {
    it('change state on `setMenu` action', () => {
        const value: IMenu = {menu: {isOpen: true}};
        const state = reducer(initialState, setMenu(value));

        expect(state).toEqual(value);
    });
});
