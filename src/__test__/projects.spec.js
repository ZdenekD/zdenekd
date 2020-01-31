import {factory, findComponent} from '../../__test__/utils/helpers';
import Projects from '../pages/projects';

describe('Projects page', () => {
    it('renders wihout error', () => {
        const site = 'projects';
        const wrapper = factory(Projects, {site});
        const component = findComponent(wrapper, 'component-main');

        expect(component.length).toBe(1);
    });
});
