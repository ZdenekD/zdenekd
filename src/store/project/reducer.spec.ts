import reducer from './reducer';
import {IProject} from './type';
import initialState from './initialState';
import {ActionsEnum} from './type/actions';

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
