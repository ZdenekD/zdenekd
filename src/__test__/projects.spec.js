import {factory, findComponent} from './utils/helpers';
import Projects from '../pages/projects';

describe('Projects page', () => {
    it('renders without error', () => {
        const site = 'projects';
        const wrapper = factory(Projects, {site});
        const component = findComponent(wrapper, 'component-main');

        expect(component.exists()).toBe(true);
    });
});
