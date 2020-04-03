import {getStore} from '../../__test__/utils/helpers';
import {setProjectNext, setProjectPrev, triggerProjectNext, triggerProjectPrev} from './actions';

describe('Project', () => {
    it('handle set next project', () => {
        const state = {project: {current: 0}};
        const store = getStore(state);
        const value = {current: 1};

        store.dispatch(setProjectNext(value));

        const {project} = store.getState();

        expect(project).toEqual(value);
    });

    it('handle set previous project', () => {
        const state = {project: {current: 2}};
        const store = getStore(state);
        const value = {current: 1};

        store.dispatch(setProjectPrev(value));

        const {project} = store.getState();

        expect(project).toEqual(value);
    });

    it('handle trigger next project', () => {
        const state = {project: {handleNext: false}};
        const store = getStore(state);
        const value = {handleNext: true};

        store.dispatch(triggerProjectNext(value));

        const {project} = store.getState();

        expect(project).toEqual(value);
    });

    it('handle trigger previous project', () => {
        const state = {project: {handlePrev: false}};
        const store = getStore(state);
        const value = {handlePrev: true};

        store.dispatch(triggerProjectPrev(value));

        const {project} = store.getState();

        expect(project).toEqual(value);
    });
});
