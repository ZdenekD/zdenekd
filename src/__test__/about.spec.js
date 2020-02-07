import {factory, findComponent} from './utils/helpers';
import About from '../pages/about';

describe('About page', () => {
    it('renders without error', () => {
        const site = 'about';
        const wrapper = factory(About, {site});
        const component = findComponent(wrapper, 'component-main');

        expect(component.length).toBe(1);
    });
});
