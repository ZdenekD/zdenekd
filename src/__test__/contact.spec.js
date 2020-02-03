import {factory, findComponent} from './utils/helpers';
import Contact from '../pages/contact';

describe('Contact page', () => {
    it('renders wihout error', () => {
        const site = 'contact';
        const wrapper = factory(Contact, {site});
        const component = findComponent(wrapper, 'component-main');

        expect(component.length).toBe(1);
    });
});
