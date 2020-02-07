import {factory, findComponent} from '../../__test__/utils/helpers';
import Navigation from './index';
import data from '../../data/pages';

describe('Navigation', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = factory(Navigation);
    });

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-navigation');

        expect(component.length).toBe(1);
    });

    it('renders all pages links', () => {
        const {length} = Object.keys(data);
        const component = findComponent(wrapper, 'component-link');

        expect(component.length).toBe(length);
    });
});
