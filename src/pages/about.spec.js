import {factory, findComponent} from '../../__tests__/utils/helpers';
import About from './about';

describe('About page', () => {
    it('renders wihout error', () => {
        const site = 'about';
        const wrapper = factory(About, {site});
        const component = findComponent(wrapper, 'component-main');

        expect(component.length).toBe(1);
    });
});
