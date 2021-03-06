import reducer from './reducer';
import initialState from './initialState';
import {IMenu} from './type';
import {ActionsEnum} from './type/actions';

describe('Reducer/Menu', () => {
    it('change state on `setMenu` action', () => {
        const value: IMenu = {menu: {isOpen: true}};
        const action = {type: ActionsEnum.set, payload: value};
        const state = reducer(initialState, action);

        expect(state).toEqual(value);
    });
});
