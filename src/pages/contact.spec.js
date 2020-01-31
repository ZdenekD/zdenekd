import {factory, findComponent} from '../../__test__/utils/helpers';
import Contact from './contact';

describe('Contact page', () => {
    it('renders wihout error', () => {
        const site = 'contact';
        const wrapper = factory(Contact, {site});
        const component = findComponent(wrapper, 'component-main');

        expect(component.length).toBe(1);
    });
});
