import initialState from './initialState';
import reducer from './reducer';
import {IProject} from './types';
import {ActionsEnum} from './types/actions';

describe('Project reducer', () => {
    it('change state on `setProject` action', () => {
        const value: IProject = {
            project: {
                index: 2,
                isFirst: false,
                isLast: false,
            },
        };
        const action = {type: ActionsEnum.set, payload: value};
        const state = reducer(initialState, action);

        expect(state).toEqual(value);
    });
});
