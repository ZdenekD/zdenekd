import {factory, findComponent} from '../../../__test__/utils/helpers';
import Main from './index';
import DATA from '../../../data/pages';

describe('Main', () => {
    it('renders wihout error', () => {
        const site = Object.keys(DATA)[0];
        const wrapper = factory(Main, {site});
        const component = findComponent(wrapper, 'component-main');

        expect(component.length).toBe(1);
    });
});
