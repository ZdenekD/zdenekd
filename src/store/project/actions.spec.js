import {getStore} from '../../__test__/utils/helpers';
import {setProjectNext, setProjectPrev} from './actions';

describe('Project', () => {
    it('handle set next project', () => {
        const state = {project: {current: 0}};
        const store = getStore(state);
        const value = {current: 1};

        store.dispatch(setProjectNext(value));

        const {project} = store.getState();

        expect(project).toEqual(value);
    });

    it('handle set prev project', () => {
        const state = {project: {current: 2}};
        const store = getStore(state);
        const value = {current: 1};

        store.dispatch(setProjectPrev(value));

        const {project} = store.getState();

        expect(project).toEqual(value);
    });
});
