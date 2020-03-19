import {factory, findComponent} from '../../__test__/utils/helpers';
import Header from './index';

describe('Header', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = factory(Header);
    });

    it('renders heading component without error', () => {
        const component = findComponent(wrapper, 'component-header');

        expect(component.exists()).toBe(true);
    });

    it('renders menu component without error', () => {
        const component = findComponent(wrapper, 'component-menu');

        expect(component.exists()).toBe(true);
    });
});
