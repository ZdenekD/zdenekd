import reducer from './reducer';
import IProject, {initialState} from './type';
import setProject from './actions';

describe('Project reducer', () => {
    it('change state on `setProject` action', () => {
        const value: IProject = {
            project: {
                index: 2,
                isFirst: false,
                isLast: false,
            },
        };
        const state = reducer(initialState, setProject(value));

        expect(state).toEqual(value);
    });
});