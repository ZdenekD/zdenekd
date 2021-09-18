import reducer from './reducer';
import initialState from './initialState';
import {IAnimation} from './types';
import {ActionsEnum} from './types/actions';

describe('Animation reducer', () => {
    it('change state on `setAnimation` action', () => {
        const value: IAnimation = {animation: {isAsideAnimated: true}};
        const action = {type: ActionsEnum.set, payload: value};
        const state = reducer(initialState, action);

        expect(state).toEqual(value);
    });
});
