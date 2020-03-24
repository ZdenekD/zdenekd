import {getStore} from '../../__test__/utils/helpers';
import {setProject} from './actions';

describe('Project', () => {
    const initialState = {project: {current: 0}};

    it('handle set current project', () => {
        const store = getStore(initialState);
        const value = {current: 1};

        store.dispatch(setProject(value));

        const {project} = store.getState();

        expect(project).toEqual(value);
    });
});
