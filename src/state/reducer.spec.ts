import reducer from './reducer';
import initialState from './initialState';
import setMenu from './menu/actions';
import IState from './type/state';
import IMenu from './menu/type';

describe('Reducer', () => {
    it('change only reduced part of state', () => {
        const state: IState = initialState;
        const value: IMenu = {menu: {isOpen: true}};
        const expected = {
            ...state,
            menu: {isOpen: true},
        };

        expect(reducer(state, setMenu(value))).toMatchObject(expected);
    });
});
