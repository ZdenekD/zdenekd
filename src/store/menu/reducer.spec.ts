import initialState from './initialState';
import reducer from './reducer';
import {IMenu} from './types';
import {ActionsEnum} from './types/actions';

describe('Reducer/Menu', () => {
    it('change state on `setMenu` action', () => {
        const value: IMenu = {menu: {isOpen: true}};
        const action = {type: ActionsEnum.set, payload: value};
        const state = reducer(initialState, action);

        expect(state).toEqual(value);
    });
});
