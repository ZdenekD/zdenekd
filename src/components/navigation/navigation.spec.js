import {factoryStore, findComponent} from '../../__test__/utils/helpers';
import Navigation from './index';
import data from '../../data/pages';

describe('Navigation', () => {
    const defaultProps = {menu: {isOpen: false, isAnimated: false}};
    let wrapper;

    beforeEach(() => {
        wrapper = factoryStore(Navigation, defaultProps);
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
